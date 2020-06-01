import React from 'react';
import {View, Button ,Text,TextInput, StyleSheet, ImageBackground} from 'react-native';

export default function TelaDeDenuncia(){
        return(
            <ImageBackground source={require('../img/fundoAplicativoLight.svg.png')} style={Design.containerCenario}>
                <View style={Design.container}>
                    <Text style={{fontSize:24}}>Processo de Denúncia</Text>
                    <Text style={{marginTop:12}}>O que está acontecendo?</Text>
                    <TextInput numberOfLines={5} style={{backgroundColor:'#FFF',width:'90%'}} placeholder="Escreva o fato ocorrido"/>
                    <View style={{flexDirection:"row"}}><Button title="Anexar Foto" color="#028047"/>
                    <Button title="Marcar Localização"/></View>
                    <View style={{marginTop:15}}><Button color="#F00" title="Efetuar Denúncia"/></View>
                    <View style={{marginTop:15}}><Button color="#000" title="Cancelar"/></View>
                </View>
                <View style={{backgroundColor:"#001c7d",height:30,alignItems:"center"}}>
                    <Text style={{color:'#FFF'}}>&copy; 2020 - Universidade do Estado do Pará</Text>
                </View>
            </ImageBackground>
        );
}

const Design = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center", 
        alignItems:"center" ,
    },
    containerCenario:{
        flex:1,
        resizeMode: "cover",
        justifyContent: "center",
    }
});