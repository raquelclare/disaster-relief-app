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
