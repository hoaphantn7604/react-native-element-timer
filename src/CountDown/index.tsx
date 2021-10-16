import React, { useEffect, useImperativeHandle, useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { Props } from './type';

const defaulProps = {
  style: {},
  textStyle: {},
  onTimes: (seconds: number) => { },
  onPause: (seconds: number) => { },
  onEnd: (seconds: number) => { },
};

let interval: any = null;
let hours = 0;
let minute = 0;
let seconds = 0;
let currentSeconds = 0;

const CountdownComponent = React.forwardRef((props: Props, ref) => {
  const { style, textStyle, fontFamily, onEnd, onTimes, onPause } = props;
  const [key, setKey] = useState(Math.random());

  useImperativeHandle(ref, () => {
    return { start, pause, resume, stop };
  });

  useEffect(() => {
    init();
    return () => {
      stop();
    }
  }, [props.seconds]);

  const init = () => {
    if (props.seconds) {
      currentSeconds = props.seconds;
      hours = ~~(currentSeconds / 3600);
      minute = ~~((currentSeconds % 3600) / 60);
      seconds = ~~currentSeconds % 60;
    }
    clear();
    setKey(Math.random());
  };


  const timer = () => {
    interval = setInterval(() => {
      if (currentSeconds > 0) {
        currentSeconds = currentSeconds - 1;
        hours = ~~(currentSeconds / 3600);
        minute = ~~((currentSeconds % 3600) / 60);
        seconds = ~~currentSeconds % 60;

        if (onTimes) {
          onTimes(currentSeconds);
        }

      }
      if (currentSeconds <= 0) {
        if (onEnd) {
          onEnd(currentSeconds);
        }
        clear();
      }
      setKey(Math.random());
    }, 1000);
  };

  const start = () => {
    init();

    if (!interval) {
      timer();
    }
  };

  const pause = () => {
    if(onPause){
      onPause(currentSeconds);
    }
    clear();
  };

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
    clear();
  };

  const clear = () => {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  };

  const font = () => {
    if (fontFamily) {
      return {
        fontFamily: fontFamily
      }
    } else {
      return {}
    }
  };

  const renderTimer = () => {
    if (hours > 0) {
      return <Text style={[styles.text, textStyle, font()]}>{`${hours}:${minute.toString().length === 1 ? '0' : ''}${minute}:${seconds.toString().length === 1 ? '0' : ''
        }${seconds}`}</Text>
    } else {
      if (minute > 0) {
        return <Text style={[styles.text, textStyle, font()]}>{`${minute}:${seconds.toString().length === 1 ? '0' : ''
          }${seconds}`}</Text>
      } else {
        return <Text style={[styles.text, textStyle, font()]}>{`${seconds}`}</Text>
      }
    }

  }

  return (
    <View style={style} key={key}>
      {renderTimer()}
    </View>
  );
});

CountdownComponent.defaultProps = defaulProps;

export default CountdownComponent;
