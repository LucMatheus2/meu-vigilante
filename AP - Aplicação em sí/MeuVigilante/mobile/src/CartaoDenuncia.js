import React from 'react';
import { View , Text , StyleSheet , ImageBackground , Button } from 'react-native';


export default function CartãoDeDenúncia({route,navigation}){
    
    const {userCPF,codDenuncia} = route.params;
    const [Denuncia,setDenuncia] = React.useState('');

    fetch(`http://www.estudiodoluk.com.br/dev/MeuVigilante/control/catalogarDenuncia.control.php?Denuncia=${codDenuncia}`,{method:'GET'})
    .then((resposta) => resposta.json())
    .then((r) => {
        setDenuncia({
            Estado:r.Estado,
            Descrição:r.Denuncia
        })
    })
    .catch((e)=>{
        alert("Deu erro");
        console.log(e);
    })

    return(
        <ImageBackground source={require('../img/fundoAplicativoLight.svg.png')} style={Design.containerCenario}>
            <View style={Design.containerEstado}>
                <Text>Estado:</Text>
            <Text style={{fontSize:24,fontWeight:"bold",color:"#8ac152"}}>Denúncia {Denuncia.Estado}</Text>
            </View>
            <View style={Design.containerSituação}>
                <Text style={{fontSize:16,fontWeight:"bold"}}>Descrição</Text>
                <Text>{Denuncia.Descrição}</Text>
                <View style={Design.containerBotões}>
                    <Button title="Voltar" color="#61debd" onPress={() => {navigation.navigate('ListagemDeDenúncia',{userCPF:userCPF})}}/><Text>  </Text>
                    <Button title="Solicitar Comprovante" color="#f76c83" onPress={() => {navigation.navigate('ComprovantePDF',{userCPF:userCPF,Denuncia:codDenuncia})}}/>
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