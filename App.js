import React from 'react';
import { createStackNavigator, createNavigationContainer } from 'react-navigation';

import Home from './src/screen/Home';
import Counter from './src/screen/Counter';
import NativeBase from './src/screen/NativeBase';
import Form from './src/screen/Form';

const App = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'HOME',
      color: 'green'
    }
  },

  Counter: {
    screen: Counter,
    navigationOptions: {
      title: 'UP/DOWN COUNTER',
      color: 'green'
    }
  },

  NativeBase: {
    screen: NativeBase,
    navigationOptions: {
      title: 'JENDELA BARU',
      color: 'green'
    }
  },

  Form:{
    screen: Form,
    navigationOptions:{
      title:'FORM',
      color:'green'
    }
  }

});

export default createNavigationContainer(App);


