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

            
            <View>
                <FlatList 
                data={this.state.listaProjetos}
                keyExtractor={item => item.id}
                renderItem={this.renderizaItem}
                />
            </View>

            </View>
        );
    }

    renderizaItem = ({item}) => (
        <View>
            <View>
            <Text style={styles.Nome}>{"Nome"}</Text>
            <Text style={styles.Nomee}>{item.nome}</Text>
            </View>
            <View>
            <Text style={styles.Tema}>{"Tema"}</Text>
            <Text style={styles.Temaa}>{item.idTema}</Text>
            </View>
            <View>
            <Text style={styles.Descricao}>{"Descrição"}</Text>
            <Text style={styles.Descricaoo}>{item.descricao}</Text>
            </View>
            <View>
            <Text style={styles.Criador}>{"Criador Por"}</Text>
            <Text style={styles.IdUsuarioo}>{item.idUsuario}</Text>
            <View style={styles.linha}></View>
            </View>

        </View>
    )
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
            marginLeft: 175,
            marginTop:5,
            marginLeft: 170,
            marginTop:25,
            color: "black"
        },
        Tema:{
            fontSize:16,
            marginLeft: 280,
            marginTop: -50,
            marginTop: -40,
            color:"black"
        },
        Criador:{
            fontSize:16,
            marginLeft:170,
            marginTop: 10,
            color:"black"
        },
        Nomee:{
            fontSize: 15,
            marginLeft: 55
        },
        Descricaoo:{
            fontSize: 15,
            marginLeft: 55
        },
        Temaa:{
            fontSize: 15,
            marginLeft:300
        },
        IdUsuarioo:{
            fontSize: 15,
            marginLeft:200
        },
        linha:{
            height: 3,
            width: 700,
            backgroundColor:"green",
            marginTop: 10,
            color:"black"
        }
    });


export default listagem;