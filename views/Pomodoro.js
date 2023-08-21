import React from "react";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import { TimerCountDownDisplay } from "../components/TimerCountDownDisplay";
import { UpdateTimerButton } from "../components/UpdateTimerButton";
import { TimerModedisplay } from "../components/TimerModeDisplay";
import { TimerSelector } from "../components/TimerSelector";

const Focus_Time_MINUTES = 0.1 * 60 * 1000;
const Focus_Time_SECONDS = 1 * 1000;
const BREAK_Time_MINUTES = 0.1 * 60 * 1000;
let i = 0
let s = 1
export const Pomodoro = () => {
  const [timerCount, setTimerCount] = useState(1);
  const [timerInterval, setTimerInterval] = useState(null);
  const [isTimerRunning, setIstimerRunning] = useState(false);
  const [timerMode, setTimerMode] = useState(true);
  const [isTimerCalled, setIsTimerCalled] = useState(false);
  const [isTimerReset, setIsTimerReset] = useState(false);
  const [focusMinutesTime, setFocusMinutesTime] = useState(0);
  const [focusSecondsTime, setFocusSecondsTime] = useState(5000);
  const [breakMinutesTime, setBreakMinutesTime] = useState(0);
  const [breakSecondsTime, setBreakSecondsTime] = useState(5000);
  const [sets, setSets] = useState(1);





  useEffect(() => {

        
        if (timerCount === 0) {
          if(i < sets){
            if (timerMode === true) {
              setTimerMode(false);
              setTimerCount(breakMinutesTime + breakSecondsTime);
              i++
  
            } else {
              setTimerMode(true);
              setTimerCount(focusMinutesTime + focusSecondsTime);
              
            s++
  
            }

          }else{
            stopTimer();
            setTimerMode(true);
            setTimerCount(focusMinutesTime + focusSecondsTime);
            i = 0
          }

         

        }

  }, [timerCount]);

  useEffect(() => {
    setTimerMode(true);
    setTimerCount(focusMinutesTime + focusSecondsTime);
  }, [isTimerCalled]);

  const handleSelectedMinutes = (selectedMinutes) => {
    setFocusMinutesTime(selectedMinutes * 60 * 1000);
  };

  const handleSelectedSeconds = (selectedSeconds) => {
    setFocusSecondsTime(selectedSeconds * 1000);
  };

  const handleBreakSelectedMinutes = (selectedMinutes) => {
    setBreakMinutesTime(selectedMinutes * 60 * 1000);
  };
  const handleBreakSelectedSeconds = (selectedSeconds) => {
    setBreakSecondsTime(selectedSeconds * 1000);
  };
  const handleSets = (selectedSets) => {
    setSets(selectedSets);
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

    if (timerMode === false) {
      setTimerCount(breakMinutesTime + breakSecondsTime);
    } else {
      setTimerCount(focusMinutesTime + focusSecondsTime);
    }
    stopTimer();
  };

  const resetSets = ()=>{
    if (timerInterval != null) {
      clearInterval(timerInterval);
    }
    i = 0
    s = 1

    startTimer()
    
    
  }

  const openTime = () => {
    if (isTimerCalled === true) {
      setIsTimerCalled(false);
    } else {
      setIsTimerCalled(true);
    }
  };

  return (
    <SafeAreaView
      style={{
        ...styles.container,
        ...{ backgroundColor: timerMode === false ? "#738295" : "#535458" },
      }}
    >
      <TimerSelector
        isTimerCalled={isTimerCalled}
        openTime={openTime}
        onFocusSelectedMinutesChange={handleSelectedMinutes}
        onFocusSelectedSecondsChange={handleSelectedSeconds}
        onBreakSelectedMinutesChange={handleBreakSelectedMinutes}
        onBreakSelectedSecondsChange={handleBreakSelectedSeconds}
        onSetsChange={handleSets}
      />
      <TimerModedisplay timerMode={timerMode} />
      <StatusBar style="auto" />
      <UpdateTimerButton
        isTimerRunning={isTimerRunning}
        startTimer={startTimer}
        stopTimer={stopTimer}
      />
      <TimerCountDownDisplay timerDate={new Date(timerCount)} />
      <Text>Actual set : {s}/{sets}</Text>
      <Button onPress={openTime} title="Set Timer" />
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
  },
});
