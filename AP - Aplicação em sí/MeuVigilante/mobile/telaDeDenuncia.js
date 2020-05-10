import React,{Component} from 'react';
import {View,SafeAreaView,Text,StyleSheet,ImageBackground,Image, Button,ScrollView} from 'react-native';

export default class TelaDeDenuncia extends Component{
    render(){
        return (
            <ImageBackground source={require('./img/fundoAplicativoLight.svg.png')} style={Design.containerCenario}>
                <SafeAreaView style={Design.container}>
                    <ScrollView>
                        <View style={Design.containerOpcao}>
                            <Text style={Design.titulo}>Descarte Irregular de Lixo</Text>
                            <Image source={require('./img/ico_DescarteComun.png')}/>
                            <Text>Se é Lixo na rua, calçada, canais ou em algum terreno baldio.</Text>
                            <Button title="SEU PROBLEMA É AQUI!" color="#F00"/>
                        </View>
                        <View style={Design.containerOpcao}>
                            <Text style={Design.titulo}>Queimadas</Text>
                            <Image source={require('./img/ico_Queimadas.png')}/>
                            <Text>Se é queima de lixo, seja na sua casa ou em algum lugar ao seu redor, ou queimada em geral perto de área protegida.Se é queima de lixo, seja na sua casa ou em algum lugar ao seu redor, ou queimada em geral perto de área protegida.</Text>
                            <Button title="SEU PROBLEMA É AQUI!" color="#F00"/>
                        </View>
                        <View style={Design.containerOpcao}>
                            <Text style={Design.titulo}>Outros</Text>
                            <Image source={require('./img/ico_Outros.png')}/>
                            <Text>Se não é nenhum dos dois mencionados acima.</Text>
                            <Button title="SEU PROBLEMA É AQUI!" color="#F00"/>
                        </View>
                        <View style={{marginTop:8}}><Button title="Voltar pro menu" color="#333"/></View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        );
    }
}

const Design = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center", 
        alignItems:"center", 
    },
    containerOpcao:{
        width:"70%",
        marginTop:"5%",
    },
    containerCenario:{
        flex:1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    titulo:{
        marginBottom:5,
        fontSize:22,
        fontWeight:"bold",
    },
});