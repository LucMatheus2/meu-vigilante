import React , {Component} from 'react';
import {View,Text,TextInput,Button, StyleSheet} from 'react-native';

export default class TelaDeDenuncia2 extends Component{
    render(){
        return(
            <View style={Design.container}>
                <Text>Processo de Denúncia</Text>
                <Text>O que está acontecendo?</Text>
                <TextInput numberOfLines={5}/>
                <Button title="Marcar a localização"/>
                <Button title="Anexar Foto"/>
            </View>
        );
    }
}

const Design = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center", 
        alignItems:"center" ,
    }
});