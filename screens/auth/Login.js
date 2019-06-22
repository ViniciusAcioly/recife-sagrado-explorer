import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, ImageBackground, Button, StatusBar, Alert, SafeAreaView,
	TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, TouchableOpacity, } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { HomeComponent, EmailTextInput, PasswordTextInput } from '../../components';

import * as firebase from 'firebase';
import * as Facebook from 'expo-facebook';
import Expo from 'expo';

export default class Login extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}

	onLoginPress = () => {  //Verificação do e-mail / realização do login
		firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => { }, (error) => { Alert.alert(error.message); });

	}

	onCreateAccountPress = () => {
		//Ir para a tela de Registro
		this.props.navigation.navigate("SignUp");
	}

	onForgotPasswordPress = () => {
		//Ir para a tela de Esqueci a Senha
		this.props.navigation.navigate("ForgotPassword");
	}

	 componentDidMount() {

	     firebase.auth().onAuthStateChanged((user) => {
	       if (user != null) {
	         console.log(user)
	       }
	     })
	  }

	async logInWithFacebook() {
	  try {
	    const {
	      type,
	      token,
	      expires,
	      permissions,
	      declinedPermissions,
	    } = await Facebook.logInWithReadPermissionsAsync('2289213724503080', {
	      permissions: ['public_profile', 'email'],
	    });
	    if (type === 'success') {
	      const credential = firebase.auth.FacebookAuthProvider.credential(token)
	      firebase.auth().signInWithCredential(credential).catch((error) => {
	        console.log(error)
	      })
	      
	      // Get the user's name using Facebook's Graph API
	      //const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
	      //Alert.alert('Logado!', `Olá, ${(await response.json()).name}!`);
	    } else {
	      // type === 'cancel'
	    }
	  } catch ({ message }) {
	    alert(`Facebook Login Error: ${message}`);
	  }
	}

	render() {
		return (
			<SafeAreaView style = {styles.container}>
			<ImageBackground 
			source={require('../../assets/images/background1small.jpg')}
			style={styles.backgroundImage}>

				<StatusBar barStyle="light-content" />
				<KeyboardAvoidingView behavior="padding" style={styles.container}> 

					<TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
						<View style = {styles.container}>
							<View style = {styles.logoContainer}>
								<Image style = {styles.logo}
									source={require('../../assets/images/logo.png')}>
								</Image>
							</View>
							<TouchableOpacity style={styles.fbbuttonContainer} onPress={this.logInWithFacebook}>
								<Text style={styles.signupbutton}>ENTRAR COM FACEBOOK</Text>
							</TouchableOpacity>

							<Text style={styles.text}> ──────  OU  ────── </Text>
							
							<EmailTextInput style={styles.input}
								value={this.state.email}
								onChangeText={(text) => { this.setState({email: text}) }}
								placeholder="E-mail"
								placeholderTextColor="rgba(255, 255, 255, 0.8)"
								blurOnSubmit={ false }
								returnKeyLabel={ "next" }
							/>
							<PasswordTextInput style={styles.input}
								value={this.state.password}
								onChangeText={(text) => { this.setState({password: text}) }}
								placeholder="Senha"
								placeholderTextColor="rgba(255, 255, 255, 0.8)"
								blurOnSubmit={ true }
          						returnKeyLabel={ "done" }
							/>
							<TouchableOpacity style={styles.buttonContainer} onPress={this.onLoginPress}>
								<Text style={styles.buttonText}>ENTRAR</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={this.onForgotPasswordPress}>	
								<Text style={styles.forgotpasswordbutton}>
								Esqueceu a senha? Obtenha ajuda.</Text>
							</TouchableOpacity>	
							

						</View>
					</TouchableWithoutFeedback>
				</KeyboardAvoidingView>

				<TouchableOpacity style={styles.buttonReg} onPress={this.onCreateAccountPress}>
					<Text style={styles.signupbutton}>REGISTRAR</Text>
				</TouchableOpacity>				
			
			</ImageBackground>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		//backgroundColor: 'rgb(32, 53, 70)',
		flexDirection: 'column',
	},
	logoContainer: {
		alignItems: 'center',
		marginVertical: 10,
	},
	logo: {
		width: 160,
		height: 160,
	},
	backgroundImage: {
	    flex: 1,
	    width: '100%',
	    height: '100%',
    // flexDirection: 'column',
    // backgroundColor:'transparent',
    // justifyContent: 'flex-start',
	},
	text: {
		fontWeight: 'bold',
		fontSize: 18,
		alignItems: 'center',
		textAlign: 'center',
		color: '#fff',
		bottom: 10,
	},
	input: {
		height: 40,
		alignItems: 'center',
		backgroundColor: 'rgba(255, 255, 255, 0.2)',
		color: '#fff',
		marginHorizontal: 45,
		marginVertical: 10,
		paddingHorizontal: 10,
		borderRadius: 5,
	},
	inputGroup: {
		bottom: 50,
	},
	buttonContainer: {
		height: 40,
		backgroundColor: '#f7c744',
		marginHorizontal: 65,
		marginVertical: 5,
		borderRadius: 30,
	},
	buttonReg: {
		height: 45,
		backgroundColor: 'rgba(255, 255, 255, 0.1)',
	},
	buttonText: {
		fontWeight: 'bold',
		textAlign: 'center',
		alignItems: 'center',
		marginVertical: 10,
	},
	forgotpasswordbutton: {
		height: 40,
		fontSize: 12,
		alignItems: 'center',
		textAlign: 'center',
		color: '#fff',
		marginHorizontal: 45,
		marginVertical: 5,
		paddingHorizontal: 10,
	},
	fbbuttonContainer: {
		height: 40,
		backgroundColor: '#4267b2',
		marginHorizontal: 45,
		marginVertical: 10,
		bottom: 10,
		borderRadius: 30,
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

});