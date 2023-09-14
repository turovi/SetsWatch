import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity, Pressable } from 'react-native';
import { TimerCountDownDisplay } from './components/PomodoroCountDownDisplay';
import {UpdateTimerButton} from './components/UpdateTimerButton';
import { TimerModedisplay } from './components/PomodoroModeDisplay';
import { TimerSelector } from './components/PomodoroSelector';
import { Pomodoro } from './views/Pomodoro';
import { StopWatch } from './views/StopWatch';
import {Timer} from './views/Timer'


export default function App() {

  const [isPomodoroCalled, setIsPomodoroCalled] = useState(true)
  const [isTimerCalled, setIsTimerCalled] = useState(false)
  const [isStopWatchCalled, setIsStopWatchCalled] = useState(false)


  const openPomodoro = () => {
    if (isPomodoroCalled != true) {
      setIsPomodoroCalled(true);
      setIsTimerCalled(false);
      setIsStopWatchCalled(false);
    }
  };

  const openTimer = () => {
    if (isTimerCalled != true) {
      setIsPomodoroCalled(false);
      setIsTimerCalled(true);
      setIsStopWatchCalled(false);
    }
  };

  const openStopWatch = () => {
    if (isStopWatchCalled != true) {
      setIsPomodoroCalled(false);
      setIsTimerCalled(false);
      setIsStopWatchCalled(true);
    }
  };


  return (
    <SafeAreaView style={styles.container}>
       <Pomodoro  openPomodoro = {openPomodoro}/>
       {/* <StopWatch/> */}
       <Timer openTimer = {openTimer}/>
       
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={openPomodoro}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Pomodoro</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={openTimer}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Timer</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={openStopWatch}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>StopWatch</Text>
          </View>
        </TouchableOpacity>
      </View>

    </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonContainer : {
    display:"flex",
    padding : "5%",
    justifyContent: "space-around",
    textAlign:"center"
  },
  button : {
		marginVertical: 10,
		height: 40,
		marginHorizontal: 10,
		backgroundColor: '#5d57ff',
		justifyContent: 'center',
		alignItems: 'center',
  },
  buttonText : {
    color:"white",
    fontFamily:"Montserrat-VariableFont_wght",
    fontWeight:"bold",
    textTransform:"capitalize"
  }

});