import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {Colors} from '../constants/Colors';
import {HeartIcon, DownloadIcon} from '../constants/Icons';
import {Song} from '../types';

const {width, height} = Dimensions.get('window');

const mockSongs: Song[] = [
  {
    id: '1',
    title: '夜曲',
    artist: '周杰伦',
    cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop',
    duration: 240,
  },
  {
    id: '2',
    title: '稻香',
    artist: '周杰伦',
    cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
    duration: 205,
  },
  {
    id: '3',
    title: '晴天',
    artist: '周杰伦',
    cover: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop',
    duration: 269,
  },
];

const PlayerScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [progress, setProgress] = useState(0.3);
  const translateY = useSharedValue(0);

  const currentSong = mockSongs[currentIndex];

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.startY = translateY.value;
    },
    onActive: (event, ctx: any) => {
      translateY.value = ctx.startY + event.translationY;
    },
    onEnd: (event) => {
      if (event.translationY < -100) {
        runOnJS(changeSong)(1);
      } else if (event.translationY > 100) {
        runOnJS(changeSong)(-1);
      }
      translateY.value = withSpring(0);
    },
  });

  const changeSong = (direction: number) => {
    setCurrentIndex((prev) => {
      let newIndex = prev + direction;
      if (newIndex >= mockSongs.length) {
        newIndex = 0;
      } else if (newIndex < 0) {
        newIndex = mockSongs.length - 1;
      }
      return newIndex;
    });
    setProgress(0);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value}],
  }));

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.content, animatedStyle]}>
          <Animated.Image
            source={{uri: currentSong.cover}}
            style={styles.cover}
          />

          <View style={styles.songInfo}>
            <Text style={styles.title}>{currentSong.title}</Text>
            <Text style={styles.artist}>{currentSong.artist}</Text>
          </View>

          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => setIsLiked(!isLiked)}>
              <HeartIcon size={32} color={Colors.secondary} filled={isLiked} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <DownloadIcon size={32} color={Colors.secondary} />
            </TouchableOpacity>
          </View>

          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, {width: `${progress * 100}%`}]} />
            </View>
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>
                {Math.floor((currentSong.duration * progress) / 60)}:
                {String(Math.floor((currentSong.duration * progress) % 60)).padStart(2, '0')}
              </Text>
              <Text style={styles.timeText}>
                {Math.floor(currentSong.duration / 60)}:
                {String(currentSong.duration % 60).padStart(2, '0')}
              </Text>
            </View>
          </View>

          <Text style={styles.hintText}>上下滑动切换歌曲</Text>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  cover: {
    width: width * 0.7,
    height: width * 0.7,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  songInfo: {
    marginTop: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.text,
  },
  artist: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginTop: 8,
  },
  actions: {
    flexDirection: 'row',
    marginTop: 40,
    gap: 40,
  },
  actionButton: {
    padding: 10,
  },
  progressContainer: {
    width: '100%',
    marginTop: 40,
  },
  progressBar: {
    width: '100%',
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
  },
  progressFill: {
    height: '100%',
    backgroundColor: Colors.secondary,
    borderRadius: 2,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  timeText: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  hintText: {
    marginTop: 30,
    fontSize: 14,
    color: Colors.textSecondary,
  },
});

export default PlayerScreen;
