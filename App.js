import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { TimerCountDownDisplay } from './components/TimerCountDownDisplay';
import {UpdateTimerButton} from './components/UpdateTimerButton';
import { TimerModedisplay } from './components/TimerModeDisplay';
import { TimerSelector } from './components/TimerSelector';
import { Pomodoro } from './views/Pomodoro';
import { StopWatch } from './views/StopWatch';



export default function App() {


  return (
    <SafeAreaView style={styles.container}>
       {/* <Pomodoro /> */}
       <StopWatch/>
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