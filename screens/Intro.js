import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, ImageBackground, Button, StatusBar, Alert, SafeAreaView,
  TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, TouchableOpacity, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppLoading, Asset, Font, Icon, LinearGradient } from 'expo';
import AppIntroSlider from 'react-native-app-intro-slider'; //slide de introdução
import { NavigationActions, StackActions } from 'react-navigation';

//Screen que gera o slide inicial pré-login
export default class Intro extends React.Component {

  onLoginPress = () => {
		 //Ir para a tela de Login
    this.props.navigation.navigate("Login");
	}

  onSignUpPress = () => {
     //Ir para a tela de SignUp
    this.props.navigation.navigate("SignUp");
  }



  render() {
    //IntroSlider...
    return (
      <AppIntroSlider slides={slides} />
      
    );
	}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: 320,
    height: 320,
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonReg: {
    height: 45,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  signupbutton: {
    height: 40,
    fontSize: 12,
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
    marginHorizontal: 45,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  text: {
    color: 'black',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    color: 'black',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  },
  bottomButton: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .3)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  }
});

//slides iniciais pré-login
const slides = [
  {
    key: 'intro1',
    title: 'O projeto',
    titleStyle: styles.title,
    text: 'Desvende os segredos.\nConheça a história por trás dos templos.',
    textStyle: styles.text,
    image: require('../assets/images/1.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#febe29',
  },
  {
    key: 'intro2',
    title: 'O jogo',
    titleStyle: styles.title,
    text: 'Resolva charadas. Complete desafios. \nAcompanhe o guia para não perder pistas.',
    textStyle: styles.text,
    image: require('../assets/images/2.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#59b2ab',
  },
  {
    key: 'intro3',
    title: 'Recompensas',
    titleStyle: styles.title,
    text: 'Acumule pontos com seu aprendizado. \nSeus pontos podem ser trocados por recompensas!',
    textStyle: styles.text,
    image: require('../assets/images/3.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#df7401',
  }
];