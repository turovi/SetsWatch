import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { TimerCountDownDisplay } from './components/PomodoroCountDownDisplay';
import {UpdateTimerButton} from './components/UpdateTimerButton';
import { TimerModedisplay } from './components/PomodoroModeDisplay';
import { TimerSelector } from './components/PomodoroSelector';
import { Pomodoro } from './views/Pomodoro';
import { StopWatch } from './views/StopWatch';
import {Timer} from './views/Timer'


export default function App() {


  return (
    <SafeAreaView style={styles.container}>
       {/* <Pomodoro /> */}
       {/* <StopWatch/> */}
       <Timer/>
       {/* <Text>Pomodoro</Text> */}
       {/* <Text>Chrono</Text> */}
       {/* <Text>Minuteur</Text> */}
    </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  
  

});