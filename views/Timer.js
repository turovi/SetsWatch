import React from "react";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import { TimerCountDownDisplay } from "../components/TimerCountDowndDisplay";
import { UpdateTimerButton } from "../components/UpdateTimerButton";
import { TimerSelector } from "../components/TimerSelector";

const Focus_Time_MINUTES = 0.1 * 60 * 1000;
const Focus_Time_SECONDS = 1 * 1000;
const BREAK_Time_MINUTES = 0.1 * 60 * 1000;

export const Timer = () => {
  const [timerCount, setTimerCount] = useState(1);
  const [timerInterval, setTimerInterval] = useState(null);
  const [isTimerRunning, setIstimerRunning] = useState(false);
  const [isTimerCalled, setIsTimerCalled] = useState(false);
  const [isTimerReset, setIsTimerReset] = useState(false);
  const [minutesTime, setMinutesTime] = useState(0);
  const [secondsTime, setSecondsTime] = useState(5000);
  const [sets, setSets] = useState(1);





  useEffect(() => {

    
        if (timerCount === 0) {
         
           stopTimer()
           setSets((prev) => prev += 1 );
           
           resetTimer()
           
        }

  }, [timerCount]);

  useEffect(() => {
    
    setTimerCount(minutesTime + secondsTime);
  }, [secondsTime, minutesTime]);

  const handleSelectedMinutes = (selectedMinutes) => {
    setMinutesTime(selectedMinutes * 60 * 1000);
  };

  const handleSelectedSeconds = (selectedSeconds) => {
    setSecondsTime(selectedSeconds * 1000);
  };



  const startTimer = () => {
    

    setIstimerRunning(true);
    const id = setInterval(() => setTimerCount((prev) => prev - 1000), 1000);
    setTimerInterval(id);

    
    
  };

  const stopTimer = () => {
    if (timerInterval != null) {
      clearInterval(timerInterval);
    }
    setIstimerRunning(false);
  };

  const resetTimer = () => {
    if (timerInterval != null) {
      clearInterval(timerInterval);
    }

      setTimerCount(minutesTime + secondsTime);
    
    stopTimer();
  };

  const resetSets = ()=>{
    if (timerInterval != null) {
      clearInterval(timerInterval);
    }
    setSets(1)

   resetTimer()
    
    
  }



  return (
    <SafeAreaView
      style={{
        ...styles.container,
        backgroundColor:"#738295"
      }}
    >


      <StatusBar style="auto" />
      <UpdateTimerButton
        isTimerRunning={isTimerRunning}
        startTimer={startTimer}
        stopTimer={stopTimer}
      />
      <TimerCountDownDisplay timerDate={new Date(timerCount)} />
      <Text>Actual set : {sets}</Text>

      <TimerSelector
        isTimerRunning = {isTimerRunning}
        onSelectedMinutesChange={handleSelectedMinutes}
        onSelectedSecondsChange={handleSelectedSeconds}
      />

      <Button onPress={resetTimer} title="Reset" />
      <Button onPress={resetSets} title="Reset all sets" />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: "100%",
    backgroundColor: "#535458",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    height: "75%",
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  }
 
});
