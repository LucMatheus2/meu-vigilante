import React, { Component } from 'react';
import { View, Text, Button , TextInput , StyleSheet, ImageBackground, Image } from 'react-native';

//Funções
function logar(){
   alert(2);
}

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            cpf:'',
            senha:''
        }
    }

    render(){
        return(
            <ImageBackground source={require('./img/fundoAplicativoLight.svg.png')} style={Design.containerCenario}>
                <View style={Design.container}>
                    <Image source={require('./img/logoMeuVigilante.png')}/>
                    <Text style={Design.titulo}>MeuVigilante</Text>
                </View>
                <View style={Design.container}>
                    <Text>CPF: </Text>
                    <TextInput placeholder="Digite o seu CPF" keyboardType={"number-pad"} maxLength={11} onBlur={cpf => this.setState({cpf})}/>
                    <Text>Senha: </Text>
                    <TextInput placeholder="Digite a sua senha" maxLength={20} secureTextEntry={true} onChangeText={senha => this.setState({senha})}/>
                </View>
                <View style={Design.container}>
                    <View style={Design.btn}><Button title={"Log in"}  color="#028047" onPress={logar}/></View>
                    <View style={Design.btn}><Button title={"Entrar como Anônimo"} color="#333"/></View>
                    <View style={Design.btn}><Button title={"Cadastre-se"} color="#028047"/></View>
                </View>
            </ImageBackground>
        );
    }
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
