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
                    title="jendela baru"
                    color="black"
                    onPress={this.handleNativeBase}
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