import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Platform, ScrollView, Linking } from 'react-native';
import orgImg from '../org.jpg';

export default class Org18 extends Component {

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
    var url = 'https://secure.directrelief.org/site/Donation2;jsessionid=00000000.app217a?df_id=2105&mfc_pref=T&2105.donation=form1&_ga=2.161092029.1617892611.1507090793-870791245.1506374760&NONCE_TOKEN=5F80794239165A739A2716590F8E7971';

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
            <Text style={styles.title}>Direct Relief</Text>
          </View>
          <ScrollView>
          <Image
            style={styles.imageStyle}
            source={ orgImg }
          />

          <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
            <View style={styles.infoTextContainer}>
              <Text style={styles.bigInfoText}>4/4, A</Text>
              <Text style={styles.smallInfoText}>Rated</Text>
            </View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.bigInfoText}>1948</Text>
              <Text style={styles.smallInfoText}>Year Founded</Text>
            </View>
            {/*<View style={styles.infoTextContainer}>
              <Text style={styles.bigInfoText}>N/A</Text>
              <Text style={styles.smallInfoText}>Other</Text>
            </View>*/}
          </View>

          <Text style={styles.text}>Direct Relief is a humanitarian aid organization, active in all 50 states and more than 80 countries, with a mission to improve the health and lives of people affected by poverty or emergencies. Direct Relief provides assistance to people and communities without regard to politics, religious beliefs, or ethnic identities.</Text>

           <Text style={styles.text}>Direct Relief’s work earns wide recognition from independent charity evaluators, including a 100% fundraising efficiency rating from Forbes, the No. 1 spot on Charity Navigator’s list of the “10 Best Charities Everyone’s Heard Of,” and inclusion in Fast Company’s list of “the world’s most innovative nonprofits.”</Text>

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