import React from 'react';
import { Button, Pressable, View, StyleSheet } from "react-native";
import {FontAwesome} from '@expo/vector-icons' 



 export const UpdateTimerButton = ({isTimerRunning, stopTimer, startTimer}) => {
    return (
        <Pressable onPress={isTimerRunning ? stopTimer : startTimer}>
            <View style={styles.container}>
                <FontAwesome name={isTimerRunning ? 'pause' : 'play'} size={125} style={isTimerRunning ? styles.iconPause : styles.icon}/>
            </View>
            </Pressable>

      
    );
  };

  const styles = StyleSheet.create({

    icon: {
      alignSelf: 'center',
      color:'#fff',
      marginLeft:20,
    },
    iconPause: {
        alignSelf: 'center',
        color:'#fff',
      },

    container: {
        borderWidth:5,
        width: 250,
        height: 250,
        borderRadius: 250 / 2,
        justifyContent: 'center',
        borderColor:'#fff',
        marginVertical: 50,


    }
  
  })
 