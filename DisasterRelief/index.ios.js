/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

// Importing scenes for our app
import Home from './Home';
import Splash from './Splash';
import Donate from './Donate';
import Volunteer from './Volunteer';
import Resources from './Resources';
// Organization vetted
import Org1 from './Charities/Org1';
import Org2 from './Charities/Org2';
import Org3 from './Charities/Org3';
import Org4 from './Charities/Org4';
import Org5 from './Charities/Org5';
import Org6 from './Charities/Org6';
import Org7 from './Charities/Org7';
import Org8 from './Charities/Org8';
import Org9 from './Charities/Org9';
import Org10 from './Charities/Org10';
import Org11 from './Charities/Org11';
import Org12 from './Charities/Org12';
import Org13 from './Charities/Org13';
import Org14 from './Charities/Org14';
import Org15 from './Charities/Org15';
import Org16 from './Charities/Org16';
import Org17 from './Charities/Org17';
import Org18 from './Charities/Org18';
import Org19 from './Charities/Org19';
import Org20 from './Charities/Org20';
import Org21 from './Charities/Org21';
import Org22 from './Charities/Org22';
import Org23 from './Charities/Org23';
import Org24 from './Charities/Org24';
import Org25 from './Charities/Org25';
import Org26 from './Charities/Org26';
import Org27 from './Charities/Org27';

class DisasterRelief extends Component {

  // Our renderScene function will choose which scene to render based on the route id
  renderScene(route, navigator) {
    if (route.id === 1) {
      return <Home navigator={navigator} />
    } 
    else if (route.id === 2) {
      return <Donate navigator={navigator} {...route.passProps} />
    } 
    else if (route.id === 3) {
      return <Splash navigator={navigator} />
    }
    else if (route.id === 4) {
      return <Volunteer navigator={navigator} {...route.passProp} />
    }
    else if (route.id === 5) {
      return <Resources navigator={navigator} {...route.passProp} />
    }
    else if (route.id === 6) {
      return <Org1 navigator={navigator} {...route.passProp} />
    }
    else if (route.id === 7) {
      return <Org2 navigator={navigator} {...route.passProp} />
    }
    else if (route.id === 8) {
      return <Org3 navigator={navigator} {...route.passProp} />
    }
    else if (route.id === 9) {
      return <Org4 navigator={navigator} {...route.passProp} />
    }
    else if (route.id === 10) {
      return <Org5 navigator={navigator} {...route.passProp} />
    }
    else if (route.id === 11) {
      return <Org6 navigator={navigator} {...route.passProp} />
    }
    else if (route.id === 12) {
      return <Org7 navigator={navigator} {...route.passProp} />
    }
    else if (route.id === 13) {
      return <Org8 navigator={navigator} {...route.passProp} />
    }
    else if (route.id === 14) {
      return <Org9 navigator={navigator} {...route.passProp} />
    }
    else if (route.id === 15) {
      return <Org10 navigator={navigator} {...route.passProp} />
    }
    else if (route.id === 16) {
      return <Org11 navigator={navigator} {...route.passProp} />
    }
    else if (route.id === 17) {
      return <Org12 navigator={navigator} {...route.passProp} />
    }
    else if (route.id === 18) {
      return <Org13 navigator={navigator} {...route.passProp} />
    }
    else if (route.id === 19) {
      return <Org14 navigator={navigator} {...route.passProp} />
    }
    else if (route.id === 20) {
      return <Org15 navigator={navigator} {...route.passProp} />
    }
    else if (route.id === 21) {
      return <Org16 navigator={navigator} {...route.passProp} />
    }
    else if (route.id === 22) {
      return <Org17 navigator={navigator} {...route.passProp} />
    }
    else if (route.id === 23) {
      return <Org18 navigator={navigator} {...route.passProp} />
    }
    else if (route.id === 24) {
      return <Org19 navigator={navigator} {...route.passProp} />
    }
    else if (route.id === 25) {
      return <Org20 navigator={navigator} {...route.passProp} />
    }
    else if (route.id === 26) {
      return <Org21 navigator={navigator} {...route.passProp} />
    }
    else if (route.id === 27) {
      return <Org22 navigator={navigator} {...route.passProp} />
    }
    else if (route.id === 28) {
      return <Org23 navigator={navigator} {...route.passProp} />
    }
    else if (route.id === 29) {
      return <Org24 navigator={navigator} {...route.passProp} />
    }
    else if (route.id === 30) {
      return <Org25 navigator={navigator} {...route.passProp} />
    }
    else if (route.id === 31) {
      return <Org26 navigator={navigator} {...route.passProp} />
    }
    else if (route.id === 32) {
      return <Org27 navigator={navigator} {...route.passProp} />
    }
  }

  // The configureScene function allows us to change the animation properties of a scene
  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  render() {
    return (
      // Our Navigator handles the transition between different scenes in our app
      <Navigator
        // The first page we are going to render
        initialRoute={{ id: 3 }}
        // Passing in our renderScene function
        renderScene={this.renderScene}
        // Passing in our configureScene function
        configureScene={this.configureScene}
      />
    );
  }

}

AppRegistry.registerComponent('DisasterRelief', () => DisasterRelief);
