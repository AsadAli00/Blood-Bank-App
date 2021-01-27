//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Keyboard, TouchableWithoutFeedback, Button, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import LoginImage from '../images/login-background/login.jpg';
import logo from '../images/logo/logo.png'

// create a component
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const SignIn = () => {
        console.log(email);
        console.log(password);
    }

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}}  keyboardShouldPersistTaps='handled'>
            <View style={styles.container} ke>
                <ImageBackground source={LoginImage} style={styles.back_image}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.image} source={logo} />
                        <Text style={styles.LogoText}>BLOOD BANK</Text>
                    </View>
                    <View style={styles.loginContainer}>
                        <TextInput style={styles.textInput} value={email} onChangeText={text => setEmail(text)}
                            maxLength={40} placeholder="Email" autoCapitalize="none" autoCorrect={false} placeholderTextColor="#F0F0F0" />
                        <TextInput value={password} placeholderTextColor="#F0F0F0" placeholder="Password" style={styles.textInput} secureTextEntry={true}
                            maxLength={40} onChangeText={text => setPassword(text)} />
                        <View style={{ flex: 0.1, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.button} onPress={SignIn} >
                                <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold' }}>SIGN IN</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} >
                                <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold' }}>SIGN UP</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                </ImageBackground>
            </View >
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        fontFamily: 'sans-serif',
    },
    back_image: {
        flex: 1,
        resizeMode: "cover",
    },
    text: {
        color: "#000000"
    },
    logoContainer: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex: 0.5,
        alignItems: 'center',
        width: 200,
        height: 80,
        resizeMode: 'stretch'
    },
    LogoText: {
        color: 'red',
        // fontFamily: 'monospace',
        fontSize: 40,
        fontWeight: 'bold',
        paddingTop: 30,
    },
    loginContainer: {
        flex: 0.5,
        alignItems: 'center',
        fontSize: 15,
        fontWeight: '200',
    },
    textInput: {
        borderRadius: 5,
        borderColor: '#ffff',
        height: 50,
        width: 250,
        fontSize: 17,
        margin: 10,
        fontWeight: '200',
        borderColor: 'red',
        paddingLeft: 10,
        borderWidth: 2,
        color: '#F0F0F0',
    },
    button: {
        backgroundColor: '#F0F0F0',
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: 10,
        margin: 10,
    }
});

//make this component available to the app
export default Login;
