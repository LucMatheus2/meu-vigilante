import React from 'react';
import {View, Button ,Text,TextInput, StyleSheet, ImageBackground} from 'react-native';

export default function TelaDeDenuncia({route,navigation}){
        const { userCPF,user } = route.params;
        const [denuncia,setDenuncia] = React.useState()

        function cancelarDenuncia(rotas){
            let jsUserCPF = userCPF;
            if(jsUserCPF == '00000000000'){
                rotas.navigate('MenuPrincipalAnon',{userCPF:userCPF,user:user})
            } else {
                rotas.navigate('MenuPrincipal',{userCPF:userCPF,user:user})
            }
        }

        function efetuarDenuncia(telas){
            fetch('http://www.estudiodoluk.com.br/dev/MeuVigilante/control/efetuarDenuncia.control.php',{
                method:'POST',
                header:{
                    'Accept':'application/json',
                    'Content-type':'application/json'
                },
                body:JSON.stringify({
                    Denunciante:userCPF,
                    Denuncia:denuncia
                })
            })
            .then(resposta => resposta.json())
            .then((r) => {
                if (r == true){
                    alert("Denúncia efetuado com sucesso")
                    cancelarDenuncia(telas)
                } else {
                    alert("Houve um erro no arquivamento da sua denúncia")
                    cancelarDenuncia(telas)
                }
            })
            .catch((e) => {
                alert("Houve um erro ao se conectar com o banco de dados");
            })
        }

        return(
            <ImageBackground source={require('../img/fundoAplicativoLight.svg.png')} style={Design.containerCenario}>
                <View style={Design.container}>
                    <Text style={{fontSize:24}}>Processo de Denúncia</Text>
                    <Text style={{marginTop:12}}>O que está acontecendo?</Text>
                    <TextInput numberOfLines={5} style={{backgroundColor:'#FFF',width:'90%'}} placeholder="Escreva o fato ocorrido" onChangeText={text => setDenuncia(text)}/>
                    <View style={{flexDirection:"row"}}><Button title="Anexar Foto" color="#028047"/>
                    <Button title="Marcar Localização"/></View>
                    <View style={{marginTop:15}}><Button color="#F00" title="Efetuar Denúncia" onPress={() => efetuarDenuncia(navigation)}/></View>
                    <View style={{marginTop:15}}><Button color="#000" title="Cancelar" onPress={() => {cancelarDenuncia(navigation)}}/></View>
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