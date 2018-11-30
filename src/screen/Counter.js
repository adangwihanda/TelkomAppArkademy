import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

import Header from '../components/Header';
import BodyCounting from '../components/BodyCounting';

export default class Counter extends React.Component {

    // Contructor Dibuat sendiri sifatnya tidak wajib.
    constructor() {
        super();
    }

    // Dieksekusi sebelum render
    componentWillMount() {
        console.log('ini willMount');
    }

    render() {
        console.log('ini dalam render');

        return (
            <View style={styles.container}>
                {/* <Header title="UP/DOWN COUNTER" /> */}
                <BodyCounting/>
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
        //paddingTop: 20,
        // flexDirection:"row"
    },


});