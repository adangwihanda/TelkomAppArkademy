import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class Body extends React.Component {


    // untuk  melakukan delay tampian.
    state = {
        // showContent = false
        bukaTampilan: 'hidden'

    }

    pekerjaan = () => {
        this.setState(
            {
                bukaTampilan: 'show'
            }
        )

    }

    componentDidMount() {
        setTimeout(this.pekerjaan, 5000)
    }



    renderContent = () => {
        if (this.state.bukaTampilan == 'hidden') {
            return null
        } else {

            return (
                < View style={styles.body}>
                    <AppChild />
                    <Text>Open Up App.js to start your Apps</Text>
                    <Image style={styles.imageBody} source={require('../../logo.png')} />
                    <Text> </Text>
                    <Button 
                        onPress={this.onPressLearnMore}
                        title="Tombol"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                    <Text></Text>
                    <Button
                        onPress={this.Tombol2}
                        title="Tombol"
                        color="#444444"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View >
            )

        }
    }


    render() {
        return (
            <View style={styles.body}>
                {this.renderContent()}
            </View>
        )
    }

    onPressLearnMore = () => {
                alert('Tombol Satu');
    }

    Tombol2 = () => {
        alert('Tombol Dua');
    }

}

class AppChild extends React.Component {
    render() {
        return (
            <View>
                <Text>Child Apps Componen</Text>
            </View>
        )
    }
}



const styles = StyleSheet.create({

    body: {
        backgroundColor: 'yellow',
        // color: 'yellow',
        fontSize: 20,
        // height:555,
        flex: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    imageBody: {
        height: 120,
        width: 80
    }
});