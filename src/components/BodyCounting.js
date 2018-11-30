import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class BodyCounting extends React.Component {

    state = {
        counter: 0,
        warna: '#fff'
    }

    // handlePressButtonPlus = () => {
    //     const currentCounter = this.state.counter;
    //     this.setState(
    //         {
    //             currentCounter: currentCounter + 1

    //         }
    //     )
    // }
    componentDidMount() {
        setInterval(this.handleRandomWarna, 2000)
    }

    handleRandomWarna = () => {
        this.setState(
            {
                warna: this.randomWarna()
            }
        )
    }

    render() {
        return (
            <View style={[styles.container, { backgroundColor: this.state.warna }]} >

                <Text style={styles.number}>
                    {/* memanggil state counter  */}
                    {this.state.counter}
                </Text>

                <Button
                    onPress={this.saatPencetTombol}
                    title="COUNT-UP"
                    color="green"
                />

                <Text></Text>

                <Button
                    onPress={this.saatPencetTombolOff}
                    title="COUNT-DOWN"
                    color="green"
                />
                <Text></Text>
                <Button
                    onPress={this.saatPencetTombolReset}
                    title="RESET"
                    color="green"
                />

            </View>
        )
    }

    saatPencetTombol = () => {
        this.setState(
            {
                counter: this.state.counter + 1
            }

        )
    }

    saatPencetTombolOff = () => {
        this.setState(
            {
                counter: this.state.counter - 1,
                //   warna:this.randomWarna()
            }
        )
    }

    saatPencetTombolReset = () => {
        this.setState(
            {
                counter: this.state.counter = 0
            }

        )
    }

    randomWarna = () => {
        var letters = '0123456789ABCDEF';
        var warna = '#';
        for (var i = 0; i < 6; i++) {
            warna += letters[Math.floor(Math.random() * 16)];
        }
        return warna;
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'

    },
    number: {
        fontSize: 200,
        color: 'red',
        margin: 20
    },
    buttonStyle: {
        //flex: 1,
        alignItems: 'stretch',
        justifyContent: 'space-around'

    }

})