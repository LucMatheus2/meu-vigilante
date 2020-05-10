//Dependências
import React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Telas
import Login from './Login';
import MenuDeOpções from './menuDeOpções';
import TelaDeCadastro from './telaDeCadastro';
import TelaDeDenuncia from './telaDeDenuncia';
import TelaDeDenuncia2 from './telaDeDenuncia2';

const Telas = createStackNavigator();

export default class App extends Component{
    render(){
        return(
            <NavigationContainer>
                <Telas.Navigator>
                    <Telas.Screen name="Login" component={Login} options={{title:'Bem-vindo'}}/>
                    <Telas.Screen name="Tela de Cadastro" component={TelaDeCadastro} options={{title:'Tela De Cadastro'}}/>                       
                    <Telas.Screen name="Menu principal" component={MenuDeOpções} options={{title:'Menu de Opções'}}/>
                    <Telas.Screen name="Tela de denúncia" component={TelaDeDenuncia} options={{title:'Tela de denúncia'}}/>
                    <Telas.Screen name="Tela de denúncia 2" component={TelaDeDenuncia2} options={{title:'Tela de denúncia 2'}}/>
                </Telas.Navigator>
            </NavigationContainer>
        );
    }
}