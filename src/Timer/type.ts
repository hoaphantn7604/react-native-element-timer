import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface Props {
  initialSeconds?: number;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  fontFamily?: string;
  autoStart?: boolean;
  formatTime?: 'ss'| 'hh:mm:ss'
  onTimes?: (seconds: number) => void;
  onPause?: (seconds: number) => void;
  onEnd?: (seconds: number) => void;
}
