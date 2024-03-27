import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Styles } from './Styles';


const Butao: React.FC = () => {
    return (
        <View style={Styles.viewTextButton}>
            <TouchableOpacity 
            style={Styles.button}
            >
                <Text style={Styles.texto}>Enviar</Text>
            </TouchableOpacity>
        </View>
    ); 
};
export default Butao;
