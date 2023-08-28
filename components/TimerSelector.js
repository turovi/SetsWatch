import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  Button,
} from "react-native";

import { Picker } from "@react-native-picker/picker";

const createArray = (length) => {
  const arr = [];
  let i = 0;
  while (i < length) {
    arr.push(i.toString());
    i += 1;
  }
  return arr;
};

const AVAILABLE_MINUTES = createArray(11);
const AVAILABLE_SECONDS = createArray(60);


//----------------------------------------
//------------------------------------------

export const TimerSelector = ({
  onSelectedMinutesChange,
  onSelectedSecondsChange,
  isTimerRunning
}) => {
  state = {
    selectedMinutes: "0",
    selectedSeconds: "5",
    
  };

  const [selectedM, setSelectedM] = useState(0);
  const [selectedS, setSelectedS] = useState("5");
  const [selectedSets, setSelectedSets] = useState("1");

  const applyTime = () => {
    onSelectedMinutesChange(selectedM);
    onSelectedSecondsChange(selectedS);
    
  };

  useEffect(()=>{
    applyTime();
  }, [selectedM, selectedS])



  return (
    <View style={{
        ...styles.container, 
        ...{ opacity: isTimerRunning ? 0.5 : 1}
        }} pointerEvents={isTimerRunning ? 'none' : 'auto'}>
      
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          itemStyle={styles.pickerItem}
          selectedValue={
           selectedM != null ? selectedM : this.state.selectedMinutes
          }
          onValueChange={(itemValue) => {
            setSelectedM(itemValue);
          }}
          mode="spinner"
        >
          {AVAILABLE_MINUTES.map((value) => (
            <Picker.Item key={value} label={value} value={value} />
          ))}
        </Picker>
        <Text style={styles.pickerItem}>minutes</Text>
        <Picker
          style={styles.picker}
          itemStyle={styles.pickerItem}
          selectedValue={
            selectedS != null ? selectedS : this.state.selectedSeconds
          }
          onValueChange={(itemValue) => {
            setSelectedS(itemValue);
          }}
          
          mode="spinner"
        >
          {AVAILABLE_SECONDS.map((value) => (
            <Picker.Item key={value} label={value} value={value} />
          ))}
        </Picker>
        <Text style={styles.pickerItem}>seconds</Text>
      </View>

     
      {/* <Button onPress={validate} title="valider" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "coloumn",
    alignItems: "center",
    width: "100%",
    height: "100%",
    zIndex: 11,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    opacity:''
  },



  picker: {
    flex: 1,
    maxWidth: 100,
    ...Platform.select({
      android: {
        color: "#fff",
        backgroundColor: "rgba(92, 92, 92, 0.206)",
      },
    }),
  },
  pickerItem: {
    color: "#fff",
    fontSize: 15,
    ...Platform.select({
      android: {
        marginLeft: 10,
        marginRight: 10,
      },
    }),
  },
  pickerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
