import React from 'react';
import {View,Text,StyleSheet,Button,ImageBackground} from 'react-native';

export default function MenuDeOpções({route,navigation}){
    const { userCPF,user } = route.params;
    return(
        <View style={Design.container}>
            <ImageBackground source={require("../img/fundoAplicativoLight.svg.png")} style={Design.cenario}>
                <View style={Design.titulo}><Text style={{fontSize:24}}>Escolha a sua opção</Text></View>
                <View style={Design.btn}><Button title={"Cadastrar Denúncia"} style={Design.btn} color="#F00" onPress={() => navigation.navigate('TelaDeDenúncia',{userCPF:userCPF,user:user})}/></View>
                <View style={Design.btn}><Button title={"Listagem de Denúncias"} style={Design.btn} color="#00804f" onPress={() => navigation.navigate('ListagemDeDenúncia',{userCPF:userCPF})}/></View>
                <View style={Design.btn}><Button title={"Sair"} color="#333" onPress={() => navigation.navigate('Login')}/></View>
            </ImageBackground>
        </View>
    );
}

const Design = StyleSheet.create({
    cenario:{
        width:"100%",
        height:"100%",
        resizeMode: "cover",
    },
    container:{
        padding:5,
        flex:1,
        justifyContent:"center",
        alignItems:"flex-start",
    },
    btn:{
        textAlign:"left",
        marginVertical:14,
    },
    titulo:{
        marginBottom:"9%",
        width:"100%",
        alignItems:"center",
        textAlign:"center",
    }
});