import React, { useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Styles } from './Styles';


export default function Home() {
const [nome, setNome] = React.useState('');
const [email, setEmail] = React.useState('');




const handleSubmit = () => {
console.log(nome,email)
}

    return (
        <View style={Styles.container}>

            <View>
                <Text style={Styles.title}>Cadastro de Usuários</Text>
            </View>
            <View style={Styles.fittotext}>
                <Text>
                    Email:
                </Text>
                <Text>
                    Texto:
                </Text>
                <TextInput
                    style={Styles.input}
                    placeholder='Digite seu nome'
                    onChangeText={setNome}
                    value={nome}
                />
            </View>
            <View style={Styles.fittotext}>
                <Text>
                    Email:
                </Text>
                <TextInput
                    style={Styles.input}
                    placeholder='Digite seu email'
                    onChangeText={setEmail}
                    value={email}
                />
            </View>
            <Button title = 'enviar' onPress= {handleSubmit}
            />

            <Text>Nome: {nome}</Text>
            <Text>Email: {email}</Text>

        </View>
    );
}
