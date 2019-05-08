import React,{Component} from 'react';
import { Text, Image, StyleSheet, View, FlatList,TextInput } from "react-native";
import Cabecalho from '../componentes/cabecalho'
class Login extends Component{
    render(){
        return(
            <View style={styles.body}>
                <Cabecalho />
            <Text style={styles.titulo}>Login</Text>
            <TextInput style={styles.input}
                textContentType="text"
                placeholder="Insira seu Email"
            />
            <TextInput style={styles.input}
                textContentType="text"
                placeholder="Insira sua Senha"
            />

            </View>
        );
    
    }
    
}
const styles = StyleSheet.create({
   
    titulo:{
        
    },
    input:{
        width:300,
        backgroundColor:"transparent",
        borderBottomColor:"green",
        borderBottomWidth:2 
    }
});
                
export default Login;