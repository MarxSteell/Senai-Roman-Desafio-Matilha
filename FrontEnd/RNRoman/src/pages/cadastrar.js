import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity} from "react-native";
import Cabecalho from '../componentes/cabecalho'
import { TextInput } from 'react-native-gesture-handler';
import api from '../services/api'
import Axios from 'axios';

export default class cadastrar extends Component {
    constructor(props){
        super(props);
        this.state={
            nome:""
            ,tema:""
            ,descricao:""
        }
    }
    cadastrarProjeto = async() =>{
        let dados = {
            nome: this.state.nome,
            tema: this.state.tema,
            descricao: this.state.descricao
        };

        await Axios.post(api, dados, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .catch(error => console.warn(error))
        this.props.navigation.navigate('/listagem');
    }

    render() {
        return (
            <View style={styles.textAreaContainer}>
                <Cabecalho />
                <Text style={styles.titulo}>Cadastrar Projeto</Text>
                <TextInput
                    style={styles.input}
                    textContentType="text"
                    onChangeText={nome=>this.setState({nome})}
                    placeholder="Nome"
                />
                <TextInput
                    style={styles.input}
                    textContentType="text"
                    onChangeText={tema=>this.setState({tema})}
                    placeholder="Tema"
                />
                <TextInput
                    style={styles.input}
                    textContentType="text"
                    onChangeText={descricao=>this.setState({descricao})}
                    placeholder="Descrição"
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
    }
});