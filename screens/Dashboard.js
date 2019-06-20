import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

import { createAppContainer, createSwitchNavigator, 
  createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import Home from '../screens/tabs/Home';
import Challenges from '../screens/tabs/Challenges';
import Profile from '../screens/tabs/Profile';

//------------------------------------------------------------------------- ABAS FIXAS DO APP
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