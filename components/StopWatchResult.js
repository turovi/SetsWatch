import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { displayTime } from "./StopWatchUtil";

function Result({results}) {
    return(
        <ScrollView>
            <View style={StyleSheet.resultItem}/>
                {results.map((item, index)=>{
                    <View key={index} style={styles.resultItem}>
                        <Text style={styles.resultItemText}>
                            Lap{results.lenght - index}
                        </Text>
                        <Text style ={styles.resultItemText}>{displayTime(item)}</Text>
                    </View>
                })}
            <View/>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    resultItem: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        borderBottomWidth: 1,
        borderColor:'#313131',
        height:50,
        paddingHorizontal : 15,
    },
    resultItemText:{color: 'red'}
});

export default React.memo(Result);