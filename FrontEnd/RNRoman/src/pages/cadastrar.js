import React, { Component } from 'react';
import { Text, Image, StyleSheet, View, FlatList } from "react-native";
import Cabecalho from '../componentes/cabecalho'
import { TextInput } from 'react-native-gesture-handler';
import Textarea from 'react-native-textarea';

class cadastrar extends Component {

    render() {
        return (
            <View style={styles.textAreaContainer}>
                <Cabecalho />
                <Text style={styles.titulo}>Cadastrar Projeto</Text>
                <TextInput
                    style={styles.input}
                    textContentType="text"
                    placeholder="Nome"
                />
                <TextInput
                    style={styles.input}
                    textContentType="text"
                    placeholder="Tema"
                />
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
    }
});

export default cadastrar;