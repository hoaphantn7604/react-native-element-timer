import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface ICountdownRef {
  start: () => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
}

interface IProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  fontFamily?: string;
  initialSeconds: number;
  autoStart?: boolean;
  formatTime?: 'ss' | 'hh:mm:ss';
  onTimes?: (seconds: number) => void;
  onPause?: (seconds: number) => void;
  onEnd?: (seconds: number) => void;
}

export type CountDownProps = IProps;
