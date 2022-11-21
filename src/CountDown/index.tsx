/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-bitwise */
import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import type { CountDownProps } from './model';
import BackgroundTimer from 'react-native-background-timer';

const defaultProps = {
  style: {},
  textStyle: {},
  onTimes: (_seconds: number) => {},
  onPause: (_seconds: number) => {},
  onEnd: (_seconds: number) => {},
};

const CountdownComponent = React.forwardRef<any, CountDownProps>(
  (props, ref) => {
    const {
      initialSeconds,
      style,
      textStyle,
      fontFamily,
      autoStart = false,
      formatTime = 'hh:mm:ss',
      onEnd,
      onTimes,
      onPause,
    } = props;

    const interval = useRef(0);
    const hours = useRef(0);
    const minute = useRef(0);
    const seconds = useRef(0);
    const currentSeconds = useRef(0);

    const [key, setKey] = useState(Math.random());

    useImperativeHandle(ref, () => {
      return { start, pause, resume, stop };
    });

    const init = useCallback(() => {
      if (initialSeconds) {
        currentSeconds.current = initialSeconds;
        hours.current = ~~(currentSeconds.current / 3600);
        minute.current = ~~((currentSeconds.current % 3600) / 60);
        seconds.current = ~~currentSeconds.current % 60;
      }
      setKey(Math.random());
    }, [initialSeconds]);

    const pause = useCallback(() => {
      if (onPause) {
        onPause(currentSeconds.current);
      }
      clear();
    }, []);

    const resume = () => {
      if (!interval.current) {
        timer();
      }
    };

    const stop = () => {
      if (onEnd) {
        onEnd(currentSeconds.current);
      }

      init();
      clear();
    };

    useEffect(() => {
      init();
    }, [initialSeconds]);

    useEffect(() => {
      return () => {
        pause();
      };
    }, []);

    useEffect(() => {
      if (autoStart) {
        start();
      }
    }, [autoStart]);

    const timer = useCallback(() => {
      interval.current = BackgroundTimer.setInterval(() => {
        if (currentSeconds.current > 0) {
          currentSeconds.current = currentSeconds.current - 1;
          hours.current = ~~(currentSeconds.current / 3600);
          minute.current = ~~((currentSeconds.current % 3600) / 60);
          seconds.current = ~~currentSeconds.current % 60;

          if (onTimes) {
            onTimes(currentSeconds.current);
          }
        }
        if (currentSeconds.current <= 0) {
          if (onEnd) {
            onEnd(currentSeconds.current);
          }
          clear();
        }
        setKey(Math.random());
      }, 1000);
    }, []);

    const start = useCallback(() => {
      init();

      if (!interval.current) {
        timer();
      }
    }, []);

    const clear = () => {
      if (interval.current) {
        BackgroundTimer.clearInterval(interval.current);
        interval.current = 0;
      }
    };

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
        if (hours.current > 0) {
          return (
            <Text style={[styles.text, textStyle, font()]}>{`${hours.current}:${
              minute.current.toString().length === 1 ? '0' : ''
            }${minute.current}:${
              seconds.current.toString().length === 1 ? '0' : ''
            }${seconds.current}`}</Text>
          );
        } else {
          if (minute.current > 0) {
            return (
              <Text style={[styles.text, textStyle, font()]}>{`${
                minute.current
              }:${seconds.current.toString().length === 1 ? '0' : ''}${
                seconds.current
              }`}</Text>
            );
          } else {
            return (
              <Text
                style={[styles.text, textStyle, font()]}
              >{`${seconds.current}`}</Text>
            );
          }
        }
      } else {
        return (
          <Text
            style={[styles.text, textStyle, font()]}
          >{`${currentSeconds.current}`}</Text>
        );
      }
    };

    return (
      <View style={style} key={key}>
        {renderTimer()}
      </View>
    );
  }
);

CountdownComponent.defaultProps = defaultProps;

export default CountdownComponent;
