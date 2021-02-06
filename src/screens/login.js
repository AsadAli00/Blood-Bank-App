//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Keyboard, TouchableWithoutFeedback, Button, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import LoginImage from '../images/login-background/login.jpg';
import logo from '../images/logo/logo.png';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth'
import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-community/google-signin';
// import { LoginManager, AccessToken, LoginButton } from 'react-native-fbsdk';
import { useSelector, useDispatch } from 'react-redux'
import { auth_Data } from '../config/store/action/index'


// create a component
const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [loggedIn, setloggedIn] = useState(false);
    // const [userInfo, setuserInfo] = useState([]);

    const dispatch = useDispatch()
    const authData = data => dispatch(auth_Data(data))



    useEffect(() => {
        GoogleSignin.configure({
            scopes: ['email', 'profile'], // what API you want to access on behalf of the user, default is email and profile
            webClientId:
                '452543779948-ptdt0deuicsqi3ui30svjo1l866lm1bg.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        });


    }, []);


    const SignIn = () => {
        const user = {
            email: email,
            password: password,
        }
        if (!email.trim()) {
            Alert.alert(
                'Missing',
                'Enter your Email',
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
        else if (!password.trim()) {
            Alert.alert(
                'Missing',
                'Enter Your pasword',
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
            .signInWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                if (!email.trim()) {
                    Alert.alert(
                        'Missing',
                        'Enter your Email',
                        [
                            {
                                text: 'Ok',
                                onPress: () => console.log("Email"),
                                style: 'cancel'
                            }
                        ],
                        { cancelable: false }
                    );
                }
                //Check for the Email TextInput
                else if (!password.trim()) {
                    Alert.alert(
                        'Missing',
                        'Enter Your password',
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
                // store.dispatch({
                //     type: 'CurrentUser',
                //     val: user,
                //   })
                Alert.alert(
                    'Done',
                    'Successfully Login',
                    [
                        {
                            text: 'Ok',
                            onPress: () => navigation.navigate("MainScreen"),
                            style: 'cancel'
                        }
                    ],
                    { cancelable: false }
                );

                authData(user)
                console.log(user);

                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                if (error) {
                    Alert.alert(
                        'Error',
                        errorMessage,
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

            });
    }
    const googleSignIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
            // Sign-in the user with the credential
            console.log(userInfo);
            //     let idTokens = {};
            //    database().ref('/').child('googleUsers').on('child_added',(data)=>{
            //         const userData = data.val()
            //         idTokens =userData.idToken
            //         console.log(idTokens);
            //     });

            // console.log(idTokens);


            auth().signInWithCredential(googleCredential);
            authData(userInfo)


            // console.log(userInfo.user);
            setTimeout(() => {
                navigation.navigate('MainScreen')
            }, 1000)


        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                    Alert.alert(
                        'Error',
                        error,
                        [
                            {
                                text: 'Ok',
                                onPress: () => console.log("Google Error"),
                                style: 'cancel'
                            }
                        ],
                        { cancelable: false }
                    );
            } else if (error.code === statusCodes.IN_PROGRESS) {
                Alert.alert(
                    'Error',
                    error,
                    [
                        {
                            text: 'Ok',
                            onPress: () => console.log("Google Error"),
                            style: 'cancel'
                        }
                    ],
                    { cancelable: false }
                );
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                Alert.alert(
                    'Error',
                    error,
                    [
                        {
                            text: 'Ok',
                            onPress: () => console.log("Google Error"),
                            style: 'cancel'
                        }
                    ],
                    { cancelable: false }
                );
            }
        }
    };


    // const FacbookLogin = async () => {
    //     // Attempt login with permissions
    //     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

    //     if (result.isCancelled) {
    //         throw 'User cancelled the login process';
    //     }

    //     // Once signed in, get the users AccesToken
    //     const data = await AccessToken.getCurrentAccessToken();

    //     if (!data) {
    //         throw 'Something went wrong obtaining access token';
    //     }

    //     // Create a Firebase credential with the AccessToken
    //     const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

    //     // Sign-in the user with the credential
    //     return auth().signInWithCredential(facebookCredential);
    // }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
            <View style={styles.container} ke>
                <ImageBackground source={LoginImage} style={styles.back_image}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.image} source={logo} />
                        <Text style={styles.LogoText}>BLOOD BANK</Text>
                    </View>
                    <View style={styles.loginContainer}>
                        <View style={{ flex: 0.2, flexDirection: 'column' }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red', paddingLeft: 20 }}>Email</Text>
                            <TextInput style={styles.textInput} value={email} keyboardType="email-address" onChangeText={text => setEmail(text)}
                                maxLength={40} placeholder="Email" autoCapitalize="none" autoCorrect={false} placeholderTextColor="grey" />
                        </View>
                        <View style={{ flex: 0.22, flexDirection: 'column' }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red', paddingLeft: 20 }}>Password</Text>
                            <TextInput value={password} placeholderTextColor="grey" placeholder="Password" style={styles.textInput} secureTextEntry={true}
                                maxLength={40} onChangeText={text => setPassword(text)} />
                        </View>
                        <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <TouchableOpacity style={styles.button} onPress={SignIn} >
                                <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold' }}>SIGN IN</Text>
                            </TouchableOpacity>
                            <View style={{ flex: 0.1, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#ffff' }}>New User ?</Text>
                                <TouchableOpacity style={styles.buttonText} onPress={() => navigation.navigate('SignUp')}>
                                    <Text style={{ color: '#ffff', fontSize: 20, fontWeight: 'bold', textDecorationStyle: 'solid', textDecorationLine: 'underline' }}>Register</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <GoogleSigninButton style={{ height: 60, width: 240 }}
                                size={GoogleSigninButton.Size.Wide} onPress={googleSignIn} />
                        </View>
                        <View style={{ width: 230 }}>
                            {/* <Button
                                onPress={FacbookLogin}
                                title="Continue with fb"
                                color="#4267B2" ></Button> */}

                            {/* <LoginButton
                                onLoginFinished={
                                    (error, result) => {
                                        if (error) {
                                            console.log("login has error: " + result.error);
                                        } else if (result.isCancelled) {
                                            console.log("login is cancelled.");
                                        } else {
                                            AccessToken.getCurrentAccessToken().then(
                                                (data) => {
                                                    console.log(data.accessToken.toString())
                                                }
                                            )
                                        }
                                    }
                                }
                                onLogoutFinished={() => console.log("logout.")} /> */}
                        </View>

                    </View>


                </ImageBackground>
            </View >
        </ScrollView >
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
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    image: {
        flex: 0.5,
        alignItems: 'center',
        width: 150,
        height: 70,
        resizeMode: 'stretch'
    },
    LogoText: {
        color: 'red',
        // fontFamily: 'monospace',
        fontSize: 40,
        fontWeight: 'bold',
        paddingTop: 20,
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
        margin: 5,
        fontWeight: '200',
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
        margin: 5,
    },
    buttonText: {
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    facebookButton: {
        height: 50,
        width: 230,
    },
    spinner: {
        position: 'absolute',
        top: '50%',
        left: '50%',
    }
});


//make this component available to the app
export default Login;
