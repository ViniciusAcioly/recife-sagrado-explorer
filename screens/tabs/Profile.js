import React from 'react';
import { StyleSheet, Text, View, Image, Button, StatusBar, Alert, SafeAreaView, 
	Platform, Dimensions, Keyboard, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Icon, Ionicons } from '@expo/vector-icons';

import ApiKeys from '../../constants/ApiKeys'; //dados de autenticação do firebase
import * as firebase from 'firebase';

import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import ProfileEdit from './profile/ProfileEdit'; //editar perfil
import ProfileConfig from './profile/ProfileConfig'; //configurações do app
import { createAppContainer, createStackNavigator, NavigationActions, StackActions } from 'react-navigation';

// import { connect } from 'react-redux';
// import { setFavoriteAnimal, watchUserData } from './../redux/app-redux';

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      //favoriteAnimal: this.props.favoriteAnimal,
    }
    //this.props.watchUserData();
  }

	_menu = null;

	setMenuRef = ref => {
	  this._menu = ref;
	};

	hideMenu = () => {
	  this._menu.hide();
	};

	showMenu = () => {
	  this._menu.show();
	};

  //Ao pressionar editar perfil
  onEditProfilePress = () => {
  	this.props.navigation.navigate("ProfileEdit");
  }

  //Ao pressionar configurações
  onConfigProfilePress = () => {
  	this.props.navigation.navigate("ProfileConfig");
  }

  //Ao pressionar sair
  onSignoutPress = () => {
    firebase.auth().signOut();
  }

  render() {
    return (
		<View style={styles.container}>
          <View style={styles.header}>
          	<View style={styles.headerContent}>

          		<TouchableOpacity style={styles.menuIcon} onPress={this.showMenu}>
          		<Menu
  		          ref={this.setMenuRef}
  		          button={<Ionicons size= {32} name= "md-menu" />}
  		          >
  		          <MenuItem onPress={this.onEditProfilePress}>Editar Perfil</MenuItem>
  		          <MenuItem onPress={this.onConfigProfilePress}>Configurações</MenuItem>
  		          <MenuDivider />
  		          <MenuItem onPress={this.onSignoutPress}>Sair</MenuItem>
  		        </Menu>
  		        </TouchableOpacity>

                <Image style={styles.avatar}
                  source={{uri: 'https://www.tekstowo.pl/avatar2,507764_800_600_.jpg'}}/>

                <Text style={styles.name}>Darth Vader</Text>
                <Text style={styles.userInfo}>vader@skywalker.com </Text>
                <Text style={styles.userInfo}>Death Star</Text>
            </View>
          </View>       

          	<View style={styles.bodyContent}></View>
	            
      	</View>				
    );
  }
  
}

//------------------------------------------------------------------------- TELAS DO APP
// const ProfileNavigator = createStackNavigator({
//   Editar: { screen: ProfileEdit },
//   Configurações: { screen: ProfileConfig },
// },
// {
//   headerMode: 'none', //ocultamento do cabeçalho
//   transitionConfig: () => fromRight(500), //transição de telas em 500ms
// },
// );

// const AppContainer = createAppContainer(ProfileNavigator); //constante de navegação das telas
//------------------------------------------------------------------------- TELAS DO APP

const styles = StyleSheet.create({
	/*container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'rgb(32, 53, 70)',
		flexDirection: 'column',
	},*/
	header:{
	    backgroundColor: "#f7c744",
	},
	headerContent:{
    	paddingTop:30,
    	paddingBottom: 15,
    	alignItems: 'center',
  	},
  	menuIcon: {
		zIndex: 9,
		position: 'absolute',
		top: 40,
		right: 20,
		color: "#000000",
	},
	menuText: {
		position: 'absolute',
		top: 40,
		right: 20,
	},
	avatar: {
	    width: 130,
	    height: 130,
	    borderRadius: 63,
	    borderWidth: 4,
	    borderColor: "white",
	    marginBottom:10,
	},
	name:{
	    fontSize:22,
	    color:"#000000",
	    fontWeight:'600',
	},
	userInfo:{
	    fontSize:16,
	    color: "#203546",
	    alignSelf:'center',
	    marginTop:5
	},
	bodyContent: {
	    backgroundColor: "#203546",
    	height:500,
    	alignItems:'center',
	},
	item:{
	    flexDirection : 'row',
	},
	infoContent:{
	    flex:1,
	    alignItems:'flex-start',
	    paddingLeft:5
	},
	iconContent:{
	    flex:1,
	    alignItems:'flex-end',
	    paddingRight:5,
	},
	icon:{
	    width:30,
	    height:30,
	    marginTop:20,
	},
	  info:{
	    fontSize:18,
	    marginTop:20,
	    color: "#FFFFFF",
	}

});

export default Profile;