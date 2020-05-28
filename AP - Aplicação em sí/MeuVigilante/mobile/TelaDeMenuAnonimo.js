import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function TelaDeMenuAnonimo(){
    return (
        <View style={Design.container}>
            <Text>Opções do Menu</Text>
            <Button title="Efetuar denúncia" color="#333"/>
            <Button title="Sair" color="#333"/>
        </View>
    );
}

const Design = StyleSheet.create({
    container:{
        flex:1,
        alignContent:"center",
        justifyContent:"center"
    }
});