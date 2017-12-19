import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class Screen2 extends Component {

    goBack() {
        Actions.pop();
    }

    render() {
        const { container, header, headerStyle, body, buttonStyle, buttonText } = styles;
        const { from } = this.props;
        return (
            <View style={container}>
                <View style={headerStyle}>
                    <Text style={header}>SCREEN 2</Text>
                </View>
                <View style={body}>
                    <View>
                        <Text>{from}</Text>
                    </View>
                    <TouchableOpacity onPress={this.goBack} style={buttonStyle}>
                        <Text style={buttonText}>GO BACK</Text>
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
        height: '100%',
        width: '100%',
        backgroundColor: 'red'
    },
    header: {
        fontSize: 36,
        color: 'white'
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