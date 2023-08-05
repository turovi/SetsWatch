import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Platform,
  Button,
} from "react-native";

import { Picker } from "@react-native-picker/picker";

// const formatNumber = number => `0${number}` . slice(-2);

// const getRemaining = time => {
//   const minutes = Math.floor(time / 60);
//   const seconds = time - minutes * 60;
//   return {minutes: formatNumber(minutes), seconds: formatNumber(seconds)}
// }

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
const AVAILABLE_SETS = createArray(21);

//----------------------------------------
//------------------------------------------

export const TimerSelector = ({
  isTimerCalled,
  openTime,
  onFocusSelectedMinutesChange,
  onFocusSelectedSecondsChange,
  onBreakSelectedMinutesChange,
  onBreakSelectedSecondsChange,
  onSetsChange
}) => {
  state = {
    selectedMinutes: "0",
    selectedSeconds: "5",
    selectedSets: "1",
  };

  const [focusSelectedM, setFocusSelectedM] = useState(0);
  const [focusSelectedS, setFocusSelectedS] = useState("5");

  const [breakSelectedM, setBreakSelectedM] = useState(0);
  const [breakSelectedS, setBreakSelectedS] = useState("5");
  const [selectedSets, setSelectedSets] = useState("1");

  const applyTime = () => {
    onFocusSelectedMinutesChange(focusSelectedM);
    onFocusSelectedSecondsChange(focusSelectedS);
    onBreakSelectedMinutesChange(breakSelectedM);
    onBreakSelectedSecondsChange(breakSelectedS);
    onSetsChange(selectedSets);
  };

  const validate = () => {
    applyTime();
    openTime();
  };

  return (
    <View style={isTimerCalled ? styles.container : styles.containerLeft}>
      <Text style={styles.text}>exercice</Text>
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          itemStyle={styles.pickerItem}
          selectedValue={
            focusSelectedM != null ? focusSelectedM : this.state.selectedMinutes
          }
          onValueChange={(itemValue) => {
            setFocusSelectedM(itemValue);
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
            focusSelectedS != null ? focusSelectedS : this.state.selectedSeconds
          }
          onValueChange={(itemValue) => {
            setFocusSelectedS(itemValue);
          }}
          mode="spinner"
        >
          {AVAILABLE_SECONDS.map((value) => (
            <Picker.Item key={value} label={value} value={value} />
          ))}
        </Picker>
        <Text style={styles.pickerItem}>seconds</Text>
      </View>

      <Text style={styles.text}>Rest</Text>

      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          itemStyle={styles.pickerItem}
          selectedValue={
            breakSelectedM != null ? breakSelectedM : this.state.selectedMinutes
          }
          onValueChange={(itemValue) => {
            setBreakSelectedM(itemValue);
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
            breakSelectedS != null ? breakSelectedS : this.state.selectedMinutes
          }
          onValueChange={(itemValue) => {
            setBreakSelectedS(itemValue);
          }}
          mode="spinner"
        >
          {AVAILABLE_SECONDS.map((value) => (
            <Picker.Item key={value} label={value} value={value} />
          ))}
        </Picker>
        <Text style={styles.pickerItem}>seconds</Text>
      </View>

      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          itemStyle={styles.pickerItem}
          selectedValue={
            selectedSets != null ? selectedSets : this.state.selectedSets
          }
          onValueChange={(itemValue) => {
            setSelectedSets(itemValue);
          }}
          mode="spinner"
        >
          {AVAILABLE_SETS.map((value) => (
            <Picker.Item key={value} label={value} value={value} />
          ))}
        </Picker>
        <Text style={styles.pickerItem}>sets</Text>
        
      </View>
      <Button onPress={validate} title="valider" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#07121B",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "coloumn",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 11,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  containerLeft: {
    flex: 1,
    backgroundColor: "#07121B",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 50,
    left: "100%",
    width: "100%",
    height: "100%",
    zIndex: 11,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
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
