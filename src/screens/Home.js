//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import logo1 from '../../src/images/logo/logo1.png'

// create a component
const Home = ({navigation}) => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, flex: 1 }} keyboardShouldPersistTaps='handled'>
            <View style={styles.container}>
                <View style={styles.headLogo}>
                    <Image style={styles.logo} source={logo1} resizeMode="center" />
                </View>
                <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <TouchableOpacity style={styles.button} >
                        <Text style={{ color: '#ffff', fontSize: 20, fontWeight: 'bold'}}>Donate Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Login")} >
                        <Text style={{ color: '#ffff', fontSize: 20, fontWeight: 'bold'}}>Need Blood</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F1F1F1',
    },
    headLogo: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems :'center',


    },
    logo: {
        flex: 1,
        width: 300,
        height: 200,
    },
    button: {
        backgroundColor: 'red',
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: 10,
        margin: 5,
    },
});

//make this component available to the app
export default Home;
