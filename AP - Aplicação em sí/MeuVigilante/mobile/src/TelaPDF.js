import React from 'react'
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function ComprovantePDF({route,navigation}){
    const {userCPF,Denuncia} = route.params;

    return(
        <WebView source={{uri:`http://www.estudiodoluk.com.br/dev/MeuVigilante/control/Relatorio.control.php?Denuncia=${Denuncia}`}} style={Design.container}/>
    )
}
const Design = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20
    }
})
//<Button title="Voltar" color="green" onPress={() => navigation.navigate('CartãoDeDenúncia',{userCPF:userCPF,codDenuncia:Denuncia})}/>