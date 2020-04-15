import React from 'react';
import { StyleSheet,Text, View, TextInput,Image, Button, ImageBackground} from 'react-native';

const bgFundo = { uri:"./img/fundoAplicativoLight.svg.png" };
const styles = StyleSheet.create({
  //"CSS"
  visao:{
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center" ,
    backgroundColor:"#FFF",
  },
  fundo:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  rodape: {
    padding:12,
    backgroundColor: "#003780",
    color: "#FFF",
    width:"100%",
    textAlign:"center",
  },
  logo:{
    marginVertical:10,
    width:"80%",
    height:"50%",
  },
  btn:{
    backgroundColor:"#003780",
    padding:5,
    marginVertical:10
  },
  btnAnonimo:{
    backgroundColor:"#000000",
    padding:5,
    marginVertical:10
  },
  txtFormulario:{
    marginTop:5,
    width:"80%",
    padding:12,
    borderWidth:2,
    borderColor:"#EEE",
  },
});

export default function YourApp() {
  /* Funções */
  function testar(){
    alert("Estamos quase lá :D");
  }
  function entrarComoAnonimo(){
    alert("Você estará entrando no modo anônimo, o que significa que a sua segurança será prorizada em relação a integridade das suas denuncias, deseja seguir?");
  }
  return (
    // Tela Principal
    <View style={styles.visao}>
      <ImageBackground source={bgFundo} style={styles.fundo}>
        <Image source={require('./img/logoMeuVigilante.png')} style={styles.logo}/>
        <TextInput style={styles.txtFormulario} placeholder="Digite o seu CPF" maxLength={11} keyboardType={"number-pad"} autoFocus={true} />
        <TextInput style={styles.txtFormulario} placeholder="Digite a sua Senha" maxLength={20} keyboardType={"default"} secureTextEntry={true}/>
        <Button style={styles.btn} title={"Login"} onPress={testar}/>
        <Button style={styles.btnAnonimo} title={"Entrar como Anônimo"} onPress={entrarComoAnonimo}/>
        <Button style={styles.btn} title={"Cadastrar-se"}/>
        <Text style={styles.rodape}>
          &copy; 2020 - Universidade do Estado do Pará
        </Text>
      </ImageBackground>
    </View>

    /*
    // Tela de Cadastro
    <View style={styles.visao}>
        <ImageBackground source={bgFundo} style={styles.fundo}>
        <Image source={require('./img/logoMeuVigilante.png')} style={styles.logo}/>
        <TextInput style={styles.txtFormulario} placeholder="CPF" maxLength={11} keyboardType={"number-pad"} autoFocus={true} />
        <TextInput style={styles.txtFormulario} placeholder="Nome" maxLength={20} keyboardType={"default"}/>
        <TextInput style={styles.txtFormulario} placeholder="Senha" maxLength={20} keyboardType={"default"} secureTextEntry={true}/>
        <TextInput style={styles.txtFormulario} placeholder="Repetir Senha" maxLength={20} keyboardType={"default"} secureTextEntry={true}/>
        <Button style={styles.btn} title={"Cadastrar"} onPress={testar}/>
        <Button style={styles.btn} title={"Voltar"} onPress={testar}/>
      </ImageBackground>
    </View>

    // Tela de Menu
    <View style={styles.visao}>
        <Button style={styles.btn} title={"Efetuar Denúncia"} />
    </View>

    //RODAPÉ
    <View>
      <Text style={styles.rodape}>
          &copy; 2020 - Universidade do Estado do Pará
      </Text>
    </View>
    */
  );
}
