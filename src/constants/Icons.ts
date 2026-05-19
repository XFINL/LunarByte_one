import Svg, { Path } from 'react-native-svg';
import React from 'react';

export const SearchIcon = ({ size = 24, color = '#000' }) => {
  const pathData = "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z";
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
      <Path d={pathData} />
    </Svg>
  );
};

export const PlayIcon = ({ size = 24, color = '#000' }) => {
  const pathData = "M5 3v18l15-9L5 3z";
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
      <Path d={pathData} />
    </Svg>
  );
};

export const UserIcon = ({ size = 24, color = '#000' }) => {
  const pathData1 = "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2";
  const pathData2 = "M12 11a4 4 0 100-8 4 4 0 000 8z";
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
      <Path d={pathData1} />
      <Path d={pathData2} />
    </Svg>
  );
};

export const HeartIcon = ({ size = 24, color = '#000', filled = false }) => {
  const pathData = "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z";
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? color : 'none'} stroke={color} strokeWidth="2">
      <Path d={pathData} />
    </Svg>
  );
};

export const DownloadIcon = ({ size = 24, color = '#000' }) => {
  const pathData1 = "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4";
  const pathData2 = "M7 10l5 5 5-5";
  const pathData3 = "M12 15V3";
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
      <Path d={pathData1} />
      <Path d={pathData2} />
      <Path d={pathData3} />
    </Svg>
  );
};

export const MusicIcon = ({ size = 24, color = '#000' }) => {
  const pathData1 = "M9 18V5l12-2v13";
  const pathData2 = "M9 18a2 2 0 11-4 0 2 2 0 014 0z";
  const pathData3 = "M21 16a2 2 0 11-4 0 2 2 0 014 0z";
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
      <Path d={pathData1} />
      <Path d={pathData2} />
      <Path d={pathData3} />
    </Svg>
  );
};

export const ListIcon = ({ size = 24, color = '#000' }) => {
  const pathData = "M3 12h18M3 6h18M3 18h18";
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
      <Path d={pathData} />
    </Svg>
  );
};

export const CloseIcon = ({ size = 24, color = '#000' }) => {
  const pathData = "M18 6L6 18M6 6l12 12";
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
      <Path d={pathData} />
    </Svg>
  );
};
