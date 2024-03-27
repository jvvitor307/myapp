import React from 'react';
import { View, Text } from 'react-native';
import InputData from './components/Inputdata';
import Butao from './components/Butao';
import { Styles } from './Styles';

const formulario = ['nome', 'cpf', 'email', 'cep'];

export default function Home() {
    return (
        <View>
            <Text style={Styles.title}>HOME</Text>
            {
                formulario.map(item => (
                    <InputData 
                    key={item}
                    placeHolder={item}
                    />
                ))
            }
            <Butao/>   
        </View>
    );
}
