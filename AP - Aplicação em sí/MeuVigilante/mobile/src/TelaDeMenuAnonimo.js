import React from 'react';
import {View,Text,StyleSheet,Button,ImageBackground} from 'react-native';

export default function MenuAnônimoDeOpções({route,navigation}){
    // Variaveis de transição - NÃO MEXA
    const { userCPF,user } = route.params;
    
    //============= TELA DE MENU (ANÔNIMO) ==============
    return(
        <View style={Design.container}>
            <ImageBackground source={require("../img/fundoAplicativoP&B.svg.png")} style={Design.cenario}>
                <View style={Design.titulo}><Text style={{fontSize:24,color:'#FFF'}}>Escolha a sua opção</Text></View>
                <View style={Design.btn}><Button title={"Cadastrar Denúncia"} style={Design.btn} color="#333" onPress={() => navigation.navigate('TelaDeDenúncia',{userCPF:userCPF,user:user})}/></View>
                <View style={Design.btn}><Button title={"Sair"} color="#333" onPress={() => navigation.navigate('Login')}/></View>
            </ImageBackground>
        </View>
    );
}

// Interface / CSS
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