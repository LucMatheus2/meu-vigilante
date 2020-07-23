import React from 'react'
import { StyleSheet } from 'react-native';
// Biblioteca externa - necessita do download dos pacotes via npm ou yarn
import { WebView } from 'react-native-webview';

export default function ComprovantePDF({route,navigation}){
    // Hooks - NÃO MEXA
    const {userCPF,Denuncia} = route.params;

    // ========= TELA DE CARTÃO DE DENÚNCIA PARA GERAÇÃO DE PDF ========
    return(
        <WebView source={{uri:`http://www.estudiodoluk.com.br/dev/MeuVigilante/control/Relatorio.control.php?Denuncia=${Denuncia}`}} style={Design.container}/>
    )
}
// CSS
const Design = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20
    }
})
//<Button title="Voltar" color="green" onPress={() => navigation.navigate('CartãoDeDenúncia',{userCPF:userCPF,codDenuncia:Denuncia})}/>