import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


console.disableYellowBox = true;

import Login from './src/Login';
import Home from './src/Home';
import MinhaLista from './src/MinhaLista';
import MinhaReserva from './src/MinhaReserva';
import Pesquisa from './src/Pesquisa';
import Router from './src/MinhaListaRotas';
import FeedPesquisa from './src/PesquisaFeed';
import ItemPesquisa from './src/PesquisaItem';


const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false
    }
  },
  MinhaLista: {
    screen: MinhaLista,
    navigationOptions: {
      headerShown: false
    }
  },
  MinhaReserva: {
    screen: MinhaReserva,
    navigationOptions: {
      headerShown: false
    }
  },
  Pesquisa: {
    screen: Pesquisa,
    navigationOptions: {
      headerShown: false
    }
  },
  FeedPesquisa: {
    screen: FeedPesquisa,
    navigationOptions: {
      headerShown: false
    }
  },
  ItemPesquisa: {
    screen: ItemPesquisa,
    navigationOptions: {
      headerShown: false
    }
  },

  initialRouteName: 'Login'

});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;