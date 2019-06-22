import React from 'react';
import { StyleSheet, StatusBar, Text, View, Platform } from 'react-native';

import Colors from './constants/Colors';
import { Icon, Ionicons } from '@expo/vector-icons';
import { AppLoading, LinearGradient } from 'expo';
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'

import { createAppContainer, createSwitchNavigator, 
  createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { fromRight } from 'react-navigation-transitions';

//import Intro from './screens/Intro';
import Login from './screens/auth/Login';
import SignUp from './screens/auth/SignUp';
import ForgotPassword from './screens/auth/ForgotPassword';
import Dashboard from './screens/Dashboard';

import ApiKeys from './constants/ApiKeys'; //dados de autenticação do firebase
import * as firebase from 'firebase'; 

export default class App extends React.Component {

//Props de autenticação...
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
      isAuthenticationReady: false,
      isAuthenticated: false,
    };

    //Iniciando o Firebase...
    if (!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig); }
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  //Verifica se o usuário está autenticado ou não...
  onAuthStateChanged = (user) => {
    this.setState({isAuthenticationReady: true});
    this.setState({isAuthenticated: !!user});
  }

  render() {
    //Verificação se o usuário já está logado ou não... 
    if (!this.state.isLoadingComplete && !this.state.isAuthenticationReady && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
      	//Dependendo da verificação, ele vai ao Dashboard (autenticado) ou 
      	//recorre ao AppContainer (não-autenticado) e, deste modo, à tela de Login. 
        (this.state.isAuthenticated) ? <Dashboard /> : <AppContainer />
      );
    }
  }

    _loadResourcesAsync = async () => {
      return Promise.all([
        Asset.loadAsync([
          require('./assets/images/robot-dev.png'),
          require('./assets/images/robot-prod.png'),
        ]),
        Font.loadAsync({
          // This is the font that we are using for our tab bar
          ...Icon.Ionicons.font,
          // We include SpaceMono because we use it in HomeScreen.js. Feel free
          // to remove this if you are not using it in your app
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        }),
      ]);
    };

    _handleLoadingError = error => {
      // In this case, you might want to report the error to your error
      // reporting service, for example Sentry
      console.warn(error);
    };

    _handleFinishLoading = () => {
      this.setState({ isLoadingComplete: true });
    };

}

//------------------------------------------------------------------------- TELAS DO APP
const SwitchNavigator = createStackNavigator({
  //Intro: { screen: Intro },
  Login: { screen: Login },
  SignUp: { screen: SignUp },
  ForgotPassword: {screen: ForgotPassword },
  Dashboard: {screen: Dashboard }
},
{
  headerMode: 'none', //ocultamento do cabeçalho
  transitionConfig: () => fromRight(500), //transição de telas em 500ms
},
);

const AppContainer = createAppContainer(SwitchNavigator); //constante de navegação das telas
//------------------------------------------------------------------------- TELAS DO APP