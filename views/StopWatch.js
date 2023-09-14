// import React, { useState, useRef, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// export const StopWatch = () => {
//   const [isRunning, setIsRunning] = useState(false);
//   const [startTime, setStartTime] = useState(0);
//   const [elapsedTime, setElapsedTime] = useState(0);
//   const [laps, setLaps] = useState([]);
//   const [lastLapTime, setLastLapTime] = useState(0);
//   const intervalRef = useRef();

//   useEffect(() => {
//     if (isRunning) {
//       intervalRef.current = setInterval(updateTime, 10);
//       return () => clearInterval(intervalRef.current);
//     }
//   }, [isRunning]);

//   const startStopChronometer = () => {
//     if (isRunning) {
//       setIsRunning(false);
//     } else {
//       setStartTime(Date.now() - elapsedTime);
//       setIsRunning(true);
//     }
//   };

//   const resetChronometer = () => {
//     clearInterval(intervalRef.current);
//     setIsRunning(false);
//     setStartTime(0);
//     setElapsedTime(0);
//     setLaps([]);
//     setLastLapTime(0);
//   };

//   const updateTime = () => {
//     const now = Date.now();
//     setElapsedTime(now - startTime);
//     if (laps.length > 0) {
//       setLastLapTime(now - laps[laps.length - 1].timestamp);
//     } else {
//       setLastLapTime(0);
//     }
//   };

//   const addLap = () => {
//     const lapTime = elapsedTime - lastLapTime;
//     const newLap = { timestamp: Date.now(), lapTime };
//     setLaps([...laps, newLap]);
//     setLastLapTime(elapsedTime);
//   };

//   const formatTime = (timeInMilliseconds) => {
//     const totalCentiseconds = Math.floor(timeInMilliseconds / 10);
//     const centiseconds = totalCentiseconds % 100;
//     const totalSeconds = Math.floor(totalCentiseconds / 1000);
//     const seconds = totalSeconds % 60;
//     const minutes = Math.floor(totalSeconds / 60);
//     return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}.${centiseconds}`;
//   };

//   const centiseconds = Math.floor(elapsedTime / 10) % 100;
//   const seconds = Math.floor(elapsedTime / 1000) % 60;
//   const minutes = Math.floor(elapsedTime / 60000);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.timerText}>
//         {minutes < 10 ? '0' : ''}
//         {minutes}:{seconds < 10 ? '0' : ''}
//         {seconds}:{centiseconds < 10 ? '0' : ''}
//         {centiseconds}
//       </Text>
//       <TouchableOpacity style={styles.button} onPress={startStopChronometer}>
//         <Text style={styles.buttonText}>{isRunning ? 'Stop' : 'Start'}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[styles.button, styles.resetButton]}
//         onPress={resetChronometer}
//       >
//         <Text style={styles.buttonText}>Reset</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={addLap}>
//         <Text style={styles.buttonText}>Lap</Text>
//       </TouchableOpacity>
//       {laps.length > 0 && (
//         <View style={styles.lapsContainer}>
//           <Text style={styles.lapHeaderText}>Laps:</Text>
//           {laps.map((lap, index) => (
//             <Text key={index} style={styles.lapText}>
//               Lap {index + 1}: {formatTime(lap.lapTime)}
//             </Text>
//           ))}

//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   timerText: {
//     fontSize: 48,
//     fontWeight: 'bold',
//   },
//   button: {
//     marginTop: 20,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     backgroundColor: 'blue',
//     borderRadius: 5,
//   },
//   resetButton: {
//     backgroundColor: 'red',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//   },
//   lapsContainer: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   lapHeaderText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   lapText: {
//     fontSize: 16,
//   },
// });

// export default StopWatch;

//------------------------

// import React, { useState, useRef, useEffect, useCallback } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// export const StopWatch = () => {
//   const [isRunning, setIsRunning] = useState(false);
//   const [startTime, setStartTime] = useState(0);
//   const [elapsedTime, setElapsedTime] = useState(0);
//   const [laps, setLaps] = useState([]);
//   const [lastLapTime, setLastLapTime] = useState(0);
//   const [displayCentiseconds, setDisplayCentiseconds] = useState(0);
//   const intervalRef = useRef();

//   const updateTime = () => {
//     const now = Date.now();
//     setElapsedTime(now - startTime);
//     if (laps.length > 0) {
//       setLastLapTime(now - laps[laps.length - 1].timestamp);
//     } else {
//       setLastLapTime(0);
//     }
//   };

//   useEffect(() => {
//     let intervalId;
//     if (isRunning) {
//       intervalId = setInterval(updateTime, 1000); // Update every 100ms
//     }
//     return () => clearInterval(intervalId);
//   }, [isRunning]);

