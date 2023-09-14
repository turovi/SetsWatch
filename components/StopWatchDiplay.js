import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StopWatchDisplay = ({ elapsedTime }) => {
  const centiseconds = Math.floor(elapsedTime / 10) % 100;
  const seconds = Math.floor(elapsedTime / 1000) % 60;
  const minutes = Math.floor(elapsedTime / 60000);
    // console.log(elapsedTime)
  return (
    <View>
      <Text style={styles.timerText}>
        {minutes < 10 ? '0' : ''}
        {minutes}:{seconds < 10 ? '0' : ''}
        {seconds}:{centiseconds < 10 ? '0' : ''}
        {centiseconds}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timerText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
});

export default StopWatchDisplay;
