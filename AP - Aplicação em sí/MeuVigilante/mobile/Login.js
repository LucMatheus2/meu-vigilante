import React from 'react';
import { View, Text, Button , TextInput , StyleSheet, ImageBackground, Image } from 'react-native';

export default function Login({navigation}) {

//Objetos
const [cpf, setCPF] = React.useState('');
const [senha, setSenha] = React.useState('');

//Funções
function logar(){
    alert(`CPF : ${cpf}\nSenha: ${senha}`);
}
function entrarComoAnonimo(nav){
    alert("Você estará entrando no modo anônimo");
    nav.navigate('TelaDeDenúncia');
}
 
        return(
            <ImageBackground source={require('./img/fundoAplicativoLight.svg.png')} style={Design.containerCenario}>
                <View style={Design.container}>
                    <Image source={require('./img/logoMeuVigilante.png')}/>
                    <Text style={Design.titulo}>MeuVigilante</Text>
                </View>
                <View style={Design.container}>
                    <Text>CPF: </Text>
                    <TextInput placeholder="Digite o seu CPF" keyboardType={"number-pad"} maxLength={11} onChangeText={cpf => setCPF(cpf)}/>
                    <Text>Senha: </Text>
                    <TextInput placeholder="Digite a sua senha" maxLength={20} secureTextEntry={true} onChangeText={senha => setSenha(senha)}/>
                </View>
                <View style={Design.container}>
                    <View style={Design.btn}><Button title={"Log in"}  color="#028047" onPress={() => navigation.navigate('MenuPrincipal',{userCPF:cpf})}/></View>
                    <View style={Design.btn}><Button title={"Entrar como Anônimo"} color="#333" onPress={() => entrarComoAnonimo(navigation)}/></View>
                    <View style={Design.btn}><Button title={"Cadastre-se"} color="#028047" onPress={() => navigation.navigate('TelaDeCadastro')}/></View>
                </View>
                <View style={{backgroundColor:"#001c7d",height:30,alignItems:"center"}}>
                    <Text style={{color:'#FFF'}}>&copy; 2020 - Universidade do Estado do Pará</Text>
                </View>
            </ImageBackground>
        );
}

//CSS
const Design = StyleSheet.create({
    btn:{
        marginVertical:8,
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
