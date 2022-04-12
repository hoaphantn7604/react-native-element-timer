import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface Props {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  fontFamily?: string;
  initialSeconds: number;
  autoStart?: boolean;
  formatTime?: 'ss'| 'hh:mm:ss'
  onTimes?: (seconds: number) => void;
  onPause?: (seconds: number) => void;
  onEnd?: (seconds: number) => void;
}
