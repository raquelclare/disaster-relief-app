import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, StyleSheet, Platform, ScrollView } from 'react-native';
import orgImg from '../org.jpg';

export default class Org2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.handlePress = this.handlePress.bind(this);
  }

  // // When the component mounts..
  // componentDidMount() {
  //   // Call our fetchData function on the charity/organization that was passed in as props
  //   this.fetchData(this.props.name)
  // }

  // The handlePress function will return us to the previous page
  handlePress() {
    this.props.navigator.pop();
  }

  render() {

    //if (!this.state.loading) {

      return (
        <View style={styles.container}>

          <View style={styles.header}>
            <Text style={styles.title}>ORGANIZATION 2</Text>
          </View>
          <ScrollView>
          <Image
            style={styles.imageStyle}
            source={ orgImg }
          />

          <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
            <View style={styles.infoTextContainer}>
              <Text style={styles.bigInfoText}>3/4</Text>
              <Text style={styles.smallInfoText}>Rated</Text>
            </View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.bigInfoText}>2014</Text>
              <Text style={styles.smallInfoText}>Year Founded</Text>
            </View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.bigInfoText}>N/A</Text>
              <Text style={styles.smallInfoText}>Other</Text>
            </View>
          </View>

          <Text style={styles.text}>Maecenas pretium luctus metus tincidunt tristique. Maecenas scelerisque porttitor est, id pretium lectus commodo eu. Nulla magna sapien, tincidunt ac lacus vel, ultricies eleifend neque. Donec tincidunt lorem et dui eleifend dignissim. Suspendisse sit amet diam id lacus eleifend luctus. Aliquam a massa lacus. Nam pharetra hendrerit facilisis. Cras vel mollis erat, id mattis tellus. Praesent in pellentesque leo. Aenean viverra ipsum sem, non fermentum augue consequat ut. Cras ut felis sit amet est cursus aliquet sed ac enim.</Text>

          <Text style={styles.bigLightText}>More Info</Text>
          <Text style={styles.bigLightText}>More Info</Text> 

          {/*--------D3 INFO TO GO HERE---------*/}
 
          <View style={{flexDirection:'row', justifyContent:'center', margin: 40}}>
            <TouchableHighlight onPress={this.handlePress} style={{width:100}}>
              <View style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: 'white', borderRadius: 50}}>
                <Text style={{color: 'rgb(12,65,123)', fontWeight: 'bold'}}>Go Back</Text>
              </View>
            </TouchableHighlight>
          </View>
          </ScrollView>
        </View>
      );
    // } 
    // else {
    //   return (
    //     <View>
    //       <Text>Loading {this.props.name} information!</Text>
    //       <TouchableHighlight onPress={this.handlePress}>
    //         <View style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: '#c9f3e7'}}>
    //           <Text>Go Back!</Text>
    //         </View>
    //       </TouchableHighlight>
    //     </View>
    //   );
    // }
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