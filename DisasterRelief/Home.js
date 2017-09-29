import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Platform } from 'react-native';

export default class Home extends Component {

  // The press function takes in an argument (action name) and pushes to the navigator the individual action page
  pressDonate(action) {
    this.props.navigator.push({ 
      id: 2
      // We can pass any information we want to the next scene as props
    });
  }

  pressVolunteer(action) {
    this.props.navigator.push({ 
      id: 4
      // We can pass any information we want to the next scene as props
    });
  }

  pressResources(action) {
    this.props.navigator.push({ 
      id: 5
      // We can pass any information we want to the next scene as props
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>dre<Text style={{color:'rgb(49,140,231)'}}>.</Text></Text>
        <Text style={{textAlign:'center'}}>Disaster Relief Education</Text>
        {/*Each button will call the press function with a different action name*/}
        <TouchableOpacity onPress={() => this.pressDonate('Donate')} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.actionText}><Text style={{color:'#fff'}}>Donate</Text></Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pressVolunteer('Volunteer')} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.actionText}><Text style={{color:'#fff'}}>Volunteer</Text></Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pressResources('Resources')} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.actionText}><Text style={{color:'#fff'}}>Resources</Text></Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.smallInfoText}>ABOUT</Text>
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
    color: 'rgb(21,96,189)'
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
    backgroundColor: 'rgb(49,140,231)',
    borderRadius: 50
  },
  smallInfoText: {
    color: 'gray', 
    fontFamily: (Platform.OS === 'android') ? 'sans-serif-light' : 'Avenir-Light',
    textAlign:'center'
  }
});
