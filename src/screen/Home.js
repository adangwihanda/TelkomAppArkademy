import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

// import Header from '../components/Header';
import Body from '../components/Body';

export default class Home extends React.Component {

    // Contructor Dibuat sendiri sifatnya tidak wajib.
    constructor() {
        super();

    }

    // Dieksekusi sebelum render
    componentWillMount() {
        console.log('ini willMount');
    }
    handleNav = () => {
        this.props.navigation.navigate('Counter');
    }

    handleNativeBase = () => {
        this.props.navigation.navigate('NativeBase');
    }


    handleProfile = () => {
        this.props.navigation.navigate('Profile');
    }


    render() {
        console.log('ini dalam render');

        return (
            <View style={styles.container}>


                <Button
                    title="COUNTER"
                    color="black"
                    onPress={this.handleNav}
                />
                <Text></Text>

                <Button
                    title="JENDELA"
                    color="black"
                    onPress={this.handleNativeBase}
                />

                <Button
                    title="Profile"
                    color="green"
                    onPress={this.handleProfile}
                />
                {/* <Header title="HOME" /> */}

                <Body />



            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        // alignItems: 'center',
        // justifyContent: 'center',
        //   paddingTop: 20,
        // flexDirection:"row"
    },
});