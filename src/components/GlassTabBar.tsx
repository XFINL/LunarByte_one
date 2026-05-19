import React from 'react';
import {View, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import Animated, {useAnimatedStyle, withSpring} from 'react-native-reanimated';
import {Colors} from '../constants/Colors';
import {SearchIcon, PlayIcon, UserIcon} from '../constants/Icons';

const {width} = Dimensions.get('window');

const GlassTabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  const icons = {
    Search: SearchIcon,
    Player: PlayIcon,
    Profile: UserIcon,
  };

  return (
    <View style={styles.container}>
      <Animated.View style={styles.glassContainer}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;
          const IconComponent = icons[route.name as keyof typeof icons] || PlayIcon;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const animatedStyle = useAnimatedStyle(() => ({
            transform: [{scale: withSpring(isFocused ? 1.2 : 1)}],
          }));

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={styles.tabButton}
              activeOpacity={0.8}>
              <Animated.View style={animatedStyle}>
                <IconComponent
                  size={24}
                  color={isFocused ? Colors.secondary : Colors.textSecondary}
                />
              </Animated.View>
            </TouchableOpacity>
          );
        })}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  glassContainer: {
    flexDirection: 'row',
    width: width * 0.7,
    height: 60,
    backgroundColor: Colors.glassBackground,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    overflow: 'hidden',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GlassTabBar;
