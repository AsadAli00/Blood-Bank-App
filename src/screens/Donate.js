//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Form, Item, Label, Input } from 'native-base';
import { Picker } from '@react-native-picker/picker';
import logo3 from '../../src/images/logo/logo3.png';
import database from '@react-native-firebase/database';

// create a component
const Donate = ({navigation}) => {
    const [name, setName] = useState('');
    const [cnic, setCnic] = useState('');
    const [number, setNumber] = useState('');
    const [city, setCity] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('')
    const [selectedValue, setSelectedValue] = useState('Blood Group');


    const Submit = () => {
        const DonarData = {
            Name: name,
            CNIC: cnic,
            number: number,
            City: city,
            Gender: gender,
            Address: address,
            BloodGroup: selectedValue
        }


        if (!name.trim()) {
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
        else if (!cnic.trim()) {
            Alert.alert(
                'Missing',
                'Enter Your CNIC',
                [
                    {
                        text: 'Ok',
                        onPress: () => console.log("CNIC"),
                        style: 'cancel'
                    }
                ],
                { cancelable: false }
            );
        }
        else if (!number.trim()) {
            Alert.alert(
                'Missing',
                'Enter your Contact Number',
                [
                    {
                        text: 'Ok',
                        onPress: () => console.log("Contact Number"),
                        style: 'cancel'
                    }
                ],
                { cancelable: false }
            );
        }
        else if (!city.trim()) {
            Alert.alert(
                'Missing',
                'Enter your City',
                [
                    {
                        text: 'Ok',
                        onPress: () => console.log("City"),
                        style: 'cancel'
                    }
                ],
                { cancelable: false }
            );
        }
        else if (!gender.trim()) {
            Alert.alert(
                'Missing',
                'Enter your Gender',
                [
                    {
                        text: 'Ok',
                        onPress: () => console.log("Gender"),
                        style: 'cancel'
                    }
                ],
                { cancelable: false }
            );
        }
        else if (!address.trim()) {
            Alert.alert(
                'Missing',
                'Enter your Address',
                [
                    {
                        text: 'Ok',
                        onPress: () => console.log("Address"),
                        style: 'cancel'
                    }
                ],
                { cancelable: false }
            );
        }
        else {
            database().ref('/').child("DonarData").push(DonarData);


            setTimeout(() => {
                Alert.alert(
                    'Done',
                    'SuccessFully Submit',
                    [
                        {
                            text: 'OK',
                            onPress: () => navigation.goBack(),
                            style: 'cancel'
                        }
                    ],
                    { cancelable: false }
                );
            }, 1000);

            
        }

    }



    return (
        <>
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ flexGrow: 1, flex: 3 }} keyboardShouldPersistTaps='handled'>
                    <Container style={styles.subContainer}>
                        <Content>
                            <View style={styles.headLogo}>
                                <Image style={styles.logo} source={logo3} resizeMode="center" />
                                <Text style={styles.LogoText}>Registration <Text style={{ color: '#90ee90' }}> Form</Text></Text>
                            </View>
                            <View style={styles.mainBody}>
                                <Card style={styles.card}>
                                    <View style={{ flex: 0.2, flexDirection: 'column', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red', paddingLeft: 20 }}>Name*</Text>
                                        <TextInput placeholderTextColor="grey" value={name} onChangeText={(text) => setName(text)} autoCorrect={false} autoCompleteType="off" placeholder=" Full Name" style={styles.textInput}
                                            maxLength={20} />
                                    </View>
                                    <View style={{ flex: 0.2, flexDirection: 'column', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red', paddingLeft: 20 }}>CNIC*</Text>
                                        <TextInput placeholderTextColor="grey" value={cnic} onChangeText={(text) => setCnic(text)} keyboardType='numeric' placeholder=" 42301-xxxxxxx-x" style={styles.textInput}
                                            maxLength={15} />
                                    </View>
                                    <View style={{ flex: 0.2, flexDirection: 'column', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red', paddingLeft: 20 }}>Contact Number*</Text>
                                        <TextInput placeholderTextColor="grey" value={number} onChangeText={(text) => setNumber(text)} keyboardType='numeric' placeholder=" 0302xxxxxxx" style={styles.textInput}
                                            maxLength={11} />
                                    </View>
                                    <View style={{ flex: 0.2, flexDirection: 'column', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red', paddingLeft: 20 }}>City*</Text>
                                        <TextInput placeholderTextColor="grey" value={city} onChangeText={(text) => setCity(text)} placeholder="eg. Karachi" style={styles.textInput}
                                            maxLength={20} />
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'column' }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red', paddingLeft: 20 }}>Blood Group</Text>
                                        <View style={styles.pickerContainer}>
                                            <Picker
                                                selectedValue={selectedValue}
                                                style={{ height: 50, width: 250 ,color: '#999'}}
                                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                                
                                            >
                                                <Picker.Item label="Blood Group" value="" />
                                                <Picker.Item label="Group A" value="A" />
                                                <Picker.Item label="Group B" value="B" />
                                                <Picker.Item label="Group AB" value="AB" />
                                                <Picker.Item label="Group O" value="O" />
                                            </Picker>
                                        </View>
                                    </View>
                                    <View style={{ flex: 0.2, flexDirection: 'column', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red', paddingLeft: 20 }}>Gender*</Text>
                                        <TextInput placeholderTextColor="grey" value={gender} onChangeText={(text) => setGender(text)} placeholder="Male/Female" style={styles.textInput}
                                            maxLength={10} />
                                    </View>
                                    <View style={{ flex: 0.2, flexDirection: 'column', }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red', paddingLeft: 20 }}>Address*</Text>
                                        <TextInput multiline={true} numberOfLines={4} value={address} onChangeText={(text) => setAddress(text)} autoCorrect={false} placeholderTextColor="grey" placeholder="Enter Address" style={styles.textInputArea}
                                            maxLength={200} />
                                    </View>
                                    <View style={{ flex: 0.1, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                        <TouchableOpacity style={styles.button} onPress={Submit} >
                                            <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>SUBMIT</Text>
                                        </TouchableOpacity>
                                    </View>
                                </Card>
                            </View>
                        </Content>
                    </Container>
                </ScrollView>
            </View>

        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F1F1F1',
    },
    headLogo: {
        flex: 0.3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',


    },
    logo: {
        flex: 1,
        width: 200,
        height: 150,
    },
    LogoText: {
        color: 'red',
        fontFamily: 'monospace',
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 20,
    },
    mainBody: {
        flex: 3,
        flexDirection: 'column',
        margin: 10,
    },
    form: {
        flex: 3,
        flexDirection: 'column',
    },
    card: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
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
    textInputArea: {
        borderRadius: 5,
        borderColor: 'red',
        height: 100,
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
        backgroundColor: '#FF0000',
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: 10,
        margin: 10,
    },
    pickerContainer: {
        flex: 1,
        paddingTop: 2,
        alignItems: "center",
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: 5,
        margin: 10,
    },
});

//make this component available to the app
export default Donate;
