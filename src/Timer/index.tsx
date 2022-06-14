/* eslint-disable no-bitwise */
import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import type { TimerProps } from './model';
import BackgroundTimer from 'react-native-background-timer';

const defaulProps = {
  style: {},
  textStyle: {},
  onTimes: (_seconds: number) => {},
  onPause: (_seconds: number) => {},
  onEnd: (_seconds: number) => {},
};

let interval: any = null;
let hours = 0;
let minute = 0;
let seconds = 0;
let currentSeconds = 0;

const TimerComponent = React.forwardRef<any, TimerProps>((props, ref) => {
  const {
    initialSeconds = 0,
    style,
    textStyle,
    fontFamily,
    autoStart = false,
    formatTime = 'hh:mm:ss',
    onEnd,
    onTimes,
    onPause,
  } = props;
  const [key, setKey] = useState(Math.random());

  useImperativeHandle(ref, () => {
    return { start, pause, resume, stop };
  });

  const timer = useCallback(() => {
    interval = BackgroundTimer.setInterval(() => {
      currentSeconds = currentSeconds + 1;
      if (seconds < 60) {
        seconds = seconds + 1;
      } else {
        seconds = 0;
        minute = minute + 1;
      }
      if (minute === 60) {
        minute = 0;
        hours = hours + 1;
      }
      if (onTimes) {
        onTimes(currentSeconds);
      }
      setKey(Math.random());
    }, 1000);
  }, [onTimes]);

  const initTime = useCallback((iSeconds: number) => {
    if (iSeconds >= 3600) {
      hours = ~~(iSeconds / 3600);
      const times = iSeconds % 3600;
      initTime(times);
    } else {
      if (iSeconds >= 60) {
        minute = ~~(iSeconds / 60);
        const times = iSeconds % 60;
        initTime(times);
      } else {
        seconds = iSeconds;
      }
    }
  }, []);

  const init = useCallback(() => {
    currentSeconds = 0;
    hours = 0;
    minute = 0;
    seconds = 0;
    if (initialSeconds > 0) {
      initTime(initialSeconds);
    }
    clear();
    setKey(Math.random());
  }, [initTime, initialSeconds]);

  const start = useCallback(() => {
    init();

    if (!interval) {
      timer();
    }
  }, [init, timer]);

  const pause = useCallback(() => {
    clear();
    if (onPause) {
      onPause(currentSeconds);
    }
  }, [onPause]);

  const resume = () => {
    if (!interval) {
      timer();
    }
  };

  const stop = () => {
    if (onEnd) {
      onEnd(currentSeconds);
    }

    init();
    setKey(Math.random());
    clear();
  };

  const clear = () => {
    if (interval) {
      BackgroundTimer.clearInterval(interval);
      interval = null;
    }
  };

  useEffect(() => {
    return () => {
      pause();
      init();
      setKey(Math.random());
    };
  }, [init, pause]);

  useEffect(() => {
    if (initialSeconds > 0) {
      init();
    }
    setKey(Math.random());
  }, [init, initialSeconds]);

  useEffect(() => {
    if (autoStart) {
      start();
    }
  }, [autoStart, initialSeconds, start]);

  const font = () => {
    if (fontFamily) {
      return {
        fontFamily: fontFamily,
      };
    } else {
      return {};
    }
  };

  const renderTimer = () => {
    if (formatTime === 'hh:mm:ss') {
      if (hours > 0) {
        return (
          <Text style={[styles.text, textStyle, font()]}>{`${hours}:${
            minute.toString().length === 1 ? '0' : ''
          }${minute}:${
            seconds.toString().length === 1 ? '0' : ''
          }${seconds}`}</Text>
        );
      } else {
        if (minute > 0) {
          return (
            <Text style={[styles.text, textStyle, font()]}>{`${minute}:${
              seconds.toString().length === 1 ? '0' : ''
            }${seconds}`}</Text>
          );
        } else {
          return (
            <Text style={[styles.text, textStyle, font()]}>{`${seconds}`}</Text>
          );
        }
      }
    } else {
      return (
        <Text
          style={[styles.text, textStyle, font()]}
        >{`${currentSeconds}`}</Text>
      );
    }
  };

  return (
    <View style={style} key={key}>
      {renderTimer()}
    </View>
  );
});

TimerComponent.defaultProps = defaulProps;

export default TimerComponent;
