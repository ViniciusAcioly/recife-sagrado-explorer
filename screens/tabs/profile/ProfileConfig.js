import React from 'react';
import { StyleSheet, Text, View, Image, Button, StatusBar, Alert, SafeAreaView, 
	Platform, Dimensions, Keyboard, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

// import { connect } from 'react-redux';
// import { setFavoriteAnimal, watchUserData } from './../redux/app-redux';

class ProfileConfig extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      //favoriteAnimal: this.props.favoriteAnimal,
    }
    //this.props.watchUserData();
  }

  //Ao pressionar editar perfil
  onEditProfilePress = () => {

  }

  render() {
    return (
		<View style={styles.container}>
          <View style={styles.header}>
          	<View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{uri: 'https://www.tekstowo.pl/avatar2,507764_800_600_.jpg'}}/>
                <Text style={styles.name}>Darth Vader</Text>
            </View>
          </View>       

      	</View>				
    );
  }
  
}

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

export default ProfileConfig;