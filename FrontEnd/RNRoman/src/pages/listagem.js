import React,{Component} from 'react';
import{ Text, Image, StyleSheet, View, FlatList} from "react-native";

class listagem extends Component{

    render(){
        return(
            <View style={styles.header}>
            <Text style={styles.headertxt}>Roman</Text>
            </View>

<<<<<<< Updated upstream
        );
    }
=======
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
>>>>>>> Stashed changes
}

    const styles = StyleSheet.create({
        header:{
            backgroundColor:"white",
            height:50,
        },
        headertxt:{
            color:"white",
            textAlign:"center",
            padding:10,
            fontSize:22,
            fontWeight:"100",
            fontFamily:"Eras ITC"
<<<<<<< Updated upstream
=======
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
            marginTop:35,
            color: "black"
        },
        Tema:{
            fontSize:16,
            marginLeft: 280,
            marginTop: -40,
            color:"black"
        },
        Criador:{
            fontSize:16,
            marginLeft:170,
            marginTop: 25,
            color:"black"
        },
        Nomee:{
            fontSize: 15,
            marginLeft: 55
        },
        Descricaoo:{
            fontSize: 15,
            marginLeft: 6
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
            height: 10,
            width: 700,
            backgroundColor:"green",
            marginTop: 10
>>>>>>> Stashed changes
        }
    });


export default listagem;