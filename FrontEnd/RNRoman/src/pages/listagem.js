import React,{Component} from 'react';
import{ Text, Image, StyleSheet, View, FlatList} from "react-native";
import api from "../services/api";

class listagem extends Component{

    constructor(props){
        super(props);
        this.state ={
            listaProjetos:[]
        };
    }

    componentDidMount(){
        this.carregarProjetos();
    }

    carregarProjetos = async () => {
        const resposta = await api.get("/Projetos");
        const dadosdaApi = resposta.data;
        this.setState({ listaProjetos : dadosdaApi});
    }

    render(){
        return(
            <View>

            <View style={styles.header}>
            <Text style={styles.headertxt}>Roman</Text>
            </View>

            <Text style={styles.titulo}>{"Projetos".toUpperCase()}</Text>

            <Text style={styles.Nome}>{"Nome"}</Text>

            <Text style={styles.Descricao}>{"Descrição"}</Text>

            <Text style={styles.Tema}>{"Tema"}</Text>

            <Text style={styles.Criador}>{"Criador Por"}</Text>

            </View>
        );
    }
}

    const styles = StyleSheet.create({
        header:{
            backgroundColor:"#d3d3d3",
            height:50,
        },
        headertxt:{
            color:"black",
            textAlign:"center",
            padding:10,
            fontSize:22,
            fontWeight:"100",
            fontFamily:"Eras ITC"
        },
        titulo:{
            fontSize: 20,
            marginLeft: 160,
            marginTop: 20,
            color: "black",
        },
        Nome:{
            fontSize: 16,
            marginTop: 20,
            marginLeft: 70,
            color: "black"
        },
        Descricao:{
            fontSize:16,
            marginLeft: 70,
            marginTop:85,
            color: "black"
        },
        Tema:{
            fontSize:16,
            marginLeft: 280,
            marginTop: -128,
            color:"black"
        },
        Criador:{
            fontSize:16,
            marginLeft:280,
            marginTop: 85,
            color:"black"
        }
    });


export default listagem;