import { View, Text, Button } from 'react-native';
import {Styles} from './Styles'
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import Txtout from '../../components/Textoutput';


type RouteParams = {
    nome:string;
    email:string;
}


export default function Config() {
    const route = useRoute();
    const { nome, email } = route.params as RouteParams;
    const navigation = useNavigation();


    return (
        <View style={Styles.container}>
            <Txtout out1="nome" out2={nome} />
            <Txtout out1="email" out2={email} />
            <Button title="voltar" onPress={() => navigation.goBack()}></Button>
        </View>
    );
}
