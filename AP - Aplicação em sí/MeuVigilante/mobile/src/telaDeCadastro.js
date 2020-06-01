import React from 'react';
import { View, Text, Button , TextInput , StyleSheet, Image, ImageBackground } from 'react-native';


//Funções
export default function TelaDeCadastro({navigation}) {
        const [cpf,setCPF] = React.useState('');
        const [nome,setNome] = React.useState('');
        const [senha1,setSenha1] = React.useState('');
        const [senha2,setSenha2] = React.useState('');
    
        function validarSenhas(){
                let jsSenha1 = senha1;
                let jsSenha2 = senha2;
                if (jsSenha1 != jsSenha2) {
                    alert("As senhas não são iguais");
                    return false;
                } else {
                    return true;
                }
        }
        function Cadastrar(){
            let validadeSenhas = validarSenhas();
            if (validadeSenhas == true) {
                fetch('http://www.estudiodoluk.com.br/dev/MeuVigilante/control/cadastrarUsuario.control.php',{
                    method:'POST',
                    header:{
                        'Accept':'application/json',
                        'Content-type':'application/json'
                    },
                    body:JSON.stringify({
                        cpf:cpf,
                        nome:nome,
                        senha:senha1
                    })
                })
                .then(resposta => resposta.json())
                .then((r) => {
                    if(r == true){
                        alert("Usuário cadastrado com sucesso");
                    } else {
                        alert("Erro ao efetuar o cadastro");
                        console.log(r)
                    }
                })
                .catch((e) => {
                    alert("Houve um erro de conexão no banco de dados");
                })
            }
        }
        return(
            <ImageBackground source={require('../img/fundoAplicativoLight.svg.png')} style={Design.containerCenario}>
                <View style={Design.container}>
                    <Image source={require('../img/logoMeuVigilante.png')}/>
                    <Text style={Design.titulo}>MeuVigilante</Text>
                </View>
                <View style={Design.container}>
                    <Text>CPF: </Text>
                    <TextInput placeholder="Digite o seu CPF" keyboardType={"number-pad"} maxLength={11} onChangeText={text => setCPF(text)}/>
                    <Text>Nome: </Text>
                    <TextInput placeholder="Digite o seu nome" maxLength={60} onChangeText={text => setNome(text)}/>
                    <Text>Senha: </Text>
                    <TextInput placeholder="Digite a sua senha" maxLength={20} secureTextEntry={true} onChangeText={text => setSenha1(text)}/>
                    <Text>Repetir Senha: </Text>
                    <TextInput placeholder="Digite a sua senha" maxLength={20} secureTextEntry={true} onChangeText={text => setSenha2(text)}/>
                </View>
                <View style={Design.container}>
                    <View style={Design.containerBtn}><Button title={"Cadastrar-se"} color="#028047" onPress={Cadastrar}/></View>
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
