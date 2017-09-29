import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Platform, ScrollView } from 'react-native';
import orgImg from '../org.jpg';

export default class Org22 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.handlePress = this.handlePress.bind(this);
  }
  // The handlePress function will return us to the previous page
  handlePress() {
    this.props.navigator.pop();
  }

  render() {

    //if (!this.state.loading) {

      return (
        <View style={styles.container}>

          <View style={styles.header}>
            <Text style={styles.title}>ORGANIZATION 3</Text>
          </View>
          <ScrollView>
          <Image
            style={styles.imageStyle}
            source={ orgImg }
          />

          <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
            <View style={styles.infoTextContainer}>
              <Text style={styles.bigInfoText}>4/4</Text>
              <Text style={styles.smallInfoText}>Rated</Text>
            </View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.bigInfoText}>2010</Text>
              <Text style={styles.smallInfoText}>Year Founded</Text>
            </View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.bigInfoText}>N/A</Text>
              <Text style={styles.smallInfoText}>Other</Text>
            </View>
          </View>

          <Text style={styles.text}>Sed risus arcu, suscipit eget rutrum quis, congue sed odio. Donec et diam dolor. Nullam malesuada arcu id libero molestie porta. Nullam porttitor fermentum enim, ac lacinia lacus suscipit vel. Donec venenatis, enim sit amet tempus mollis, lorem nunc vulputate ligula, in blandit nulla ipsum id mauris. Ut ut erat orci. Duis accumsan ante scelerisque auctor dignissim. In nec sagittis erat. Aenean in vulputate odio. Praesent dignissim tortor vel turpis consequat varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In commodo laoreet molestie. Integer non fringilla justo, ut mollis magna.</Text>

          <Text style={styles.bigLightText}>More Info</Text>
          <Text style={styles.bigLightText}>More Info</Text>  

          {/*--------D3 INFO TO GO HERE---------*/}
 
          <View style={{flexDirection:'row', justifyContent:'center', margin: 40}}>
            <TouchableOpacity onPress={this.handlePress} style={{width:100}}>
              <View style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: 'white', borderRadius: 50}}>
                <Text style={{color: 'rgb(12,65,123)', fontWeight: 'bold'}}>Go Back</Text>
              </View>
            </TouchableOpacity>
          </View>
          </ScrollView>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(49,140,231)'
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
    backgroundColor: 'rgb(21,96,189)',
    height: 50,
  },
  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  }
});