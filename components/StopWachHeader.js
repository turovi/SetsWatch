import React from "react";
import {Appbar} from 'react-native-paper'

export const StopWachHeader =() =>{
    return (
        <Appbar.Header style={{backgroundColor:'black'}}>
            <Appbar.Content title="StopWatch" style={{alignItems:'center'}}/>

        </Appbar.Header>

    )
}