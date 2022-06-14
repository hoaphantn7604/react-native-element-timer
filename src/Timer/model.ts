import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface ITimerRef {
  start: () => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
}

export interface TimerProps {
  initialSeconds?: number;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  fontFamily?: string;
  autoStart?: boolean;
  formatTime?: 'ss' | 'hh:mm:ss';
  onTimes?: (seconds: number) => void;
  onPause?: (seconds: number) => void;
  onEnd?: (seconds: number) => void;
}
