import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Platform, ScrollView, Linking } from 'react-native';
import orgImg from '../img/second-harvest-foodbank.png';

export default class Org5 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.handlePress = this.handlePress.bind(this);
  }

  //function to handle url click to donation page in browser
  handleClick() {
    var url = 'https://secure3.convio.net/fbcf/site/Donation2;jsessionid=00000000.app338a?df_id=2660&2660.donation=form1&NONCE_TOKEN=4EF2C8B50ED92EE5365DDA4376559822';

    Linking.canOpenURL(url).then(supported => {
      if(supported) {
        Linking.openURL(url);
      } else {
        console.log('Cannot open: ' + url);
      }
    });
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
            <Text style={styles.title}>Second Harvest Food Bank of Central Florida</Text>
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
            {/*<View style={styles.infoTextContainer}>
              <Text style={styles.bigInfoText}>N/A</Text>
              <Text style={styles.smallInfoText}>Other</Text>
            </View>*/}
          </View>

          <Text style={styles.text}>Mission: To create hope and nourish lives through a powerful hunger relief network, while multiplying the generosity of a caring community.</Text>

           <Text style={styles.text}>Second Harvest Food Bank of Central Florida is a private, nonprofit organization that collects, stores, and distributes donated food to more than 550 feeding partners in six Central Florida counties: Brevard, Lake, Orange, Osceola, Seminole, and Volusia. Last year, with the help of numerous donors, volunteers, and a caring, committed community, the food bank distributed 52 million meals to partner programs such as food pantries, soup kitchens, women’s shelters, senior centers, day care centers, and Kids Cafes.</Text>

           <Text style={styles.text}>In addition to helping feed neighbors who need help, Second Harvest also transforms dozens of lives directly every year. Economically-challenged adults who graduate from their 14-week culinary training program are placed in ‘better than minimum wage’ jobs that set them and their families on a path to self-sustainability. Yet another important activity helps connect people who are eligible to receive SNAP food assistance benefits with the resources they need to access the program and get help.</Text>      

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
    height: 70,
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