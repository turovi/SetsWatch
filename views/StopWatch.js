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






// import React, { useState, useRef } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// // import moment from 'moment'

// export const StopWatch = () => {
//   const [timer, setTimer] = useState(0);
//   const [timerCenti, setTimerCenti] = useState(0);
//   const [isActive, setIsActive] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);
//   const countRef = useRef(null);// reference to the interval ID
//   const centiCountRef = useRef(null);// reference to the interval ID

//     // function to handle the start button press
//   const handleStart = () => {
//     setIsActive(true);
//     setIsPaused(false);
//     countRef.current = setInterval(() => {
//       setTimer((timer) => timer + 1);
//     }, 1000);
//     centiCountRef.current = setInterval(() => {
//         setTimerCenti((timer) => timer + 1);
//       }, 1 );
//   };
//   // function to handle the pause button press
//   const handlePause = () => {
//     clearInterval(countRef.current);
//     clearInterval(centiCountRef.current);
//     setIsPaused(true);
//   };
// // function to handle the continue button press
//   const handleContinue = () => {
//     setIsPaused(false);
//     countRef.current = setInterval(() => {
//       setTimer((timer) => timer + 1);
//     }, 1000);
//     centiCountRef.current = setInterval(() => {
//         setTimerCenti((timer) => timer + 1);
//       }, 1);
//   };
// // function to handle the reset button press
//   const handleReset = () => {
//     clearInterval(countRef.current);
//     clearInterval(centiCountRef.current);
//     setIsActive(false);
//     setIsPaused(false);
//     setTimer(0);
//     setTimerCenti(0)
//   };
//   // calculate the time values for display
//   const formatTime = (time, timerCenti) => {
//     // const minutes = Math.floor(time / 60)
//     // const seconds = time  % 60;
//     // const centiseconds = Math.floor(timerCenti*1.75 ) % 100;
   
    
//     // return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${centiseconds.toString().padStart(2, '0')}`;

//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;


   
    
//   };

//   return (
//     <View style={styles.container}>
      
//       <View style={styles.timerContainer}>
//         <Text style={styles.timer}>{formatTime(timer, timerCenti)}</Text>
//       </View>
//       <View style={styles.buttonContainer}>
//         {!isActive && !isPaused ? (
//           <TouchableOpacity style={styles.button} onPress={handleStart}>
//             <Text style={styles.buttonText}>Start</Text>
//           </TouchableOpacity>
//         ) : (
//           <>
//             <TouchableOpacity style={styles.button} onPress={handlePause}>
//               <Text style={styles.buttonText}>Pause</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={handleReset}>
//               <Text style={styles.buttonText}>Reset</Text>
//             </TouchableOpacity>
//             {isPaused && (
//               <TouchableOpacity style={styles.button} onPress={handleContinue}>
//                 <Text style={styles.buttonText}>Continue</Text>
//               </TouchableOpacity>
//             )}
//           </>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   timerContainer: {
//     borderWidth: 4,
//     borderColor: 'black',
//     width: 250,
//     height: 250,
//     borderRadius: 250 / 2,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   timer: {
//     fontSize: 50,
//     color: 'black',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     marginTop: 30,
//   },
//   button: {
//     width: 80,
//     height: 80,
//     borderRadius: 80 / 2,
//     backgroundColor: 'blue',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginHorizontal: 20,
//   },
//   buttonText: {
//     fontSize: 20,
//     color: '#fff',
//   },
// });




















// import React, { Component } from 'react';
// import { AppRegistry, StyleSheet,Text,View, TouchableHighlight } from 'react-native';
// import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
 
// class StopWatch extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       timerStart: false,
//       stopwatchStart: false,
//       totalDuration: 90000,
//       timerReset: false,
//       stopwatchReset: false,
//     };
//     this.toggleTimer = this.toggleTimer.bind(this);
//     this.resetTimer = this.resetTimer.bind(this);
//     this.toggleStopwatch = this.toggleStopwatch.bind(this);
//     this.resetStopwatch = this.resetStopwatch.bind(this);
//   }
 
//   toggleTimer() {
//     this.setState({timerStart: !this.state.timerStart, timerReset: false});
//   }
 
