//Dependências de Transições de tela
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//Telas
import Login from './src/Login';
import MenuDeOpções from './src/menuDeOpções';
import TelaDeCadastro from './src/telaDeCadastro';
import ListagemDeDenúncia from './src/ListagemDenuncias';
import CartãoDeDenúncia from './src/CartaoDenuncia';
import TelaDeDenuncia from './src/telaDeDenuncia';
import TelaDeAvisoAnônimo from './src/TelaDeAvisoAnonimo';
import MenuAnônimoDeOpções from './src/TelaDeMenuAnonimo';
import ComprovantePDF from './src/TelaPDF';

//Componente de tela
const Telas = createStackNavigator();

//Componente principal
export default function App() {
        return(
            <NavigationContainer>
                <Telas.Navigator>                    
                    <Telas.Screen name="Login" component={Login} options={{title:'Bem-vindo'}}/>
                    <Telas.Screen name="TelaDeCadastro" component={TelaDeCadastro} options={{title:'Tela De Cadastro'}}/>                       
                    <Telas.Screen name="TelaDeAvisoAnonimo" component={TelaDeAvisoAnônimo} options={{title:'???'}}/>
                    <Telas.Screen name="MenuPrincipal" component={MenuDeOpções} options={{title:'Menu de Opções'}}/>
                    <Telas.Screen name="MenuPrincipalAnon" component={MenuAnônimoDeOpções} options={{title:'Menu de Opções?'}} />
                    <Telas.Screen name="ListagemDeDenúncia" component={ListagemDeDenúncia} options={{title:'Listagem De Denúncias'}}/>
                    <Telas.Screen name="CartãoDeDenúncia" component={CartãoDeDenúncia} options={{title:"Denúncia"}}/>
                    <Telas.Screen name="TelaDeDenúncia" component={TelaDeDenuncia} options={{title:'Tela de denúncia'}}/>
                    <Telas.Screen name="ComprovantePDF" component={ComprovantePDF} options={{title:'Comprovante PDF'}} />
                </Telas.Navigator>
            </NavigationContainer>
        );
}