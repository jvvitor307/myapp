import React from 'react';
import { View } from 'react-native';
import Home from './src/Home';
import { Styles } from './src/Styles';



export default function App() {
  return (
    <View style={Styles.container}>
      <Home/>
    </View>
  );
}


