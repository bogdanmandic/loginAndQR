import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { Actions } from 'react-native-router-flux';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class Screen2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scanned: '',

    };
  }

  onSuccess(e) {
    this.setState({ scanned: e.data });
    Linking
      .openURL(e.data)
      .catch(err => console.error('An error occured', err));
  }

  render() {
    const { container, header, headerStyle, body, buttonStyle, buttonText } = styles;
    const { from } = this.props;
    return (
      <QRCodeScanner
        onRead={this.onSuccess.bind(this)}
        reactivate={true}
        reactivateTimeout={500}
        showMarker={true}
        topContent={(
          <Text style={styles.centerText} >
            Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
          </Text>
        )}
        bottomContent={(
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>{this.state.scanned}</Text>
          </TouchableOpacity>
        )}
      />
    )
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },

  textBold: {
    fontWeight: '500',
    color: '#000',
  },

  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },

  buttonTouchable: {
    padding: 16,
  },
})