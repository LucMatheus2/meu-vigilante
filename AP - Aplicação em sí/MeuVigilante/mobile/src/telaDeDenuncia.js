import React, { useEffect } from 'react';
import {View, Button ,Text,TextInput, StyleSheet, ImageBackground, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export default function TelaDeDenuncia({route,navigation}){
        const { userCPF,user } = route.params;
        const [denuncia,setDenuncia] = React.useState()

        const [permissaoLocalizacao,setPermissaoLocalizacao] = React.useState(false);
        const [posicao,setPosicao] = React.useState('0');

        function marcarLocalização(){
            async function verificarPermissao(){
                try{
                    const garantia = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                    );
                    if (garantia === PermissionsAndroid.RESULTS.GRANTED){
                        setPermissaoLocalizacao(true);
                    }
                    console.log('Depurou 2')
                }
                catch (exceção) {
                    console.log('Erro')
                }
            }
            
            useEffect(() => {
                verificarPermissao()
                if (permissaoLocalizacao == true) {
                    Geolocation.getCurrentPosition(
                        coords => {
                            setPosicao({
                                latitude:coords.coords.latitude,
                                longitude:coords.coords.longitude
                            });
                        },
                        erro => {
                            console.log('Erro na localização \n '+erro)
                        }
                    );
                }
            },[permissaoLocalizacao])
        }
        
        function cancelarDenuncia(rotas){
            let jsUserCPF = userCPF;
            if(jsUserCPF == '00000000000'){
                rotas.navigate('MenuPrincipalAnon',{userCPF:userCPF,user:user})
            } else {
                rotas.navigate('MenuPrincipal',{userCPF:userCPF,user:user})
            }
        }

        function efetuarDenuncia(telas){
            fetch(`http://www.estudiodoluk.com.br/dev/MeuVigilante/control/efetuarDenuncia.control.php?Denunciante=${userCPF}&Denuncia=${denuncia}&Latitude=${posicao}&Longitude=${posicao}&Foto=null`,{
                method:'GET'
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
                console.log(e)
            })
        }

        return(
            <ImageBackground source={require('../img/fundoAplicativoLight.svg.png')} style={Design.containerCenario}>
                <View style={Design.container}>
                    <Text style={{fontSize:24}}>Processo de Denúncia</Text>
                    <Text style={{marginTop:12}}>O que está acontecendo?</Text>
                    <TextInput numberOfLines={5} style={{backgroundColor:'#FFF',width:'90%'}} placeholder="Escreva o fato ocorrido" onChangeText={text => setDenuncia(text)}/>
                    <View style={{flexDirection:"row"}}><Button title="Anexar Foto" color="#028047"/>
                    <Button title="Marcar Localização" onPress={marcarLocalização}/></View>
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