import React from 'react';
import {View,Button,Text,StyleSheet,ImageBackground,FlatList} from 'react-native';

export default function ListagemDeDenúncia({route,navigation}){
    
    //Paramêtros obrigatórios da tela anterior - NÃO ALTERE
    const {userCPF} = route.params;
    
    // Preparação de uma lista - [!] NÃO É A FORMA MAIS RECOMENDADA PELO REACT MAS É A MAIS RÁPIDA
    var lista = [];
    
    //Função 'fetch' novamente, vulgo Ajax
    fetch(`http://www.estudiodoluk.com.br/dev/MeuVigilante/control/listarDenuncia.control.php?Denunciante=${userCPF}`,{method:'GET'})
        .then((resposta) => resposta.json())
        .then((r) => {
            for(let i = 0 ; i < r.length; i++){
                lista[i] = {codSerie:r[i].CodSerie}
            }
        })
        .catch((e)=>{
            alert("Deu erro");
        })

    return(
        <ImageBackground source={require('../img/fundoAplicativoLight.svg.png')} style={Design.containerCenario}>
            <View style={Design.container}>
                <Text style={{fontSize:24,marginBottom:10,marginTop:8,fontWeight:"bold"}}>Suas Denúncias</Text>
                <FlatList data={lista} renderItem={({item}) => <View style={Design.tupla}><Text style={{marginRight:10}}>DEN-{item.codSerie}</Text><Button title="Consultar" color="#5e9deb" onPress={() => {navigation.navigate('CartãoDeDenúncia',{userCPF:userCPF,codDenuncia:item.codSerie})}}/><Button title="Gerar PDF" color="#f76c83" onPress={() => {navigation.navigate('ComprovantePDF',{userCPF:userCPF,Denuncia:item.codSerie})}}/></View>}/>
                <Button title="Voltar para o menu principal" color="#61debd" style={{marginBottom:6}} onPress={() => navigation.navigate('MenuPrincipal')}/>
            </View>
        </ImageBackground>
    );
}

//O "CSS"
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