import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';



export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar={true}>
          <Scene key="screen1" component={Screen1} title="Blagoje" initial={true} />
          <Scene key="screen2" component={Screen2} title="Bogdan" />
        </Stack>
      </Router>
    )
  }
}