import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Platform, ScrollView, Linking } from 'react-native';
import orgImg from '../img/save-the-children.png';

export default class Org23 extends Component {

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

  //function to handle url click to donation page in browser
  handleClick() {
    var url = 'http://www.savethechildren.org/site/c.8rKLIXMGIpI4E/b.6146369/k.95B8/Ways_To_Give.htm';

    Linking.canOpenURL(url).then(supported => {
      if(supported) {
        Linking.openURL(url);
      } else {
        console.log('Cannot open: ' + url);
      }
    });
  }

  render() {

    //if (!this.state.loading) {

      return (
        <View style={styles.container}>

          <View style={styles.header}>
            <Text style={styles.title}>Save the Children</Text>
          </View>
          <ScrollView>
          <Image
            style={styles.imageStyle}
            source={ orgImg }
          />

          <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
            <View style={styles.infoTextContainer}>
              <Text style={styles.bigInfoText}>3/4, A</Text>
              <Text style={styles.smallInfoText}>Rated</Text>
            </View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.bigInfoText}>1932</Text>
              <Text style={styles.smallInfoText}>Year Founded</Text>
            </View>
            {/*<View style={styles.infoTextContainer}>
              <Text style={styles.bigInfoText}>N/A</Text>
              <Text style={styles.smallInfoText}>Other</Text>
            </View>*/}
          </View>

          <Text style={styles.text}>Save the Children believes every child deserves a future.</Text>

           <Text style={styles.text}>In the United States and around the world, Save the Children gives children a healthy start in life, the opportunity to learn, and protection from harm. They do whatever it takes for children – every day and in times of crisis – transforming their lives and the future we share.</Text> 

           <Text style={styles.text}>Save the Children is committed to conducting programs and operations in a manner that keeps children safe and protects them from harm. They insist on 100% accountability for safeguarding the children they are privileged enough to serve. All Save the Children representatives—including employees, board members, partners, and volunteers—are expected to conduct themselves according to this commitment.</Text> 

           <Text style={styles.text}>No matter the challenge, they always put children first in everything they do.</Text>      

            <View style={{flexDirection:'row', justifyContent:'center', marginTop: 20}}>
              <TouchableOpacity onPress={this.handleClick} style={{width:250}}>
                <View style={styles.donateButton}>
                  <Text style={styles.donateButtonText}>Donate Here</Text>
                </View>
              </TouchableOpacity>
            </View>

          {/*--------D3 INFO TO GO HERE---------*/}
 
         <View style={{flexDirection:'row', justifyContent:'center', margin: 40}}>
            <TouchableOpacity onPress={this.handlePress} style={{width:100}}>
              <View style={styles.backButton}>
                <Text style={styles.backButtonText}>Go Back</Text>
              </View>
            </TouchableOpacity>
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
    resizeMode: "contain",
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
    marginTop: 20,
    color: 'white', 
    fontFamily: (Platform.OS === 'android') ? 'sans-serif-light' : 'Avenir-Light',
    fontSize:25, 
    textAlign:'center'
  },
  text: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
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
    marginTop: 30
  },
  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  },
  backButton: {
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    backgroundColor: 'white', 
    borderRadius: 50
  },
  backButtonText: {
    color: 'rgb(12,65,123)', 
    fontWeight: 'bold'
  },
  donateButton: {
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    backgroundColor: 'white', 
    borderRadius: 50
  },
  donateButtonText: {
    color: 'rgb(12,65,123)', 
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20
  }
});