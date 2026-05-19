import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Colors} from '../constants/Colors';
import {UserIcon, HeartIcon, ListIcon} from '../constants/Icons';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.profileSection}>
        <View style={styles.avatarContainer}>
          <UserIcon size={60} color={Colors.text} />
        </View>
        <Text style={styles.username}>音乐爱好者</Text>
        <Text style={styles.userDesc}>享受音乐，享受生活</Text>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuIconContainer}>
            <HeartIcon size={24} color={Colors.text} />
          </View>
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>点赞列表</Text>
            <Text style={styles.menuSubtitle}>你喜欢的歌曲都在这里</Text>
          </View>
          <View style={styles.arrow}>
            <Text style={styles.arrowText}>{`>`}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuIconContainer}>
            <ListIcon size={24} color={Colors.text} />
          </View>
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>我的歌单</Text>
            <Text style={styles.menuSubtitle}>管理你的播放列表</Text>
          </View>
          <View style={styles.arrow}>
            <Text style={styles.arrowText}>{`>`}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>128</Text>
          <Text style={styles.statLabel}>收藏歌曲</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>创建歌单</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>5.2k</Text>
          <Text style={styles.statLabel}>播放次数</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  profileSection: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 40,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.glassBackground,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
    marginTop: 20,
  },
  userDesc: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 8,
  },
  menuContainer: {
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.glassBackground,
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  menuIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuTextContainer: {
    flex: 1,
    marginLeft: 15,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
  },
  menuSubtitle: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  arrow: {
    paddingLeft: 10,
  },
  arrowText: {
    fontSize: 20,
    color: Colors.textSecondary,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 30,
    paddingVertical: 30,
    backgroundColor: Colors.glassBackground,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
  },
  statLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 6,
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: Colors.glassBorder,
  },
});

export default ProfileScreen;
