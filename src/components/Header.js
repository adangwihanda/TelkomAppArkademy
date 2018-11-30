import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


// class Header extends React.Component {
export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>
            
                <NavButton text="BACK"/>
                {/* <Upper/>   */}
                <Text style={styles.textHeader}>{this.props.title}</Text>
                <NavButton text="NEXT"/>

            </View>
        )
    }
}




// Class Navigasi.
class NavButton extends React.Component {
    render() {
        return (
            <View style={styles.containnerButton}>
                {/* <Text style={styles.textButton}>LEFT</Text> */}
                <Text style={styles.textButton}>{this.props.text}</Text>

                
            </View>
        )
    }
}


// class Right extends React.Component {
//     render() {
//         return (
//             <View style={styles.containnerButton}>
//                 {/* <Text style={styles.textButton}>RIGHT</Text> */}
//                 <Text style={styles.textButton}>{this.props.text}</Text>
//             </View>
//         )
//     }
// }

class Upper extends React.Component{

    render (){
        return (
            <View>
                <Text>TITLE HEADER</Text>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    header: {
        flex: 1,
        // height: 50,
        backgroundColor: "green",
        alignItems: 'center',
        // justifyContent: 'space-between',
        justifyContent: 'space-around',
        // color:'white'
        flexDirection:'row'
        
    },

    textHeader: {
        color: '#ffffff',
        fontSize: 20,

    },

    textButton: {
       // flex:1,
        color:'#fff'
    },

    containnerButton:{
        margin:10, // jarak dengan sisis luar, kalau padding dengan sisi dalam.
    }
    
});