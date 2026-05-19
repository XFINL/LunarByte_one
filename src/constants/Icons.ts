import { createElement } from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
  size?: number;
  color?: string;
  filled?: boolean;
}

export const SearchIcon = ({ size = 24, color = '#000' }: IconProps) => {
  return createElement(Svg, {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: '2',
    children: createElement(Path, { d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' })
  });
};

export const PlayIcon = ({ size = 24, color = '#000' }: IconProps) => {
  return createElement(Svg, {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: '2',
    children: createElement(Path, { d: 'M5 3v18l15-9L5 3z' })
  });
};

export const UserIcon = ({ size = 24, color = '#000' }: IconProps) => {
  return createElement(Svg, {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: '2',
    children: [
      createElement(Path, { key: 1, d: 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2' }),
      createElement(Path, { key: 2, d: 'M12 11a4 4 0 100-8 4 4 0 000 8z' })
    ]
  });
};

export const HeartIcon = ({ size = 24, color = '#000', filled = false }: IconProps) => {
  return createElement(Svg, {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: filled ? color : 'none',
    stroke: color,
    strokeWidth: '2',
    children: createElement(Path, { d: 'M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z' })
  });
};

export const DownloadIcon = ({ size = 24, color = '#000' }: IconProps) => {
  return createElement(Svg, {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: '2',
    children: [
      createElement(Path, { key: 1, d: 'M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4' }),
      createElement(Path, { key: 2, d: 'M7 10l5 5 5-5' }),
      createElement(Path, { key: 3, d: 'M12 15V3' })
    ]
  });
};

export const MusicIcon = ({ size = 24, color = '#000' }: IconProps) => {
  return createElement(Svg, {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: '2',
    children: [
      createElement(Path, { key: 1, d: 'M9 18V5l12-2v13' }),
      createElement(Path, { key: 2, d: 'M9 18a2 2 0 11-4 0 2 2 0 014 0z' }),
      createElement(Path, { key: 3, d: 'M21 16a2 2 0 11-4 0 2 2 0 014 0z' })
    ]
  });
};

export const ListIcon = ({ size = 24, color = '#000' }: IconProps) => {
  return createElement(Svg, {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: '2',
    children: createElement(Path, { d: 'M3 12h18M3 6h18M3 18h18' })
  });
};

export const CloseIcon = ({ size = 24, color = '#000' }: IconProps) => {
  return createElement(Svg, {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: '2',
    children: createElement(Path, { d: 'M18 6L6 18M6 6l12 12' })
  });
};
