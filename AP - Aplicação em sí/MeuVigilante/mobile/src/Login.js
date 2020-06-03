import React from 'react';
import { Alert,View, Text, Button , TextInput , StyleSheet, ImageBackground, Image } from 'react-native';

export default function Login({navigation}) {

//Hooks de CPF e Senha
const [cpf, setCPF] = React.useState('');
const [senha, setSenha] = React.useState('');


// Responsável pelo login e pelas validações
function logar(telas){
    let jsCPF = cpf;
    jsCPF = jsCPF.toString();
    
    // Verifica se digitou o CPF corretamente
    if (jsCPF.length < 11){
        Alert.alert("O seu CPF está incompleto!","Digite todos os digitos do seu documento sem pontos ou traços e depois aperte em ENTRAR.");
    } 
    else {
        //Chamada do controle para logar, diferente do Ajax ele retorna uma "Promessa"
        fetch(`http://www.estudiodoluk.com.br/dev/MeuVigilante/control/listarUsuario.control.php?cpf=${cpf}&senha=${senha}`,{
            method:'GET'
        })
        //Os dados são convertidos para JSON
        .then((resposta) => resposta.json())
        
        //Caso a busca seja bem sucedida
        .then((r) =>{
            
            //Caso o usuário não exista
            if (r == false){
                Alert.alert("Usuário não encontrado","Verifique se você digitou todos os dados solicitados corretamente.");
            } 
            // Final feliz
            else {
                telas.navigate('MenuPrincipal',{userCPF:r.CPF,user:r.Usuario});
            }
        })
        // Erro por falta de conexão com o banco de dados
        .catch((e) => {
                alert("Houve um erro de conexão com o banco de dados");
                console.log(e);
            }
        );
    }
}

//Chamada para a tela anônima
function entrarComoAnonimo(nav){
    nav.navigate('TelaDeAvisoAnonimo');
}
 
        return(
            <ImageBackground source={require('../img/fundoAplicativoLight.svg.png')} style={Design.containerCenario}>
                <View style={Design.container}>
                    <Image source={require('../img/logoMeuVigilante.png')}/>
                    <Text style={Design.titulo}>MeuVigilante</Text>
                </View>
                <View style={Design.container}>
                    <Text>CPF: </Text>
                    <TextInput placeholder="Digite o seu CPF" keyboardType={"number-pad"} maxLength={11} onChangeText={(cpf) => {setCPF(cpf)}} />
                    <Text>Senha: </Text>
                    <TextInput placeholder="Digite a sua senha" maxLength={20} secureTextEntry={true} onChangeText={senha => setSenha(senha)}/>
                </View>
                <View style={Design.container}>
                    <View style={Design.btn}><Button title={"Entrar"}  color="#028047" onPress={() => {logar(navigation)}}/></View>
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
