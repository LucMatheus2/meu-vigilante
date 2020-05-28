import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function TelaDeAvisoAnônimo({navigation}){
    function irPraTelaDeDenunciaAnônima(transicao){
        transicao.navigate('TelaDeDenuncia',{cpf:00000000});
    }
    function irParaATelaDeLogin(transicao){
        transicao.navigate('TelaDeLogin');
    }
    return(
        <View style={Design.container}>
            <Text>Você está entrando no modo anônimo</Text>
            <Text>Sua denúncia será encaminhada para todos os orgãos competentes de maneira sigilosa, o que impossibilita de você acompanhar o rastreamento da denúncia.</Text>
            <Button title="Continuar mesmo assim" color="#333"onPress={ (navigation) => {irPraTelaDeDenunciaAnônima(navigation)}}/>
            <Button title="Cancelar" color="#F00" onPress={(navigation) => {irParaATelaDeLogin(navigation)}}/>
        </View>
    );
}

const Design = StyleSheet.create({
    container:{
        flex:1,
        alignContent:"center",
        alignItems:"center"
    }
});