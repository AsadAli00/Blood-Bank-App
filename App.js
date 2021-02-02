/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Navigation from './src/config/Navigation/Navigation';
import auth from './src/config/context/authContext'


const App = () => {
  return (
    <auth.Provider>
      <Navigation></Navigation>
    </auth.Provider>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'red'

  },
  container1: {
    flex: 0.5,
    flexDirection: 'row',
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center'
  }

});

export default App;
