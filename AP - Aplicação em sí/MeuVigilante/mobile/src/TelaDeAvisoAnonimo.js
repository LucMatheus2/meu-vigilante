import React from 'react';
import {View, Text, StyleSheet,Image ,Button,ImageBackground} from 'react-native';

export default function TelaDeAvisoAnônimo({navigation}){
    function irPraTelaDeDenunciaAnônima(transicao){
        transicao.navigate('MenuPrincipalAnon',{userCPF:'00000000000',user:'Anônimo'});
    }
    function irParaATelaDeLogin(transicao){
        transicao.navigate('Login');
    }
    return(
        <ImageBackground source={require('../img/fundoAplicativoP&B.svg.png')} style={Design.containerCenario}>
            <View style={Design.container}>
                <Image source={require('../img/anonimato.png')} style={{width:'30%',height:'30%'}}/>
                <Text style={{color:'#FFF',fontSize:24,textAlign:"center"}}>Você está entrando no modo anônimo</Text>
                <Text style={{color:'#FFF',textAlign:"justify",marginVertical:10,marginHorizontal:7}}>Sua denúncia será encaminhada para todos os orgãos competentes de maneira sigilosa, o que impossibilita de você acompanhar o rastreamento da denúncia.</Text>
                <Button title="Continuar mesmo assim" color="#333"onPress={ () => {irPraTelaDeDenunciaAnônima(navigation)}}/>
                <Button title="Cancelar" color="#F00" onPress={() => {irParaATelaDeLogin(navigation)}}/>
            </View>
        </ImageBackground>
    );
}

const Design = StyleSheet.create({
    container:{
        backgroundColor:'#000',
        opacity:0.8,
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    containerCenario:{
        flex:1,
        resizeMode: "cover",
        justifyContent: "center"
    }
});