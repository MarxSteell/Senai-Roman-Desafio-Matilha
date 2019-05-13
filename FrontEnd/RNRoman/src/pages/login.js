import React,{Component} from 'react';
import { Text, Image, StyleSheet, View, FlatList,TextInput,Button ,TouchableOpacity,AsyncStorage} from "react-native";
import Cabecalho from '../componentes/cabecalho'
import api from '../services/api'


class Login extends Component{
    static navigationOptions={
        header:null
    };
    constructor(props){
        super(props);
        this.state={
            email:""
            ,senha:""
        }
    }
    realizarLogin = async() =>{
      
        const resposta = await api.post("/login",{
            email: this.state.email,
            senha: this.state.senha
        });
        const token = resposta.data.token;
      
    
        await AsyncStorage.setItem("RomanMatilha",token);
        this.props.navigation.navigate("MainNavigator");
    }
     render(){
        return(
            <View style={styles.body}>
                <Cabecalho />
            <Text style={styles.titulo}>Login</Text>
            <TextInput style={styles.input}
               
                onChangeText={email=>this.setState({email})}
                placeholder="Insira seu Email"
               
            />
            <TextInput style={styles.input}
                
                onChangeText={senha=>this.setState({senha})}
                placeholder="Insira sua Senha"
                secureTextEntry={true}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={this.realizarLogin}
            >
           <Text style={styles.buttontxt}>Entrar</Text>
           </TouchableOpacity>
            </View>
        );
    
    }
    
}
const styles = StyleSheet.create({
   
    titulo:{
        position:"relative",
        left:170,
        marginTop:50,
        fontSize:30,
        fontWeight:"300",
        textAlign:'center',
        color:"black",
        borderBottomColor:"#2E7D32",
        borderBottomWidth:2 ,
        width:80,
        backgroundColor:"#f1f1f1"
    },
    
    input:{
        width:250,
        backgroundColor:"transparent",
        borderBottomColor:"#707070",
        borderBottomWidth:2 ,
        alignItems:"center",
        position:"relative",
        left:80,
        textAlign:"center",
        top:50,
        // justifyContent:"center",
    },
    button:{
        height:39,
        width:124,
        backgroundColor:"#388E3C",
        borderBottomColor:"#1B5E20",
        borderWidth:0.5,
        borderRadius:5,
        position:"relative",
        left:140,
        textAlign:"center",
        top:150,
        shadowOffset:{  width: 100,  height: 100,  },
        shadowColor: 'black',
        shadowOpacity: 1.0,
    },
    buttontxt:{
        textAlign:"center",
        color:"white",
        fontSize:20,
        position:"relative",
        top:5,
    },
});
                
export default Login;