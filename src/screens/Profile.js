//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import { Container, Header, Body, Card, CardItem, Spinner, Footer, FooterTab, Right, Button, Thumbnail } from 'native-base';
import logo from '../images/logo/logo.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth'
import { useSelector, useDispatch } from 'react-redux';


// create a component
const Profile = ({ navigation }) => {

    const [userData, setUserData] = useState()
    const [loading, setloading] = useState(false);
    const currentUserData = useSelector(state => state.auth.authData)


    useEffect(() => {
        setUserData(currentUserData.user)
        setloading(true)
    }, [])


    console.log(userData);


    const SignOut = () => {
        auth()
            .signOut()
            .then(() => {
                setTimeout(() => {
                    Alert.alert(
                        'Done',
                        'Successfully Sign Out',
                        [
                            {
                                text: 'Ok',
                                onPress: () => navigation.navigate("Start"),
                                style: 'cancel'
                            }
                        ],
                        { cancelable: false }
                    );
                }, 1000);


            })
            .catch((error) => {
                Alert.alert(
                    'Error',
                    error,
                    [
                        {
                            text: 'Ok',
                            onPress: () => navigation.navigate("Start"),
                            style: 'cancel'
                        }
                    ],
                    { cancelable: false }
                );
            }, 1000);
    }
    return (
        <Container>
            <Header style={styles.header} androidStatusBarColor='grey'>

                <Body style={styles.body}>
                    <Image style={styles.image} source={logo} />
                    <Text style={styles.LogoText}>Profile</Text>
                </Body>
                <Right>
                    <Button style={styles.SignOutBtn} onPress={SignOut}>
                        <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: 'bold' }}>Signout</Text>
                    </Button>
                </Right>
            </Header>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
                {!loading ? <Spinner color="red" style={{ justifyContent: 'center', alignItems: 'center' }} /> : <View style={styles.container}>
                    <View style={{ flex: 0.1 }}>
                        <View style={{flex:1, flexDirection: 'row'}}>
                            <Text style={styles.item}>Profile picture</Text>
                            <Thumbnail source={{ uri: userData.photo }} />
                        </View>
                        <Text style={styles.item}>Name : <Text style={styles.item1}>{userData.name}</Text></Text>
                        <Text style={styles.item}>Email: <Text style={styles.item1}>{userData.email}</Text></Text>
                        <Text style={styles.item}>id No: <Text style={styles.item1}>{userData.id}</Text></Text>

                    </View>

                </View>}


            </ScrollView>
            <Footer style={styles.footer}>
                <FooterTab style={styles.footer}>
                    <Button vertical style={styles.footerBtn} onPress={() => navigation.navigate("MainScreen")}>
                        <Icon name="home" size={19} style={{ color: 'white' }} />
                        <Text style={{ color: 'white' }}>Home</Text>
                    </Button>
                    <Button vertical style={styles.footerBtn} onPress={() => navigation.navigate("requested")}>
                        <Icon name="check-circle" size={19} style={{ color: 'white' }} />
                        <Text style={{ color: 'white' }}>Requested</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </ Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0',
        alignItems: 'center',
        justifyContent: 'center'

    },
    cardConatiner: {
        flex: 1,
        width: "95%",
        margin: 10

    },
    header: {
        backgroundColor: '#ffcccb',
        height: 70
    },
    body: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    card: {
        flex: 0.01,
        width: "95%",
        margin: 10
    },
    button: {
        backgroundColor: '#F0F0F0',
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: 10,
    },
    cardHeader: {
        color: 'red',
        fontSize: 25,
        fontWeight: 'bold'
    },
    list: {
        flex: 1,
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'grey',
        fontFamily: 'monospace',
        fontSize: 18,
        fontWeight: '600',
        margin: 10
    },
    item1: {
        color: 'red',
        fontFamily: 'monospace',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 5
    },
    SignOutBtn: {
        backgroundColor: 'red',
        width: 80,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
    },
    image: {
        alignItems: 'center',
        width: 50,
        height: 50,
        resizeMode: 'stretch'
    },
    LogoText: {
        color: 'red',
        // fontFamily: 'monospace',
        fontSize: 24,
        fontWeight: 'bold',
    },
    footer: {
        backgroundColor: 'white',
        color: 'white',
    },
    footerBtn: {
        color: 'white',
        backgroundColor: 'red',
    }
});
//make this component available to the app
export default Profile;
