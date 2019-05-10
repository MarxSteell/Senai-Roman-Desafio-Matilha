import React,{Component} from 'react';
import{ Text, Image, StyleSheet, View, FlatList,TouchableOpacity,AsyncStorage} from "react-native";
import Cabecalho from '../componentes/cabecalho'
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
                this.setState({id:jwt(value).Id})
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
                <Cabecalho />
                <Text style={styles.titulo}>Cadastrar Projeto</Text>
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
    titulo: {
        textAlign: "center",
        fontSize: 22,
        fontFamily: "Eras ITC",
        marginBottom: 20
    },
    input: {
        width: 300,
        backgroundColor: "transparent",
        borderBottomColor: "green",
        borderBottomWidth: 2
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