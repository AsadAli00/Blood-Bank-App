//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import LoginScreen from '../../screens/login';
import SignUp from '../../screens/SignUp'
import Home from '../../screens/Home'

// create a component
const Navigation = () => {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: true 
            }}>
                <Stack.Screen name="Home" component={Home} options={{title: false, headerShown: false}} />
                <Stack.Screen name="Login" component={LoginScreen} options={{title:false, headerShown: false}} />
                <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: true,headerTitleAlign: 'center',headerStyle: {
                    backgroundColor: 'red',
                }, headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

// define your styles

//make this component available to the app
export default Navigation;
