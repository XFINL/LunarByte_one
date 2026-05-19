import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Colors} from '../constants/Colors';
import {SearchIcon, CloseIcon} from '../constants/Icons';
import {SearchHistoryItem} from '../types';

const STORAGE_KEY = 'search_history';
const MAX_HISTORY = 20;

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[]>([]);

  useEffect(() => {
    loadSearchHistory();
  }, []);

  const loadSearchHistory = async () => {
    try {
      const history = await AsyncStorage.getItem(STORAGE_KEY);
      if (history) {
        setSearchHistory(JSON.parse(history));
      }
    } catch (error) {
      console.error('Failed to load search history:', error);
    }
  };

  const saveSearchHistory = async (history: SearchHistoryItem[]) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    } catch (error) {
      console.error('Failed to save search history:', error);
    }
  };

  const addToHistory = (text: string) => {
    if (!text.trim()) return;

    const newItem: SearchHistoryItem = {
      id: Date.now().toString(),
      text: text.trim(),
      timestamp: Date.now(),
    };

    let newHistory = [
      newItem,
      ...searchHistory.filter(item => item.text !== text.trim()),
    ];

    if (newHistory.length > MAX_HISTORY) {
      newHistory = newHistory.slice(0, MAX_HISTORY);
    }

    setSearchHistory(newHistory);
    saveSearchHistory(newHistory);
    setSearchText('');
  };

  const removeFromHistory = (id: string) => {
    const newHistory = searchHistory.filter(item => item.id !== id);
    setSearchHistory(newHistory);
    saveSearchHistory(newHistory);
  };

  const handleLongPress = (id: string, text: string) => {
    Alert.alert('删除搜索记录', `确定要删除 "${text}" 吗？`, [
      {text: '取消', style: 'cancel'},
      {text: '删除', style: 'destructive', onPress: () => removeFromHistory(id)},
    ]);
  };

  const clearAllHistory = () => {
    if (searchHistory.length === 0) return;
    Alert.alert('清空搜索记录', '确定要清空所有搜索记录吗？', [
      {text: '取消', style: 'cancel'},
      {text: '清空', style: 'destructive', onPress: () => {
        setSearchHistory([]);
        saveSearchHistory([]);
      }},
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchIcon size={20} color={Colors.textSecondary} />
        <TextInput
          style={styles.searchInput}
          placeholder="搜索歌曲..."
          placeholderTextColor={Colors.textSecondary}
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={() => addToHistory(searchText)}
        />
        {searchText.length > 0 && (
          <TouchableOpacity onPress={() => setSearchText('')}>
            <CloseIcon size={20} color={Colors.textSecondary} />
          </TouchableOpacity>
        )}
      </View>

      {searchHistory.length > 0 && (
        <View style={styles.historyHeader}>
          <Text style={styles.historyTitle}>搜索记录</Text>
          <TouchableOpacity onPress={clearAllHistory}>
            <Text style={styles.clearText}>清空</Text>
          </TouchableOpacity>
        </View>
      )}

      <ScrollView style={styles.historyContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.tagsContainer}>
          {searchHistory.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.tag}
              onLongPress={() => handleLongPress(item.id, item.text)}
              onPress={() => {
                setSearchText(item.text);
                addToHistory(item.text);
              }}>
              <Text style={styles.tagText}>{item.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    padding: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.glassBackground,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
    paddingHorizontal: 20,
    paddingVertical: 15,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: Colors.text,
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 15,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text,
  },
  clearText: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  historyContainer: {
    flex: 1,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  tag: {
    backgroundColor: Colors.glassBackground,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
  },
  tagText: {
    fontSize: 14,
    color: Colors.text,
  },
});

export default SearchScreen;
