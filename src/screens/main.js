//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Segment, Content} from 'native-base';

// create a component
const Main = ({navigation}) => {
    const state = useSelector(state => state)
    const auth = state.auth
    console.log(auth.authData.idToken);

    return (
        <Container>
            <Header hasSegment>
                <Left>
                    <Button transparent onPress={()=> navigation.navigate("Home")}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>Segments</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name="search" />
                    </Button>
                </Right>
            </Header>
            <Segment>
                <Button first active>
                    <Text>Puppies</Text>
                </Button>
                <Button>
                    <Text>Kittens</Text>
                </Button>
                <Button last>
                    <Text>Cubs</Text>
                </Button>
            </Segment>
            <Content padder>
                <Text>Awesome segment</Text>
            </Content>
        </Container>

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
});

//make this component available to the app
export default Main;
