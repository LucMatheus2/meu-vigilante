//Dependências
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

const Telas = createStackNavigator();

export default function App() {
        return(
            <NavigationContainer>
                <Telas.Navigator>                    
                    <Telas.Screen name="Login" component={Login} options={{title:'Bem-vindo'}}/>
                    <Telas.Screen name="TelaDeCadastro" component={TelaDeCadastro} options={{title:'Tela De Cadastro'}}/>                       
                    <Telas.Screen name="MenuPrincipal" component={MenuDeOpções} options={{title:'Menu de Opções'}}/>
                    <Telas.Screen name="ListagemDeDenúncia" component={ListagemDeDenúncia} options={{title:'Listagem De Denúncias'}}/>
                    <Telas.Screen name="CartãoDeDenúncia" component={CartãoDeDenúncia} options={{title:"Denúncia"}}/>
                    <Telas.Screen name="TelaDeDenúncia" component={TelaDeDenuncia} options={{title:'Tela de denúncia'}}/>
                </Telas.Navigator>
            </NavigationContainer>
        );
}