import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Styles } from './Styles';
import { KeyboardTypeOptions } from 'react-native';

interface Props {
  placeHolder?: string;
  keyBoardType?: KeyboardTypeOptions;
  textchange?: (text: string) => void;
}

const InputData: React.FC<Props> = ({placeHolder, keyBoardType="default", textchange}) => {
  
  return (
    <View style ={Styles.row}>
      <TextInput
      style={Styles.input} 
      placeholder = {placeHolder}
      onChangeText= {textchange}
      keyboardType = {keyBoardType}
      />
    </View>
  );
};
export default InputData;