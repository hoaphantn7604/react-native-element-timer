# react-native-element-timer
A component that displays a timer and countdown for React Native.
Implemented using [react-native-background-timer](https://github.com/ocetnik/react-native-background-timer)
## Getting started
```js
    npm install react-native-element-timer --save
```
or
```js
    yarn add react-native-element-timer
```

#### Demo
![](https://github.com/hoaphantn7604/file-upload/blob/master/document/timer/timer.gif)
![](https://github.com/hoaphantn7604/file-upload/blob/master/document/timer/countdown.gif)

#### Timer Props
| Props              | Type                 | isRequire | Description                             |
| ------------------ | -------------------- | --------- | --------------------------------------- |
| initialSeconds     | Number               | No        | Initial seconds, defalut is 0           |
| autoStart          | Boolean              | No        | Auto start timer                        |
| start              | ref.start()          | Yes       | Start timer                             |
| pause              | ref.pause()          | Yes       | Pause timer                             |
| resume             | ref.resume()         | Yes       | Resume timer                            |
| stop               | ref.stop()           | Yes       | Stop timer                              |
| style              | ViewStyle            | No        | Styling container view                  |
| fontFamily         | String               | No        | Customize font style                    |
| textStyle          | TextStyle            | No        | Styling text                            |
| formatTime         | hh:mm:ss or ss       | No        | Format time                             |
| onTimes            | (seconds) => void    | No        | callback when running time              |
| onPause            | (seconds) => void    | No        | Callback when the pause event is called |
| onEnd              | (seconds) => void    | No        | Callback when the stop event is called  |


#### Countdown Props
| Props              | Type                 | isRequire | default                                 |
| ------------------ | -------------------- | --------- | --------------------------------------- |
| initialSeconds     | Number               | Yes       | Initial seconds                         |
| autoStart          | Boolean              | No        | Auto start timer                        |
| start              | ref.start()          | Yes       | Start timer                             |
| pause              | ref.pause()          | Yes       | Pause timer                             |
| resume             | ref.resume()         | Yes       | Resume timer                            |
| stop               | ref.stop()           | Yes       | Stop timer                              |
| style              | ViewStyle            | No        | Styling container view                  |
| fontFamily         | String               | No        | Customize font style                    |
| textStyle          | TextStyle            | No        | Styling text                            |
| formatTime         | hh:mm:ss or ss       | No        | Format time                             |
| onTimes            | (seconds) => void    | No        | callback when running time              |
| onPause            | (seconds) => void    | No        | Callback when the pause event is called |
| onEnd              | (seconds) => void    | No        | Callback when the stop event is called  |

## Usage
```javascript
    import React, {useRef} from 'react';
    import {StyleSheet, Button, Text, SafeAreaView} from 'react-native';
    import {Timer, Countdown} from 'react-native-element-timer';

    const TimerScreen = _props => {
        const timerRef = useRef(null);
        const countdownRef = useRef(null);

        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.text}>Timer:</Text>
                <Timer
                    ref={timerRef}
                    style={styles.timer}
                    textStyle={styles.timerText}
                    onTimes={e => {}}
                    onPause={e => {}}
                    onEnd={e => {}}
                />
                <Button
                    style={styles.button}
                    title={'Start'}
                    onPress={() => {
                        timerRef.current.start();
                    }}
                />
                <Button
                    style={styles.button}
                    title={'Pause'}
                    onPress={() => {
                        timerRef.current.pause();
                    }}
                />
                <Button
                    style={styles.button}
                    title={'Resume'}
                    onPress={() => {
                        timerRef.current.resume();
                    }}
                />
                <Button
                    style={styles.button}
                    title={'Stop'}
                    onPress={() => {
                        timerRef.current.stop();
                    }}
                />

                <Text style={styles.text}>Countdown:</Text>
                <Countdown
                    ref={countdownRef}
                    style={styles.timer}
                    textStyle={styles.timerText}
                    initialSeconds={5}
                    onTimes={e => {}}
                    onPause={e => {}}
                    onEnd={(e) => {}}
                />
                <Button
                    style={styles.button}
                    title={'Start'}
                    onPress={() => {
                        countdownRef.current.start();
                    }}
                />
                <Button
                    style={styles.button}
                    title={'Pause'}
                    onPress={() => {
                        countdownRef.current.pause();
                    }}
                />
                <Button
                    style={styles.button}
                    title={'Resume'}
                    onPress={() => {
                        countdownRef.current.resume();
                    }}
                />
                <Button
                    style={styles.button}
                    title={'Stop'}
                    onPress={() => {
                        countdownRef.current.stop();
                    }}
                />
            </SafeAreaView>
        );
    };

    export default TimerScreen;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            padding: 20,
        },
        text: {
            fontWeight: 'bold',
            fontSize: 16,
            marginTop: 40,
        },
        timer: {
            marginVertical: 10,
        },
        timerText: {
            fontSize: 20,
        },
        button: {
            marginVertical: 5,
            backgroundColor: 'white',
            borderRadius: 24,
            width: 100,
        },
    });
```
