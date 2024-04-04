import {Styles} from './Styles';
import {Text} from 'react-native';
import React from 'react';
import {View} from 'react-native';

export default function Txtout(props: {out1:string, out2:string}){
    const {out1, out2} = props
    return(
    <View style={Styles.container} >
        
        <Text style ={Styles.label}>{out1}: </Text>
        
        <View style ={Styles.content}>
            <Text >{out2}</Text>
        </View>
    </View>
    );   
}