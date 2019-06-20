import React from 'react';
import { StyleSheet, StatusBar, Text, Button, View, Platform, Alert } from 'react-native';

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

  //Ao pressionar sair
  onSignoutPress = () => {
    firebase.auth().signOut();
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: "column", paddingVertical: 50, paddingHorizontal: 10,}}>
        <Button title="Sair" onPress={this.onSignoutPress} />
      </View>

    );
  }
  
}

const styles = StyleSheet.create({
  text: { color: "white", fontWeight: "bold", textAlign: "center", fontSize: 20, },
  textInput: { borderWidth:1, borderColor:"gray", marginVertical: 20, padding:10, height:40, alignSelf: "stretch", fontSize: 18, },
});

export default Home;