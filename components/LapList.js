import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LapList = ({ laps }) => {
  return (
    <View style={styles.lapsContainer}>
      <Text style={styles.lapHeaderText}>Laps:</Text>
      {laps.map((lap, index) => (
        <Text key={index} style={styles.lapText}>
          Lap {index + 1}: {formatTime(lap.lapTime)}
        </Text>
      ))}
    </View>
  );
};

const formatTime = (timeInMilliseconds) => {
  const centiseconds = Math.floor(timeInMilliseconds / 10) % 100;
  const seconds = Math.floor(timeInMilliseconds / 1000) % 60;
  const minutes = Math.floor(timeInMilliseconds / 60000);
  return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}.${centiseconds}`;
};

const styles = StyleSheet.create({
  lapsContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  lapHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lapText: {
    fontSize: 16,
  },
});

export default LapList;
