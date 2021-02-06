//import liraries
import React, { Component, useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import { Container, Header, Body, Card, CardItem, Spinner, Footer, FooterTab, Right, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import database from '@react-native-firebase/database';
import { useSelector, useDispatch } from 'react-redux';
import { Donar_Data } from '../config/store/action/index';
import Navigation from '../config/Navigation/Navigation';
import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-community/google-signin';
import logo from '../images/logo/logo.png';
import auth from '@react-native-firebase/auth'




// create a component
const Main = ({ navigation }) => {

    // const [showPopover, setShowPopover] = useState(false);
    const [donarKey, setDonarKey] = useState([]);
    const [donarval, setDonarVal] = useState([]);
    const [loading, setloading] = useState(false);
    const appDonarData = useSelector(state => state.app.DonarData)



    // appDonarData.map((v,i)=>{
    // console.log(v);
    // console.log(i);
    // })


    const dispatch = useDispatch()
    const DonarData = data => dispatch(Donar_Data(data))
    const cardData =
        [[],[],[],[],[]]

        const listData = [
            {type: 'Name', value: appDonarData.Name},
            {type: 'Address', value: appDonarData.Address},
            {type: 'Contact N0.', value: appDonarData.number},
            {type: 'Blood Group', value: appDonarData.BloodGroup},
            {type: 'City', value: appDonarData.City},
            
        ]



    // useEffect(()=> {


    // })

    useEffect(() => {
        // database().ref('/').child('DonarData').on('child_added', (Data) => {
        //     // console.log(Data.key);
        //     // console.log(Data.val());
        //     setDonarKey(Data.key)
        //     setDonarVal(Data.val())

        // })
        database().ref('/').child('DonarData').on('child_added', async (data) => {
            const result = await data;
            DonarData(data.val())
            setloading(true)
        })



    }, [])


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
                    <Text style={styles.LogoText}>BLOOD BANK</Text>
                </Body>
                <Right>
                    <Button style={styles.SignOutBtn} onPress={SignOut}>
                        <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: 'bold' }}>Signout</Text>
                    </Button>
                </Right>
            </Header>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>

                <View style={styles.container}>
                    {!loading ? <Spinner color="red" style={{ justifyContent: 'center', alignItems: 'center' }} /> : <View style={styles.cardConatiner}>
                        {cardData.map((v, i) => {
                            return <Card key={i} style={styles.card}>
                                <CardItem header>
                                    <Text style={styles.cardHeader}>Donar Detail</Text>
                                </CardItem>
                                <CardItem>
                                    <Body>
                                        {/* <FlatList
                                     data={[
                                         { key: 'Name', value: "Asad" },
                                         { key: 'Address', value: "pakistanaaa asa" },
                                         { key: 'Contact Number', value: '03022691912' },
                                         { key: 'Blood Group', value: 'A' },
                                         { key: 'City', value: 'Karachi' },
                                     ]}
                                     style={styles.list}
                                     renderItem={({ item }) => <Text style={styles.item}>{item.key}: <Text style={styles.item1}>{item.value}</Text></Text>}
                                 /> */}
                                 {listData.map((v,i)=>{
                                      return <Text key={i} style={styles.item}>{v.type}: <Text style={styles.item1}>{v.value}</Text></Text>
                                 })}
                                    </Body>
                                </CardItem>
                                <CardItem footer>
                                    <View style={{ flex: 0.1, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                        <TouchableOpacity style={styles.button} >
                                            <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold' }}>Send Blood Request</Text>
                                        </TouchableOpacity>
                                    </View>
                                </CardItem>
                            </Card>
                        })}
                    </View>}

                </View>


            </ScrollView>
            <Footer style={styles.footer}>
                <FooterTab style={styles.footer}>
                    <Button vertical style={styles.footerBtn} onPress={()=> navigation.navigate("Profile")}>
                        <Icon name="user-circle" size={19} style={{ color: 'white' }} />
                        <Text style={{ color: 'white' }}>Profile</Text>
                    </Button>
                    <Button vertical style={styles.footerBtn} onPress={()=> navigation.navigate("requested")}>
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
        flex: 5,
        backgroundColor: '#F0F0F0',
        alignItems: 'center',
        justifyContent: 'center'

    },
    cardConatiner:{
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
export default Main;
