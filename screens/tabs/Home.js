import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, ImageBackground, Button, StatusBar, Alert, SafeAreaView,
	TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, TouchableOpacity, } from 'react-native';

import ApiKeys from '../../constants/ApiKeys'; //dados de autenticação do firebase
import * as firebase from 'firebase';

// import { connect } from 'react-redux';
// import { setFavoriteAnimal, watchUserData } from './../redux/app-redux';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      //favoriteAnimal: this.props.favoriteAnimal,
    }
    //this.props.watchUserData();
  }

  //Ver desafios
  onNewGamePress = () => {

  }

  //Ver mapa
  onExtrasPress = () => {
    
  }

  render() {
    return (
    	<SafeAreaView style = {styles.container}>
			<StatusBar barStyle="light-content" />
				<TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
					<View style = {styles.container}>
						<View style = {styles.logoContainer}>
							<Image style = {styles.logo}
								source={require('../../assets/images/logo.png')}>
							</Image>
						</View>

						<TouchableOpacity style={styles.buttonContainer} onPress={this.onNewGamePress}>
							<Text style={styles.buttonText}>JOGAR</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.buttonContainer} onPress={this.onExtrasPress}>
							<Text style={styles.buttonText}>EXTRAS</Text>
						</TouchableOpacity>
					</View>
				</TouchableWithoutFeedback>				
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
	logoContainer: {
		alignItems: 'center',
		marginVertical: 10,
	},
	logo: {
		width: 80,
		height: 80,
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
		borderRadius: 10,
	},
	inputGroup: {
		bottom: 50,
	},
	buttonContainer: {
		height: 40,
		backgroundColor: '#f7c744',
		marginHorizontal: 45,
		marginVertical: 10,
		borderRadius: 10,
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

});

export default Home;