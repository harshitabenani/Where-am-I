import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image ,Button} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import ImageScreen from './image'
import SignInputs from './signup'
import LoadingScreen from './loading'
import Inputs from './login'

import {
 
  TransitionPresets,
} from '@react-navigation/stack';
import ContactScreen from './contact';



const RootStack=createStackNavigator(                  //Navigation to other screens
{
    ImageScreen:ImageScreen,
    Login:Inputs,
    SignUp:SignInputs,
    Contact:{
      screen:ContactScreen,
         navigationOptions:{

        headerShown: false

      },
   
    },

    Loading:LoadingScreen,
    

  },
  {
    initialRouteName:'ImageScreen',                  //First Screen
  },
 

  
)




const AppContainer = createAppContainer(RootStack);
 class App extends React.Component {

  render() {
    return ( <AppContainer /> )
  }
}

export default App