//   const startStopChronometer = () => {
//     if (isRunning) {
//       setIsRunning(false);
//     } else {
//       setStartTime(Date.now() - elapsedTime);
//       setIsRunning(true);
//     }
//   };

//   useEffect(() => {
//     let displayIntervalId;
//     if (isRunning) {
//       displayIntervalId = setInterval(() => {
//         setDisplayCentiseconds((prevDisplayCentiseconds) => (prevDisplayCentiseconds + 1) % 100);
//       }, 10); // Update display centiseconds every 10ms for smoother rendering
//     }
//     return () => clearInterval(displayIntervalId);
//   }, [isRunning]);

//   const resetChronometer = () => {
//     clearInterval(intervalRef.current);
//     setIsRunning(false);
//     setStartTime(0);
//     setElapsedTime(0);
//     setLaps([]);
//     setLastLapTime(0);
//     setDisplayCentiseconds(0)
//   };

//   const addLap = useCallback(() => {
//     const lapTime = elapsedTime - lastLapTime;
//     setLaps((prevLaps) => [...prevLaps, { timestamp: Date.now(), lapTime }]);
//     setLastLapTime(elapsedTime);
//   }, [elapsedTime, lastLapTime]);

//   const formatTime = (timeInMilliseconds) => {
//     const totalCentiseconds = Math.floor(timeInMilliseconds / 10);
//     const centiseconds = totalCentiseconds % 100;
//     const totalSeconds = Math.floor(totalCentiseconds / 1000);
//     const seconds = totalSeconds % 60;
//     const minutes = Math.floor(totalSeconds / 60);
//     return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}.${centiseconds}`;
//   };

