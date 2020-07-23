import React, { useEffect } from 'react';
import {Alert, View, Button ,Text,TextInput, StyleSheet, ImageBackground, PermissionsAndroid} from 'react-native';

// Bibliotecas externas - necessitam importação dos pacotes via npm ou yarn
import Geolocation from 'react-native-geolocation-service'; // <- from 'nome do pacote'
import ImagePicker from 'react-native-image-picker';
import Axios from 'axios';

export default function TelaDeDenuncia({route,navigation}){
        // Variaveis de controle - NÃO MEXA
        const { userCPF,user } = route.params;
        const [denuncia,setDenuncia] = React.useState('');

        // Informações de formulário
        const [permissaoLocalizacao,setPermissaoLocalizacao] = React.useState(false);
        const [posicao,setPosicao] = React.useState(false);
        const [foto,setFoto] = React.useState();
       

        /**
         * Função para verificações de permissões com o usuário
         * Essa é uma função bastante sensivel, precaução é necessária
         * a fazer quaisquer alterações.
         */
        async function verificarPermissao(){
            try{
                const garantia = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                );
                if (garantia === PermissionsAndroid.RESULTS.GRANTED){
                    setPermissaoLocalizacao(true);
                }
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

        function marcarLocalizacao(){
            if (permissaoLocalizacao == true) {
                Alert.alert('Localização marcada','As localizações estão marcadas'); 
            } else {
                Alert.alert('Requisito Necessário','Você precisa conceder a permissão de Geolocalização')
            }
        }
        
        //Função para cancelar a denúncia
        function cancelarDenuncia(rotas){
            let jsUserCPF = userCPF;
            if(jsUserCPF == '00000000000'){
                rotas.navigate('MenuPrincipalAnon',{userCPF:userCPF,user:user})
            } else {
                rotas.navigate('MenuPrincipal',{userCPF:userCPF,user:user})
            }
        }

        //Função para efetivação da denúncia, ainda incompleta.
        function efetuarDenuncia(telas){
            fetch(`http://www.estudiodoluk.com.br/dev/MeuVigilante/control/efetuarDenuncia.control.php?Denunciante=${userCPF}&Denuncia=${denuncia}&Latitude=${posicao.latitude}&Longitude=${posicao.longitude}&Foto=${foto.fileName}`,{
                method:'GET'
            })
            .then(resposta => resposta.json())
            .then((r) => {
                if (r == true){
                    //enviarImagem();
                    Alert.alert("","Denúncia Efetuada\nCom Sucesso");
                    cancelarDenuncia(telas)
                } else {
                    Alert.alert("Houve um erro no arquivamento da sua denúncia","Verifique se não deixou dados em branco ou a sua conexão com a internet");
                    cancelarDenuncia(telas)
                }
            })
            .catch((e) => {
                Alert.alert("Houve um erro ao se conectar com o banco de dados","Contate o programador mais próximo");
                console.log(e)
            })
        }

        //Função de retorno da Imagem
        function retornoDeImagem(dados){
            if (dados.type != "image/jpeg") {
                Alert.alert('Imagem incompatível','O aplicativo não aceita imagens ou desenhos, por favor envie uma FOTO!');
                return;
            } else {
                setFoto(dados);
            }
        }

        //Função de envio da Imagem
        async function enviarImagem(){
            const MetaFoto = new FormData();
            MetaFoto.append('MetaFoto',{
                url:foto.uri,
                nome:foto.fileName
            })
            await Axios.post('http://www.estudiodoluk.com.br/dev/MeuVigilante/control/efetuarDenuncia.control.php',MetaFoto)
        }

        // ================================ TELA DE DENÚNCIA =========================
        return(
            <ImageBackground source={require('../img/fundoAplicativoLight.svg.png')} style={Design.containerCenario}>
                <View style={Design.container}>
                    <Text style={{fontSize:24}}>Processo de Denúncia</Text>
                    <Text style={{marginTop:12}}>O que está acontecendo?</Text>
                    <TextInput numberOfLines={5} style={{backgroundColor:'#FFF',width:'90%'}} placeholder="Escreva o fato ocorrido" onChangeText={text => setDenuncia(text)}/>
                    <View style={{flexDirection:"row"}}><Button title="Anexar Foto" color="#028047" onPress={() => ImagePicker.showImagePicker({title:'Escolha a opção'},retornoDeImagem)}/>
                    <Button title="Marcar Localização" onPress={marcarLocalizacao} /></View>
                    <View style={{marginTop:15}}><Button color="#F00" title="Efetuar Denúncia" onPress={() => efetuarDenuncia(navigation)}/></View>
                    <View style={{marginTop:15}}><Button color="#000" title="Cancelar" onPress={() => {cancelarDenuncia(navigation)}}/></View>
                </View>
                <View style={{backgroundColor:"#001c7d",height:30,alignItems:"center"}}>
                    <Text style={{color:'#FFF'}}>&copy; 2020 - Universidade do Estado do Pará</Text>
                </View>
            </ImageBackground>
        );
}

// Interface / CSS
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