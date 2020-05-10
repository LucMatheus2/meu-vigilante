import React , {Component} from 'react';
import {View,Text,TextInput, StyleSheet} from 'react-native';

export default class TelaDeDenuncia2 extends Component{
    render(){
        return(
            <View style={Design.container}>
                <Text>Processo de Denúncia</Text>
                <Text>O que está acontecendo?</Text>
                <TextInput numberOfLines={5}/>
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