//   const centiseconds = Math.floor(elapsedTime / 10) % 100;
//   const seconds = Math.floor(elapsedTime / 1000) % 60;
//   const minutes = Math.floor(elapsedTime / 60000);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.timerText}>
//         {minutes < 10 ? '0' : ''}
//         {minutes}:{seconds < 10 ? '0' : ''}
//         {seconds}:{displayCentiseconds < 10 ? '0' : ''}
//         {displayCentiseconds}
//       </Text>
//       <TouchableOpacity style={styles.button} onPress={startStopChronometer}>
//         <Text style={styles.buttonText}>{isRunning ? 'Stop' : 'Start'}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[styles.button, styles.resetButton]}
//         onPress={resetChronometer}
//       >
//         <Text style={styles.buttonText}>Reset</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={addLap}>
//         <Text style={styles.buttonText}>Lap</Text>
//       </TouchableOpacity>
//       {laps.length > 0 && (
//         <View style={styles.lapsContainer}>
//           <Text style={styles.lapHeaderText}>Laps:</Text>
//           {laps.map((lap, index) => (
//             <Text key={index} style={styles.lapText}>
//               Lap {index + 1}: {formatTime(lap.lapTime)}
//             </Text>
//           ))}
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   timerText: {
//     fontSize: 48,
//     fontWeight: 'bold',
//   },
//   button: {
//     marginTop: 20,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     backgroundColor: 'blue',
//     borderRadius: 5,
//   },
//   resetButton: {
//     backgroundColor: 'red',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//   },
//   lapsContainer: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   lapHeaderText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   lapText: {
//     fontSize: 16,
//   },
// });

//-------------------------

// import React, { useState, useEffect, useCallback } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// export const StopWatch = () => {
//   const [isRunning, setIsRunning] = useState(false);
//   const [startTime, setStartTime] = useState(0);
//   const [elapsedTime, setElapsedTime] = useState(0);
//   const [laps, setLaps] = useState([]);
//   const [lastLapTime, setLastLapTime] = useState(0);
//   const [displayCentiseconds, setDisplayCentiseconds] = useState(0);

//   useEffect(() => {
//     let intervalId;
//     if (isRunning) {
//       const updateDisplay = () => {
//         const now = Date.now();
//         const elapsedMilliseconds = now - startTime;
//         const newRealCentiseconds = Math.floor(elapsedMilliseconds / 10);

//         setElapsedTime(elapsedMilliseconds);
//         setDisplayCentiseconds(newRealCentiseconds % 100);

//         if (laps.length > 0) {
//           setLastLapTime(now - laps[laps.length - 1].timestamp);
//         } else {
//           setLastLapTime(0);
//         }
//       };

//       // Update display centiseconds smoothly every 10ms
//       intervalId = setInterval(updateDisplay, 10);
//     }
//     return () => clearInterval(intervalId);
//   }, [isRunning, startTime, laps]);

//   useEffect(() => {
//     let intervalId;
//     if (isRunning) {
//       intervalId = setInterval(() => {
//         const now = Date.now();
//         setElapsedTime(now - startTime);
//         if (laps.length > 0) {
//           setLastLapTime(now - laps[laps.length - 1].timestamp);
//         } else {
//           setLastLapTime(0);
//         }
//       }, 1000); // Update every 1000ms (1 second)
//     }
//     return () => clearInterval(intervalId);
//   }, [isRunning, startTime, laps]);

//   const startStopChronometer = () => {
//     if (isRunning) {
//       setIsRunning(false);
//     } else {
//       setStartTime(Date.now() - elapsedTime);
//       setIsRunning(true);
//     }
//   };

//   const resetChronometer = () => {
//     setIsRunning(false);
//     setStartTime(0);
//     setElapsedTime(0);
//     setLaps([]);
//     setLastLapTime(0);
//     setDisplayCentiseconds(0);
//   };

//   const addLap = useCallback(() => {
//     const lapTime = elapsedTime - lastLapTime;
//     setLaps([...laps, { timestamp: Date.now(), lapTime }]);
//     setLastLapTime(elapsedTime);
//   }, [elapsedTime, lastLapTime, laps]);

//   const formatTime = (timeInMilliseconds) => {
//     const totalCentiseconds = Math.floor(timeInMilliseconds / 10);
//     const centiseconds = totalCentiseconds % 100;
//     const totalSeconds = Math.floor(totalCentiseconds / 100);
//     const seconds = totalSeconds % 60;
//     const minutes = Math.floor(totalSeconds / 60);
//     return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}.${centiseconds}`;
//   };

//   const centiseconds = Math.floor(elapsedTime / 10) % 100;
//   const seconds = Math.floor(elapsedTime / 1000) % 60;
//   const minutes = Math.floor(elapsedTime / 60000);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.timerText}>
//         {minutes < 10 ? '0' : ''}
//         {minutes}:{seconds < 10 ? '0': ''}
//         {seconds}:{displayCentiseconds < 10 ? '0' : ''}
//         {displayCentiseconds}
//       </Text>
//       <TouchableOpacity style={styles.button} onPress={startStopChronometer}>
//         <Text style={styles.buttonText}>{isRunning ? 'Stop' : 'Start'}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={resetChronometer}>
//         <Text style={styles.buttonText}>Reset</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={addLap}>
//         <Text style={styles.buttonText}>Lap</Text>
//       </TouchableOpacity>
//       {laps.length > 0 && (
//         <View style={styles.lapsContainer}>
//           <Text style={styles.lapHeaderText}>Laps:</Text>
//           {laps.map((lap, index) => (
//             <Text key={index} style={styles.lapText}>
//               Lap {index + 1}: {formatTime(lap.lapTime)}
//             </Text>
//           ))}
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   timerText: {
//     fontSize: 48,
//     fontWeight: 'bold',
//   },
//   button: {
//     marginTop: 20,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     backgroundColor: 'blue',
//     borderRadius: 5,
//   },
//   resetButton: {
//     backgroundColor: 'red',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//   },
//   lapsContainer: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   lapHeaderText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   lapText: {
//     fontSize: 16,
//   },
// });

// export default StopWatch;

//------------------------

import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import StopWatchDisplay from "../components/StopWatchDiplay";
import Button from "../components/StopWatchButton";
import LapList from "../components/LapList";

export const StopWatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(null); // Initialize with null
  const [elapsedTime, setElapsedTime] = useState(0);
  const [laps, setLaps] = useState([]);
  const [lastLapTime, setLastLapTime] = useState(0);
  const intervalRef = useRef(null);


  

   useEffect(() => {
    if (startTime === null) {
      setStartTime(Date.now() - elapsedTime);
    }
  }, [elapsedTime]); // This effect runs whenever elapsedTime changes

  const startStopChronometer = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
    } else {
      setIsRunning(true);
      intervalRef.current = setInterval(updateTime, 10);
    }
    setIsRunning(!isRunning);
  };

  const resetChronometer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setStartTime(null);
    setElapsedTime(0);
    setLaps([]);
    setLastLapTime(0);
  };

  const addLap = () => {
    if (isRunning) {
      const lapTime = elapsedTime - lastLapTime;
      const newLap = { timestamp: Date.now(), lapTime };
      setLaps([...laps, newLap]);
      setLastLapTime(elapsedTime);
    }
  };

  const updateTime = () => {
    
      const now = Date.now();
      setElapsedTime(now - startTime);
    
  };

  return (
    <View style={styles.container}>
      <StopWatchDisplay elapsedTime={elapsedTime} />
      <Button
        text={isRunning ? "Stop" : "Start"}
        onPress={startStopChronometer}
      />
      <Button text="Reset" onPress={resetChronometer} />
      <Button text="Lap" onPress={addLap} />
      <LapList laps={laps} />
    </View>
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
  containerOff: {
    width: "100%",
    backgroundColor: "#535458",
    alignItems: "center",
    justifyContent: "center",
    position : "absolute" ,
    left: "100%",
    height: "75%",
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
});