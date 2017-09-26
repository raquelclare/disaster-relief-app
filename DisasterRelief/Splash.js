import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import usaImg from './usa-map.png';

export default class Splash extends Component {

  render() {
    return (

      <View style={styles.container}>
        <Image source={usaImg} style={{ height: 100, width: 100 }}/>
      </View>

    )
  }

  // Life-cycle method that will run the following code once the component has been mounted...
  componentDidMount() {
    // Call the nextPage function which will transition us to the home page after 2 seconds
    setTimeout(() => this.nextPage(), 2000);
  }

  // The nextPage function takes us to the home page
  nextPage() {
    // Pushes a new route to the navigation stack. This will be our home page since it has an id of 1
    this.props.navigator.push({ 
      id: 1
    });
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});
