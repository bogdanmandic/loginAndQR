import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, KeyboardAwareScrollView, TextInput, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Form, Item, Input, Button, Body, Title } from 'native-base';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import mainStyles from '../styles/style';
import md5 from 'md5';



export default class Screen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isChecked: true
    };
  }

  navigateToScreen2() {
    Actions.screen2({
      from: 'Dosao si sa strane 1, ovo je u props'
    });
  }

  logIn() {
    const { email, password } = this.state;
    console.log(email, password);
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", md5(password));
    fetch('http://www.cduppy.com/salescms/?a=ajax&do=loginUser&languageId=1&projectId=5&token=1234567890', {
      method: 'POST',
      body: formData
    })
      .then(response => {
        console.log(response)
        res = JSON.parse(response._bodyText);
        if (res.hasOwnProperty("userId")) {
          this.setState({
            userId: res.userId,
            email: '',
            password: ''
          });
          Alert.alert(
            'Success',
            'You can scan now!',
            [
              { text: 'Ok', onPress: () => { this.navigateToScreen2() } }
            ],
            { cancelable: false }
          )
        } else {
          alert('User nije pronadjen!');
        }
      })
      .catch(error => console.log(error));
  }

  render() {
    const { container, headerStyle, body, header, buttonText, buttonStyle, buttonContainer, textLink, buttonMargin, formStyle, FontInput, fontUbuntu, spaceIconText } = styles;
    return (
      <Container style={mainStyles.bgColorWhite}>

        <Content contentContainerStyle={{ flexGrow: 1 }}>
          <Form style={formStyle}>
            <View>
              <Item>

                <Input style={FontInput}
                  placeholder="Uneti korisničko ime"
                  underlineColorAndroid='white'
                  keyboardType="email-address"
                  returnKeyType="next"
                  value={this.state.email}
                  onChangeText={email => { this.setState({ email }) }}
                  onSubmitEditing={() => this.password.focus()}
                />
              </Item>
              <Item>

          
                <Input style={FontInput}
                  placeholder="Uneti lozinku"
                  underlineColorAndroid='white'
                  secureTextEntry={true}
                  returnKeyType="go"
                  value={this.state.password}
                  onChangeText={password => { this.setState({ password }) }}
                  ref={(input) => this.password = input}
                />
              </Item>
            </View>
            <View style={buttonContainer}>
              <Button style={styles.buttonLog} onPress={this.logIn.bind(this)}>
                <Text style={ styles.buttonTextDisabled}S>Prijavite se </Text>
              </Button>

            </View>
          </Form>
        </Content>


      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 24,
    borderColor: '#cccccc',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

  },
  login: {
    height: '40%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    paddingTop: 20
  },
  inputBox: {
    width: '100%',
    height: 40,
    backgroundColor: "white",
    borderRadius: 5,
    fontSize: 18,
    color: "#757575",
    margin: 10,
    borderBottomWidth: 2,
    borderColor: "#d8d8d8"
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '100',
    color: "#424242",
    textAlign: 'center',
  },
  buttonTextDisabled: {
    fontSize: 20,
    fontWeight: '100',
    color: "white",
    textAlign: 'center',
  },
  buttonLog: {
    backgroundColor: '#646464',
    width: '100%',
    height: '23%',
    justifyContent: 'center',
    marginBottom: 30
  },
  buttonLogDisabled: {
    backgroundColor: '#BDB9B9',
    width: '100%',
    height: '23%',
    justifyContent: 'center',
    marginBottom: 30
  },
  buttonReg: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#d8d8d8',
    width: '100%',
    height: '47%',
    justifyContent: 'center',
  },
  tekst: {
    color: "#959A9C",
    fontSize: 16
  },
  skip: {
    alignItems: 'flex-end',
    backgroundColor: 'white',
  },
  skipBtn: {
    alignItems: 'center',
    paddingTop: 25,
  },
  avoid: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '10%',
    paddingRight: '20%',
    paddingLeft: '20%'
  },
  buttonContainer: {
    width: '70%',
    alignSelf: 'center',
    marginTop: 100
  },
  textLink: {
    textAlign: 'center',
    marginTop: 5,
  },
  buttonMargin: {
    marginTop: 15
  },
  formStyle: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 15
  },
  FontInput: {
    flex: 1,
    fontSize: 16
  },
  spaceIconText: {
    paddingLeft: 15
  }

  /*
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
  */
});