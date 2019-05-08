import React,{Component} from 'react';
import{ Text, Image, StyleSheet, View, FlatList} from "react-native";

class listagem extends Component{

    render(){
        return(
            <View style={styles.header}>
            <Text style={styles.headertxt}>Roman</Text>
            </View>

        );
    }
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
        }
    });


export default listagem;