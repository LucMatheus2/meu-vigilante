import React from 'react';
import { View, Text, Button , TextInput , StyleSheet, Image, ImageBackground } from 'react-native';


//Funções
export default function TelaDeCadastro({navigation}) {
        return(
            <ImageBackground source={require('./img/fundoAplicativoLight.svg.png')} style={Design.containerCenario}>
                <View style={Design.container}>
                    <Image source={require('./img/logoMeuVigilante.png')}/>
                    <Text style={Design.titulo}>MeuVigilante</Text>
                </View>
                <View style={Design.container}>
                    <Text>CPF: </Text>
                    <TextInput placeholder="Digite o seu CPF" keyboardType={"number-pad"} maxLength={11}/>
                    <Text>Email :</Text>
                    <TextInput placeholder="seuemail@mail.com" keyboardType={"email-address"}/>
                    <Text>Senha: </Text>
                    <TextInput placeholder="Digite a sua senha" maxLength={20}/>
                    <Text>Repetir Senha: </Text>
                    <TextInput placeholder="Digite a sua senha" maxLength={20}/>
                </View>
                <View style={Design.container}>
                    <View style={Design.containerBtn}><Button title={"Cadastrar-se"} color="#028047" onPress={() => alert('Falta o Ajax XD')}/></View>
                    <View style={Design.containerBtn}><Button title={"Voltar"} onPress={() => navigation.navigate('Login')}/></View>
                </View>
                <View style={{backgroundColor:"#001c7d",height:30,alignItems:"center"}}>
                    <Text style={{color:'#FFF'}}>&copy; 2020 - Universidade do Estado do Pará</Text>
                </View>
            </ImageBackground>
        );
}

//CSS
const Design = StyleSheet.create({
    containerBtn:{
        marginVertical:10,
    },
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
    titulo:{
        fontSize:24
    }
});
