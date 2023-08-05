import React from "react";
import { Text, View, StyleSheet } from "react-native";



export const TimerModedisplay = ({ timerMode }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.timerModeText}>
        Test : Timer is in 
        {timerMode ? " exercise" : " rest"} mode
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
  },

  timerModeText: {
    fontSize: 40,
    fontWeight: "800",
  },
});
