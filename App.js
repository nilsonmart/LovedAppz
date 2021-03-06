import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import {Ionicons} from '@expo/vector-icons'

import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import * as firebase from 'firebase'
import HomeScreen from './screens/HomeScreen'
import MessageScreen from './screens/MessageScreen'
import PostScreen from './screens/PostScreen'
import NotificationScreen from './screens/NotificationScreen'
import ProfileScreen from './screens/ProfileScreen'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA9MtSuuts_EvAE74lwYPZb8tYmC5f3iuE",
    authDomain: "loved-nmsolution.firebaseapp.com",
    databaseURL: "https://loved-nmsolution.firebaseio.com",
    projectId: "loved-nmsolution",
    storageBucket: "loved-nmsolution.appspot.com",
    messagingSenderId: "702072823790",
    appId: "1:702072823790:web:cd991feeaa94a6f621f8ff",
    measurementId: "G-BHLP587427"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions:{
        tabBarIcon:({tintColor}) => <Ionicons name="ios-home" size={24} color={tintColor}/>
      }
    },
    Message: {
      screen: MessageScreen,
      navigationOptions:{
        tabBarIcon:({tintColor}) => <Ionicons name="ios-chatboxes" size={24} color={tintColor}/>
      }
    },
    Post: {
      screen: PostScreen,
      navigationOptions:{
        tabBarIcon:({tintColor}) => (
        <Ionicons name="ios-add-circle" 
        size={48} color="#E9446A" 
        style={{
          shadowColor:"#E9446A", 
          shadowOffset:{width: 0, height: 0}, 
          shadowRadius:10, 
          shadowOpacity: 0.3}}/>)
      }
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions:{
        tabBarIcon:({tintColor}) => <Ionicons name="ios-notifications" size={24} color={tintColor}/>
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions:{
        tabBarIcon:({tintColor}) => <Ionicons name="ios-person" size={24} color={tintColor}/>
      }
    }
  },
  {
    tabBarOptions:{
      activeTintColor: "#161F3D",
      inactiveTintColor: "#B8BBC4",
      showLabel: false
    }
  }
)

  const AuthStack = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen
  })

  export default createAppContainer(
    createSwitchNavigator({
      Loading: LoadingScreen,
      App: AppTabNavigator,
      Auth: AuthStack
    },
    {
       initialRouteName:"Loading"
    }
    )
  )