import React, { useRef } from 'react';
import { StyleSheet, Button, Text, SafeAreaView } from 'react-native';
import { Timer, Countdown } from 'react-native-element-timer';

const TimerScreen: React.FC<any> = (_props) => {
  const timerRef = useRef<any>(null);
  const countdownRef = useRef<any>(null);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Timer:</Text>
      <Timer
        ref={timerRef}
        style={styles.timer}
        textStyle={styles.timerText}
        onTimes={(_e) => {}}
        onPause={(_e) => {}}
        onEnd={(_e) => {}}
      />
      <Button
        title={'Start'}
        onPress={() => {
          timerRef.current.start();
        }}
      />
      <Button
        title={'Pause'}
        onPress={() => {
          timerRef.current.pause();
        }}
      />
      <Button
        title={'Resume'}
        onPress={() => {
          timerRef.current.resume();
        }}
      />
      <Button
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
        initialSeconds={9}
        onTimes={(_e) => {}}
        onPause={(_e) => {}}
        onEnd={(_e) => {}}
      />
      <Button
        title={'Start'}
        onPress={() => {
          countdownRef.current.start();
        }}
      />
      <Button
        title={'Pause'}
        onPress={() => {
          countdownRef.current.pause();
        }}
      />
      <Button
        title={'Resume'}
        onPress={() => {
          countdownRef.current.resume();
        }}
      />
      <Button
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
    marginTop: 8,
    backgroundColor: 'white',
    borderRadius: 24,
    width: 100,
  },
});
