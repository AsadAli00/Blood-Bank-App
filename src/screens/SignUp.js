import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Keyboard, TouchableWithoutFeedback, Button, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import LoginImage from '../images/login-background/login.jpg';
import {Toast} from 'native-base'
import logo from '../images/logo/logo.png';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';


const SignUp = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [mobile, setMobile] = useState('');
    const [showToast,setShowToast] = useState(false)


    const SignUp = () => {
        if (!fullName.trim()) {
            Alert.alert(
                'Missing',
                'Enter your Name',
                [
                    {
                        text: 'Ok',
                        onPress: () => console.log("name"),
                        style: 'cancel'
                    }
                ],
                { cancelable: false }
            );
        }
        //Check for the Email TextInput
        else if (!email.trim()) {
            Alert.alert(
                'Missing',
                'Enter Your Email',
                [
                    {
                        text: 'Ok',
                        onPress: () => console.log("ok"),
                        style: 'cancel'
                    }
                ],
                { cancelable: false }
            );
        }
        else if (!password.trim()) {
            Alert.alert(
                'Missing',
                'Enter your Password',
                [
                    {
                        text: 'Ok',
                        onPress: () => console.log("ok"),
                        style: 'cancel'
                    }
                ],
                { cancelable: false }
            );
        }

        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                Alert.alert(
                    'Done',
                    'Successfully SignUp',
                    [
                        {
                            text: 'Ok',
                            onPress: () => navigation.goBack(),
                            style: 'cancel'
                        }
                    ],
                    { cancelable: false }
                );
                const userData = {
                    email: email,
                    password: password,
                    fullName: fullName,
                    mobile: mobile,
                }
                database().ref('/').child('emailUsers').push(userData);
                
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    Alert.alert(
                        'Error',
                        'That email address is already in use!',
                        [
                            {
                                text: 'Ok',
                                onPress: () => console.log("SignUp Error"),
                                style: 'cancel'
                            }
                        ],
                        { cancelable: false }
                    );
                }


                else if (error.code === 'auth/invalid-email') {
                    Alert.alert(
                        'Error',
                        'That email address is invalid!',
                        [
                            {
                                text: 'Ok',
                                onPress: () => console.log("SignUp Error"),
                                style: 'cancel'
                            }
                        ],
                        { cancelable: false }
                    );
                }
                else {
                    console.log(error)
                }


            });

            
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
            <View style={styles.container}>
                {/* <ImageBackground source={LoginImage} style={styles.back_image}> */}
                <View style={styles.logoContainer}>
                    {/* <Image style={styles.image} source={logo} /> */}
                    <Text style={styles.LogoText}>Create Your Account</Text>
                </View>
                <View style={styles.signUpContainer}>
                    <View style={{ flex: 0.2, flexDirection: 'column' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red', paddingLeft: 20 }}>Full Name*</Text>
                        <TextInput style={styles.textInput} value={fullName} onChangeText={text => setFullName(text)}
                            maxLength={20} placeholder="Enter Full Name" autoCapitalize="none" autoCorrect={false} placeholderTextColor="grey" />
                    </View>
                    <View style={{ flex: 0.2, flexDirection: 'column' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red', paddingLeft: 20 }}>Mobile Number</Text>
                        <TextInput value={mobile} placeholderTextColor="grey" keyboardType='numeric' placeholder="Enter Mobile Number" style={styles.textInput}
                            maxLength={11} onChangeText={text => setMobile(text)} />
                    </View>
                    <View style={{ flex: 0.2, flexDirection: 'column' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red', paddingLeft: 20 }}>Email*</Text>
                        <TextInput style={styles.textInput} value={email} onChangeText={text => setEmail(text)}
                            maxLength={40} placeholder="Enter your Email" autoCapitalize="none" autoCorrect={false} placeholderTextColor="grey" />
                    </View>
                    <View style={{ flex: 0.2, flexDirection: 'column' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red', paddingLeft: 20 }}>Password*</Text>
                        <TextInput value={password} placeholderTextColor="grey" placeholder=" Enter new Password" style={styles.textInput} secureTextEntry={true}
                            maxLength={40} onChangeText={text => setPassword(text)} />
                    </View>
                    <View style={{ flex: 0.1, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.button} onPress={SignUp}>
                            <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold' }}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <View>
                            <GoogleSigninButton style={{ height: 60, width: 240 }}
                                size={GoogleSigninButton.Size.Wide} onPress={googleSignIn} />
                        </View> */}
                </View>


                {/* </ImageBackground> */}
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
        backgroundColor: '#F0F0F0'
    },
    text: {
        color: "#000000"
    },
    logoContainer: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    LogoText: {
        color: 'red',
        // fontFamily: 'monospace',
        fontSize: 40,
        fontWeight: 'bold',
        paddingTop: 30,
    },
    signUpContainer: {
        flex: 0.8,
        alignItems: 'center',
        fontSize: 15,
        fontWeight: '200',
    },
    textInput: {
        borderRadius: 5,
        borderColor: 'red',
        height: 50,
        width: 250,
        fontSize: 17,
        margin: 10,
        fontWeight: '400',
        borderColor: 'red',
        paddingLeft: 10,
        borderWidth: 2,
        color: 'red',
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
export default SignUp;