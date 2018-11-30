import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Container, Content, Form, Item, Input } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

export default class Profile extends React.Component {
    render() {
        return (
            <View>
                <Atas />
                <Text></Text>
                <Tengah />
                <Text></Text>
                <Bawah />
            </View>

        )
    }

}


class Atas extends React.Component {
    render() {
        return (
            <View style={styles.body}>
                <Image style={styles.imageBody} source={require('../../logo.png')} />
                <Text>NAMA SAYA</Text>
            </View>
        )
    }
}

class Tengah extends React.Component {
    render() {
        return (
            <View style={styles.body1}>
                <Form>
                    <Item>
                        <Input placeholder="Nama" />
                    </Item>
                    <Item>
                        <Input placeholder="User Name" />
                    </Item>
                    <Item>
                        <Input placeholder="Web site" />
                    </Item>
                    <Item last>
                        <Input placeholder="Bio" />
                    </Item>
                </Form>
         
            </View >
        )
    }
}

class Bawah extends React.Component {
    render() {
        return (
            <View style={styles.body2}>
                <Form>
                    <Item>
                        <Input placeholder="e-Mail" />
                    </Item>
                    <Item last>
                        <Input placeholder="Phone" />
                    </Item>
                </Form>
            </View>
        )
    }
}


const styles = StyleSheet.create({

    body: {
        backgroundColor: '#fff',
        fontSize: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:100
    },
    
    imageBody: {
      //  flex:1,
        alignItems: 'center',
        justifyContent:'center',
        height: 80,
        width: 80,
        borderRadius: 40,
        //paddingTop:30
    }
});