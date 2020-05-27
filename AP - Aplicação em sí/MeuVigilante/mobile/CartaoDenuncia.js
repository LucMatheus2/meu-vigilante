import React from 'react';
import { View , Text , StyleSheet , ImageBackground , Button } from 'react-native';


export default function CartãoDeDenúncia({route,navigation}){
    return(
        <ImageBackground source={require('./img/fundoAplicativoLight.svg.png')} style={Design.containerCenario}>
            <View style={Design.containerEstado}>
                <Text>Estado:</Text>
                <Text style={{fontSize:24,fontWeight:"bold",color:"#8ac152"}}>Denúncia Solicitada</Text>
            </View>
            <View style={Design.containerSituação}>
                <Text style={{fontSize:16,fontWeight:"bold"}}>Descrição</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales turpis a justo euismod, id dictum nibh molestie. Vivamus risus libero, dapibus vitae ex vel, iaculis vehicula libero. Praesent hendrerit congue neque et dapibus. Donec massa lorem, consectetur eu auctor in, dapibus sed mi. Vivamus aliquam dictum sagittis. Nullam ornare, ipsum ac lobortis efficitur, turpis purus ultricies sem, consequat interdum lectus felis a nulla. Mauris et porta dolor. </Text>
                <View style={Design.containerBotões}>
                    <Button title="Voltar" color="#61debd" onPress={() => {navigation.navigate('ListagemDeDenúncia')}}/><Text>  </Text>
                    <Button title="Solicitar Comprovante" color="#f76c83"/>
                </View>
            </View>
        </ImageBackground>
    );
}

const Design = StyleSheet.create({
    containerCenario:{
        flex:1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    containerEstado:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    containerSituação:{
        flex:2,
        marginHorizontal:"10%",
        textAlign:"left"
    },
     containerBotões:{
         paddingHorizontal:5,
         flexDirection:"row"
    }
});