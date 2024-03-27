import {StyleSheet} from 'react-native'
export const Styles = StyleSheet.create({
    input: {  
        backgroundColor: '#E8D2D2',
        height: 40,
        width: 300,
        marginBottom: 0,
        borderRadius: 10,
        borderWidth: 1,
        marginLeft:10,
        marginTop: 30,
        padding: 10,
    },
    viewTextButton: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        marginTop: 0,
        alignItems: 'center',
        justifyContent: 'center',

      },
    texto: {
        alignItems: 'center',
        fontSize: 20,
        color:'#hsl(0, 0%, 0%)',
      },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',   
        backgroundColor: '#0080ff',
        height: 45,
        marginLeft:10,
        width: 100,  
        padding: 10,
        marginTop: 30,  
        borderRadius: 10,
        justifyContent: 'center',
    },

})