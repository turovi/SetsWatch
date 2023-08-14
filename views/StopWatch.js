// import React, { useState, useRef, useCallback } from "react";
// import { StyleSheet, SafeAreaView, Text, View, Platform } from "react-native";
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { StatusBar } from "expo-status-bar";
// import Constants from 'expo-constants';
// import Result from '../components/StopWatchResult';
// import Control from '../components/StopWatchControl';
// import { displayTime } from "../components/StopWatchUtil";
// import { StopWachHeader } from "../components/StopWachHeader";

// export  const StopWatch = () => {
//     const [time, setTime] = useState(0);
//     const [isRunning, setIsRunning] = useState(false);
//     const [results, setResults] = useState([]);
//     const timer = useRef(null);

//     const handleLeftButtonPress = useCallback(()=>{
//         if(isRunning){
//             setResults((previousResults) => [time, ... previousResults]);
//         }else{
//             setResults([]);
//             setTime(0);
    
//         }
//     }, [isRunning, time]);
    
//     const handleRightButtonPress = useCallback(()=>{
//         if(!isRunning){
//            const intervale = setInterval(()=> {
//             setTime((previousTime) => previousTime +1); 
//            }, 10);
//            timer.current = intervale;
    
//         }else{
//             clearInterval(timer.current);
//         }
    
//         setIsRunning((previousState) => !previousState)
    
//     }, [isRunning]);
    
//     return(
//         <SafeAreaProvider style={styles.container}>
//             <StopWachHeader/>
//             <StatusBar style='light' /> 
//             <View style={styles.display}>
//                 <Text style={styles.displayText}>{displayTime(time)}</Text>
//             </View>
    
//             <View style='styles.control'>
//                 <Control
//                 isRunning={isRunning}
//                 handleLeftButtonPress={handleLeftButtonPress}
//                 handleRightButtonPress={handleRightButtonPress}
//                 />
//             </View>
    
//             <View style={styles.result}>
//                 <Result results={results} />
                
                
//             </View>
//         </SafeAreaProvider> 
//     )
// }


// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundColor:'black',
//         paddingTop: Constants.statusBarHeight,
//     },
//     display:{
//         flex: 3/5,
//         justifyContent:'center',
//         alignItems:'center',
//     },
//     displayText:{
//         color:'#fff',
//         fontSize:70,
//         fontWeight:"200",
//         fontFamily: Platform.os === "ios" ? "Helvetica Nueue" : null,

//     },
//     control: {
//         height:70,
//         flexDirection:'row',
//         justifyContent:'space-around'
//     },

//     result:{flex:2/5,
// backgroundColor:'red'}
// })






import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import moment from 'moment'

export const StopWatch = () => {
  const [timer, setTimer] = useState(0);
  const [timerCenti, setTimerCenti] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);// reference to the interval ID
  const centiCountRef = useRef(null);// reference to the interval ID

    // function to handle the start button press
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    centiCountRef.current = setInterval(() => {
        setTimerCenti((timer) => timer + 1);
      }, 1 );
  };
  // function to handle the pause button press
  const handlePause = () => {
    clearInterval(countRef.current);
    clearInterval(centiCountRef.current);
    setIsPaused(true);
  };
// function to handle the continue button press
  const handleContinue = () => {
    setIsPaused(false);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    centiCountRef.current = setInterval(() => {
        setTimerCenti((timer) => timer + 1);
      }, 1);
  };
// function to handle the reset button press
  const handleReset = () => {
    clearInterval(countRef.current);
    clearInterval(centiCountRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
    setTimerCenti(0)
  };
  // calculate the time values for display
  const formatTime = (time, timerCenti) => {
    const minutes = Math.floor(time / 60)
    const seconds = time  % 60;
    const centiseconds = Math.floor(timerCenti * 1.6 ) % 100;
   
    
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${centiseconds.toString().padStart(2, '0')}`;

    // const minutes = Math.floor(time / 60);
    // const seconds = time % 60;
    // return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;


   
    
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.timerContainer}>
        <Text style={styles.timer}>{formatTime(timer, timerCenti)}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {!isActive && !isPaused ? (
          <TouchableOpacity style={styles.button} onPress={handleStart}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity style={styles.button} onPress={handlePause}>
              <Text style={styles.buttonText}>Pause</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleReset}>
              <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
            {isPaused && (
              <TouchableOpacity style={styles.button} onPress={handleContinue}>
                <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>
            )}
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerContainer: {
    borderWidth: 4,
    borderColor: 'black',
    width: 250,
    height: 250,
    borderRadius: 250 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer: {
    fontSize: 50,
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});

