# react-native-element-timer

## Getting started
```js
    npm install react-native-element-timer --save
```
or
```js
    yarn add react-native-element-timer
```

#### Demo
![](https://github.com/hoaphantn7604/file-upload/blob/master/document/component/timer.png)
![](https://github.com/hoaphantn7604/file-upload/blob/master/document/component/countdown.png)

#### Timer Props
| Props              | Params               | isRequire | Description      |
| ------------------ | -------------------- | --------- | ---------------- |
| start              | ref.start()          | Yes       |                  |
| pause              | ref.pause()          | Yes       |                  |
| resume             | ref.resume()         | Yes       |                  |
| stop               | ref.stop()           | Yes       |                  |
| style              | ViewStyle            | No        |                  |
| fontFamily         | String               | No        |                  |
| textStyle          | TextStyle            | No        |                  |
| onTimes            | (seconds) => void    | No        |                  |
| onEnd              | (seconds) => void    | No        |                  |


#### Countdown Props
| Props              | Params               | isRequire | default          |
| ------------------ | -------------------- | --------- | ---------------- |
| start              | ref.start()          | Yes       |                  |
| pause              | ref.pause()          | Yes       |                  |
| resume             | ref.resume()         | Yes       |                  |
| stop               | ref.stop()           | Yes       |                  |
| seconds            | Number               | Yes       |                  |
| style              | ViewStyle            | No        |                  |
| fontFamily         | String               | No        |                  |
| textStyle          | TextStyle            | No        |                  |
| onTimes            | (seconds) => void    | No        |                  |
| onEnd              | (seconds) => void    | No        |                  |

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
                    seconds={5}
                    onTimes={e => {}}
                    onEnd={() => {}}
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
