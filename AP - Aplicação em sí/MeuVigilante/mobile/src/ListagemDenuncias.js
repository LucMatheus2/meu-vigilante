import React from 'react';
import {View,Button,Text,StyleSheet,ImageBackground,ScrollView} from 'react-native';

export default function ListagemDeDenúncia({route,navigation}){
    return(
        <ImageBackground source={require('../img/fundoAplicativoLight.svg.png')} style={Design.containerCenario}>
            <View style={Design.container}>
                <Text style={{fontSize:24,marginBottom:10,marginTop:8,fontWeight:"bold"}}>Suas Denúncias</Text>
                <ScrollView>
                    <View style={Design.tupla}>
                        <Text style={{marginRight:10}}>DEN-0001</Text>
                        <Button title="Consultar" color="#5e9deb" onPress={() => {navigation.navigate('CartãoDeDenúncia')}}/>
                        <Button title="Gerar PDF" color="#f76c83"/>
                    </View>
                    <View style={Design.tupla}>
                        <Text style={{marginRight:10}}>DEN-0003</Text>
                        <Button title="Consultar" color="#5e9deb"/>
                        <Button title="Gerar PDF" color="#f76c83"/>
                    </View>
                    <View style={Design.tupla}>
                        <Text style={{marginRight:10}}>DEN-0008</Text>
                        <Button title="Consultar" color="#5e9deb"/>
                        <Button title="Gerar PDF" color="#f76c83"/>
                    </View>
                    <View style={Design.tupla}>
                        <Text style={{marginRight:10}}>DEN-0015</Text>
                        <Button title="Consultar" color="#5e9deb"/>
                        <Button title="Gerar PDF" color="#f76c83"/>
                    </View>
                    <View style={Design.tupla}>
                        <Text style={{marginRight:10}}>DEN-0023</Text>
                        <Button title="Consultar" color="#5e9deb"/>
                        <Button title="Gerar PDF" color="#f76c83"/>
                    </View>
                    <View style={Design.tupla}>
                        <Text style={{marginRight:10}}>DEN-0033</Text>
                        <Button title="Consultar" color="#5e9deb"/>
                        <Button title="Gerar PDF" color="#f76c83"/>
                    </View>
                </ScrollView>
                <Button title="Voltar para o menu principal" color="#61debd" style={{marginBottom:6}} onPress={() => navigation.navigate('MenuPrincipal')}/>
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
    container:{
        flex:1,
        justifyContent:"center", 
        alignItems:"center" ,
    },
    tupla:{
        marginTop:5,
        flex:2,
        flexDirection:"row"
    }
});