import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, ImageBackground, Button, StatusBar, Alert, SafeAreaView,
	TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, TouchableOpacity,  } from 'react-native';
import { HomeComponent, EmailTextInput, PasswordTextInput, PhoneButton } from '../../components';
import { NavigationActions, StackActions } from 'react-navigation';
import * as firebase from 'firebase';

export default class ForgotPassword extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			email: "",
		};
	}

	onResetPasswordPress = () => {
        firebase.auth().sendPasswordResetEmail(this.state.email)
            .then(() => {
                Alert.alert("Feito! Verifique seu e-mail.");
            }, (error) => {
                Alert.alert(error.message);
            });
    }

    onBackToLoginPress = () => {
		//Retornar para a tela de Login
		this.props.navigation.navigate("Login");
	}


	render() {
		return (
			<SafeAreaView style = {styles.container}>

				<StatusBar barStyle="light-content" />
				<KeyboardAvoidingView behavior="padding" style={styles.container}> 
					<TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
						<View style = {styles.container}>

							<Text style={styles.title}>ESQUECEU SUA SENHA?</Text>
							<Text style={styles.text}>Digite seu e-mail:</Text>
							
							<EmailTextInput style={styles.input}
								value={this.state.email}
								onChangeText={(text) => { this.setState({email: text}) }}
								placeholder="E-mail"
								placeholderTextColor="rgba(255, 255, 255, 0.8)"
								onSubmitEditing={(event) => {this.refs.password.focus(); }} 
							/>

							<TouchableOpacity style={styles.buttonContainer} onPress={this.onResetPasswordPress}>
								<Text style={styles.buttonText}>ENVIAR</Text>
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
		fontSize: 16,
		alignItems: 'center',
		textAlign: 'center',
		color: '#fff',
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
	buttonContainer: {
		height: 40,
		backgroundColor: '#f7c744',
		marginHorizontal: 65,
		marginVertical: 5,
		borderRadius: 30,
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