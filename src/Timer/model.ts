import { StyleProp, TextStyle, ViewStyle } from 'react-native';

interface IProps {
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

export type TimerProps = React.FC<IProps>;