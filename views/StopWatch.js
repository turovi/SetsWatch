import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const StopWatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [laps, setLaps] = useState([]);
  const [lastLapTime, setLastLapTime] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(updateTime, 10);
      return () => clearInterval(intervalRef.current);
    }
  }, [isRunning]);

  const startStopChronometer = () => {
    if (isRunning) {
      setIsRunning(false);
    } else {
      setStartTime(Date.now() - elapsedTime);
      setIsRunning(true);
    }
  };

  const resetChronometer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setStartTime(0);
    setElapsedTime(0);
    setLaps([]);
    setLastLapTime(0);
  };

  const updateTime = () => {
    const now = Date.now();
    setElapsedTime(now - startTime);
    if (laps.length > 0) {
      setLastLapTime(now - laps[laps.length - 1].timestamp);
    } else {
      setLastLapTime(0);
    }
  };

  const addLap = () => {
    const lapTime = elapsedTime - lastLapTime;
    const newLap = { timestamp: Date.now(), lapTime };
    setLaps([...laps, newLap]);
    setLastLapTime(elapsedTime);
  };

  const formatTime = (timeInMilliseconds) => {
    const totalCentiseconds = Math.floor(timeInMilliseconds / 10);
    const centiseconds = totalCentiseconds % 100;
    const totalSeconds = Math.floor(totalCentiseconds / 1000);
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}.${centiseconds}`;
  };

  const centiseconds = Math.floor(elapsedTime / 10) % 100;
  const seconds = Math.floor(elapsedTime / 1000) % 60;
  const minutes = Math.floor(elapsedTime / 60000);

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>
        {minutes < 10 ? '0' : ''}
        {minutes}:{seconds < 10 ? '0' : ''}
        {seconds}:{centiseconds < 10 ? '0' : ''}
        {centiseconds}
      </Text>
      <TouchableOpacity style={styles.button} onPress={startStopChronometer}>
        <Text style={styles.buttonText}>{isRunning ? 'Stop' : 'Start'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.resetButton]}
        onPress={resetChronometer}
      >
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={addLap}>
        <Text style={styles.buttonText}>Lap</Text>
      </TouchableOpacity>
      {laps.length > 0 && (
        <View style={styles.lapsContainer}>
          <Text style={styles.lapHeaderText}>Laps:</Text>
          {laps.map((lap, index) => (
            <Text key={index} style={styles.lapText}>
              Lap {index + 1}: {formatTime(lap.lapTime)}
            </Text>
          ))}

        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  resetButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
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

export default StopWatch;
