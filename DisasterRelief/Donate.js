import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, StyleSheet, Platform } from 'react-native';

export default class Donate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    //   movie: ''
    };
    this.handlePress = this.handlePress.bind(this);
  }

  // When the component mounts..
//   componentDidMount() {
//     // Call our detchData function on the movie that was passed in as props
//     this.fetchData(this.props.name)
//   }

  // The handlePress function will return us to the previous page
  handlePress() {
    this.props.navigator.pop();
  }

  render() {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{this.props.name}</Text>
            </View>
            {/*Each button will call the press function with a different action name*/}
            <TouchableHighlight onPress={() => this.press('Organization1')} style={styles.outerButton}>
                <View style={styles.innerButton}>
                    <Text style={styles.actionText}><Text style={{color:'#fff'}}>ORG 1</Text></Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.press('Organization2')} style={styles.outerButton}>
                <View style={styles.innerButton}>
                    <Text style={styles.actionText}><Text style={{color:'#fff'}}>ORG 2</Text></Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.press('Organization3')} style={styles.outerButton}>
                <View style={styles.innerButton}>
                    <Text style={styles.actionText}><Text style={{color:'#fff'}}>ORG 3</Text></Text>
                </View>
            </TouchableHighlight>

            <View style={{flexDirection:'row', justifyContent:'center', margin: 40}}>
                <TouchableHighlight onPress={this.handlePress} style={{width:100}}>
                <View style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: 'white', borderRadius: 50}}>
                    <Text style={{color: 'rgba(76,217,175,1)', fontWeight: 'bold'}}>Go Back</Text>
                </View>
                </TouchableHighlight>
          </View>
        </View>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(76,217,175,1)'
  },
  infoTextContainer: {
    flexDirection: 'column', 
    alignItems: 'center'
  },
  imageStyle: {
    height: 150,
    width: 360,
    alignSelf: "center",
    marginTop: (Platform.OS === 'ios') ? 10 : 0
  },
  bigInfoText: {
    fontSize: 32, 
    fontWeight: 'bold', 
    color: 'white'
  },
  smallInfoText: {
    color: 'white', 
    fontFamily: (Platform.OS === 'android') ? 'sans-serif-light' : 'Avenir-Light'
  },
  bigLightText: {
    color: 'white', 
    fontFamily: (Platform.OS === 'android') ? 'sans-serif-light' : 'Avenir-Light',
    fontSize:25, 
    textAlign:'center'
  },
  text: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
    marginBottom: 20,
    color: 'white',
    fontFamily: (Platform.OS === 'android') ? 'sans-serif-light' : 'Avenir-Light',
    textAlign: 'center'
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#35977a',
    height: 50,
  },
  title: {
    color: '#fff6d1',
    fontSize: 25,
    fontWeight: 'bold'
  }
});
