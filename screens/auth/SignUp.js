import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, ImageBackground, Button, StatusBar, Alert, SafeAreaView,
	TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, TouchableOpacity, BackHandler,  } from 'react-native';
import { HomeComponent, EmailTextInput, PasswordTextInput, } from '../../components';
import { NavigationActions, StackActions } from 'react-navigation';
import * as firebase from 'firebase';

export default class SignUp extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			password: "",
			passwordConfirm: "",
		};
	}

	onSignUpPress = () => {
		if (this.state.password != this.state.passwordConfirm) {
			Alert.alert("Opa! As senhas inseridas não combinam!");
			return;
		}
		else if (this.state.password.length < 6) {
		    alert("A senha deve conter ao menos 6 dígitos.")
		    return;
		}

		firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
			.then(() => { this.props.navigation.navigate('Login'); }, (error) =>{Alert.alert(error.message); });
	}


	render() {
		return (
			<SafeAreaView style = {styles.container}>

				<StatusBar barStyle="light-content" />
				<KeyboardAvoidingView behavior="padding" style={styles.container}> 
					<TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
						<View style = {styles.container}>

							<Text style={styles.title}>CRIAR CONTA</Text>
							
							<TextInput style={styles.input}
								value={this.state.name}
								onChangeText={(text) => { this.setState({name: text}) }}
								placeholder="Nome"
								placeholderTextColor="rgba(255, 255, 255, 0.8)"
								blurOnSubmit={ false }
								returnKeyType={ "next" }
							/>

							<EmailTextInput style={styles.input}
								value={this.state.email}
								onChangeText={(text) => { this.setState({email: text}) }}
								placeholder="E-mail"
								placeholderTextColor="rgba(255, 255, 255, 0.8)"
								blurOnSubmit={ false }
								returnKeyType={ "next" }
							/>

							<PasswordTextInput style={styles.input}
								value={this.state.password}
								onChangeText={(text) => { this.setState({password: text}) }}
								placeholder="Senha"
								placeholderTextColor="rgba(255, 255, 255, 0.8)"
								blurOnSubmit={ false }
								returnKeyType={ "next" }
							/>

							<PasswordTextInput style={styles.input}
								value={this.state.passwordConfirm}
								onChangeText={(text) => { this.setState({passwordConfirm: text}) }}
								placeholder="Confirmar senha"
								placeholderTextColor="rgba(255, 255, 255, 0.8)"
								blurOnSubmit={ false }
								returnKeyType={ "done" }
							/>

							<TouchableOpacity style={styles.buttonContainer} onPress={this.onSignUpPress}>
								<Text style={styles.buttonText}>REGISTRAR-SE</Text>
							</TouchableOpacity>

						</View>
					</TouchableWithoutFeedback>
				</KeyboardAvoidingView>							

			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'rgb(32, 53, 70)',
		flexDirection: 'column',
	},
	title: {
		fontWeight: 'bold',
		fontSize: 24,
		alignItems: 'center',
		textAlign: 'center',
		color: '#fff',
	},
	text: {
		fontWeight: 'bold',
		fontSize: 18,
	},
	infoContainer: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 60,
		backgroundColor: 'rgba(52, 52, 52, 0.8)',
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
	secundarybutton: {
		height: 40,
		alignItems: 'center',
		textAlign: 'center',
		color: '#fff',
		marginHorizontal: 45,
		marginVertical: 10,
		paddingHorizontal: 10,
	},

});