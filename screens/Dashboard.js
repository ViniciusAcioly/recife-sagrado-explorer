import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

import { createAppContainer, createSwitchNavigator, 
  createBottomTabNavigator, createStackNavigator } from 'react-navigation';

//------------------------------------------------------------------------- ABAS FIXAS DO APP
//aba da Home, com o "Bem-vindo, @" e dicas
class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

//aba de Desafios, com os jogos
class Challenges extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

//aba de Perfil, com as informações do usuário
class Profile extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
      </View>
    );
  }
}

//abas fixas do app indicadas acima
const Abas = createBottomTabNavigator({
  Home: Home,
  Desafios: Challenges,
  Perfil: Profile,
},
  { //Customização visual das abas
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName =
              Platform.OS === 'ios'
                ? `ios-home${focused ? '' : '-outline'}`
                : 'md-home';
            break;

            case 'Desafios':
            iconName =
              Platform.OS === 'ios'
                ? `ios-podium${focused ? '' : '-outline'}`
                : 'md-podium';
            break;

            case 'Perfil':
            iconName =
              Platform.OS === 'ios'
                ? `ios-person${focused ? '' : '-outline'}`
                : 'md-person';
            break;
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={tintColor}
          />
        );
      },
    }),
    
    tabBarOptions: {
      style: {
        backgroundColor: 'black',
      },
      activeTintColor: '#f7c744',
      inactiveTintColor: 'gray',
    },

    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);

export default createAppContainer(Abas);
//------------------------------------------------------------------------- ABAS FIXAS DO APP