import React from "react";
import { StyleSheet, Text, View } from "react-native";


export const TimerCountDownDisplay = ({timerDate}) => {



  return (
    <View>
      <Text style={styles.TimerCountDownText}>
        {timerDate.getMinutes().toString().padStart(2, "0")}:
        {timerDate.getSeconds().toString().padStart(2, "0")}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({

  TimerCountDownText: {
    fontSize: 40,
    fontWeight:'800', 
  }

})