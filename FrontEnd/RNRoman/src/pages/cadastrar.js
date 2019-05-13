import React,{Component} from 'react';
import{ Text, Image, StyleSheet, View, FlatList,TouchableOpacity,AsyncStorage} from "react-native";

import { TextInput } from 'react-native-gesture-handler';
import api from '../services/api'
import jwt from 'jwt-decode';

import Textarea from 'react-native-textarea';


export default class cadastrar extends Component {
    constructor(props){
        super(props);
        this.state={
            nome:""
            ,IdTema:""
            ,descricao:""
            ,IdUsuario:""
        }
    }
    cadastrarProjeto = async() =>{
       
        const resposta=  await api.post("/projetos",{
        nome: this.state.nome,
        IdTema: this.state.IdTema,
        descricao: this.state.descricao,
        IdUsuario:this.state.IdUsuario
       
      });
      console.warn(resposta);
      
    }
    buscardados = async ()=>{
        try {
            const value = await AsyncStorage.getItem("RomanMatilha");
            if (value!==null) {
                this.setState({IdUsuario:jwt(value).Id})
                this.setState({token:value})
                console.warn(value);
            }
        } catch (error) {
            
        }
        
    }
    componentDidMount(){
        this.buscardados();
    }

    render() {
        return (
            <View style={styles.textAreaContainer}>
              
              <View style={styles.header}>
            <Text style={styles.headertxt}>Roman</Text>
        </View>
            <Text style={styles.titulo}>{"Cadastrar Projetos".toUpperCase()}</Text>
                <TextInput
                    style={styles.input}
                    
                    onChangeText={nome=>this.setState({nome})}
                    placeholder="Nome"
                />
                <TextInput
                    style={styles.input}
                    
                    onChangeText={IdTema=>this.setState({IdTema})}
                    placeholder="Tema"
                />
                <TextInput
                    style={styles.input}
                    
                    onChangeText={descricao=>this.setState({descricao})}
                    placeholder="Descrição"
                />
                <TextInput
                    style={styles.input}
                    
                    onChangeText={IdUsuario=>this.setState({IdUsuario})}
                    placeholder="Usuário"
                />
                
             
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.cadastrarProjeto}
                >
                    <Text style={styles.buttontxt}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:"#ebecea",
        borderBottomColor:"#b5b5b5",
        borderBottomWidth:2,
        height:50,
    },
    headertxt:{
        color:"#505050",
        textAlign:"center",
        padding:10,
        fontSize:22,
        fontWeight:"100",
        fontFamily:"Eras ITC"
    },
    titulo: {
        position:"relative",
        left:130,
        marginTop:50,
        fontSize:18,
        fontWeight:"300",
        textAlign:'center',
        color:"black",
        borderBottomColor:"#2E7D32",
        borderBottomWidth:2 ,
        width:150,
        backgroundColor:"#f1f1f1"
    },
    input: {
        width: 300,
        backgroundColor: "transparent",
        borderBottomColor: "green",
        borderBottomWidth: 2,
       
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
    ID:{
        color:"black",
        backgroundColor:"blue"
    }
});