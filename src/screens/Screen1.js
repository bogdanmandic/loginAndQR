import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';



export default class Screen1 extends Component {

    navigateToScreen2() {
        Actions.screen2({
            from: 'Dosao si sa strane 1, ovo je u props'
        });
    }

    render() {
        const { container, headerStyle, body, header, buttonText, buttonStyle } = styles;
        return (
            <View style={container}>
                <View style={headerStyle}>
                    <Text style={header}>SCREEN 1</Text>
                </View>
                <View style={body}>
                    <TouchableOpacity onPress={this.navigateToScreen2} style={buttonStyle}>
                        <Text style={buttonText}>GO TO SCREEN 2</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center' 
    },
    headerStyle: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'yellow',
        height: '100%',
        width: '100%'
    },
    header: {
        fontSize: 36,
        color: 'blue'
    },
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 10,
    },
    buttonStyle: {
        backgroundColor: 'lightblue',
        height: 56,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    }
})