//   resetTimer() {
//     this.setState({timerStart: false, timerReset: true});
//   }
 
//   toggleStopwatch() {
//     this.setState({stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false});
//   }
 
//   resetStopwatch() {
//     this.setState({stopwatchStart: false, stopwatchReset: true});
//   }
  
//   getFormattedTime(time) {
//       this.currentTime = time;
//   };
 
//   render() {
//     return (
//       <View>
//         <Stopwatch laps msecs start={this.state.stopwatchStart}
//           reset={this.state.stopwatchReset}
//           options={options}
//           getTime={this.getFormattedTime} />
//         <TouchableHighlight onPress={this.toggleStopwatch}>
//           <Text style={{fontSize: 30}}>{!this.state.stopwatchStart ? "Start" : "Stop"}</Text>
//         </TouchableHighlight>
//         <TouchableHighlight onPress={this.resetStopwatch}>
//           <Text style={{fontSize: 30}}>Reset</Text>
//         </TouchableHighlight>
//         <Timer totalDuration={this.state.totalDuration} msecs start={this.state.timerStart}
//           reset={this.state.timerReset}
//           options={options}
//           handleFinish={handleTimerComplete}
//           getTime={this.getFormattedTime} />
//         <TouchableHighlight onPress={this.toggleTimer}>
//           <Text style={{fontSize: 30}}>{!this.state.timerStart ? "Start" : "Stop"}</Text>
//         </TouchableHighlight>
//         <TouchableHighlight onPress={this.resetTimer}>
//           <Text style={{fontSize: 30}}>Reset</Text>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }
 
// const handleTimerComplete = () => alert("custom completion function");
 
// const options = {
//   container: {
//     backgroundColor: '#000',
//     padding: 5,
//     borderRadius: 5,
//     width: 220,
//   },
//   text: {
//     fontSize: 30,
//     color: '#FFF',
//     marginLeft: 7,
//   }
// };



// AppRegistry.registerComponent('StopWatch', () => TestApp);













// import { Text, View, StatusBar, SafeAreaView, StyleSheet } from "react-native";
// import { CircleButton } from "../components/CircleButton";
// import { useStopWatch } from "../components/useStopWatch";
// import { LapList } from "../components/LapList";

// const StopWatch = () => {
//   const {
//     time,
//     isRunning,
//     start,
//     stop,
//     reset,
//     lap,
//     laps,
//     currentLapTime,
//     hasStarted,
//     slowestLapTime,
//     fastestLapTime,
//     dataLoaded,
//   } = useStopWatch();

//   if (!dataLoaded) {
//     return null;
//   }

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <StatusBar />
//       <View style={styles.container}>
//         <Text style={styles.timeText}>{time}</Text>

//         <View style={styles.row}>
//           <CircleButton
//             onPress={() => {
//               isRunning ? lap() : reset();
//             }}
//           >
//             {isRunning ? "Lap" : "Reset"}
//           </CircleButton>
//           <CircleButton
//             onPress={() => {
//               isRunning ? stop() : start();
//             }}
//             color={isRunning ? "red" : "green"}
//           >
//             {isRunning ? "Stop" : "Start"}
//           </CircleButton>
//         </View>

//         <LapList
//           hasStarted={hasStarted}
//           currentLapTime={currentLapTime}
//           laps={laps}
//           fastestLapTime={fastestLapTime}
//           slowestLapTime={slowestLapTime}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, alignItems: "center" },
//   timeText: {
//     fontSize: 60,
//     fontWeight: "300",
//     marginTop: 100,
//     fontVariant: ["tabular-nums"], // fixed width character
//   },
//   row: {
//     flexDirection: "row",
//     width: "100%",
//     justifyContent: "space-between",
//     paddingHorizontal: 20,
//     marginTop: 100,
//   },
// });

// export default StopWatch;




import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const StopWatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
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
  };

  const updateTime = () => {
    const now = Date.now();
    setElapsedTime(now - startTime);
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
      <TouchableOpacity
        style={styles.button}
        onPress={startStopChronometer}
      >
        <Text style={styles.buttonText}>
          {isRunning ? 'Stop' : 'Start'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.resetButton]}
        onPress={resetChronometer}
      >
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
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
});
