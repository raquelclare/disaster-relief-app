import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Dimensions, Platform } from 'react-native';

export default class Home extends Component {

  // The press function takes in an argument (action name) and pushes to the navigator the individual action page
  press(action) {
    this.props.navigator.push({ 
      id: 2
      // We can pass any information we want to the next scene as props
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>dsstr rlf</Text>
        {/*Each button will call the press function with a different action name*/}
        <TouchableHighlight onPress={() => this.press('Donate')} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.actionText}><Text style={{color:'#fff'}}>Places I Can Donate To</Text></Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.press('Volunteer')} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.actionText}><Text style={{color:'#fff'}}>Places I Can Volunteer At</Text></Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.press('Resources')} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.actionText}><Text style={{color:'#fff'}}>Resources</Text></Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    marginTop: 75,
    marginBottom: 50,
    fontWeight: 'bold',
    color: 'red'
  },
  actionText: {
    fontSize: 20,
    fontFamily: (Platform.OS === 'android') ? 'sans-serif-light' : 'Avenir-Light'
  },
  outerButton: {
    paddingVertical: 3,
    paddingHorizontal: 30
  },
  innerButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'rgb(80,80,80)',
    borderLeftWidth: 5,
    borderColor: 'rgb(0,0,0)'
  }
});
