import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, StyleSheet, Platform, ScrollView } from 'react-native';
import orgImg from '../org.jpg';

export default class Org1 extends Component {

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

    // if (!this.state.loading) {

      return (
        <View style={styles.container}>

          <View style={styles.header}>
            <Text style={styles.title}>ORGANIZATION 1</Text>
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
              <Text style={styles.bigInfoText}>2006</Text>
              <Text style={styles.smallInfoText}>Year Founded</Text>
            </View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.bigInfoText}>N/A</Text>
              <Text style={styles.smallInfoText}>Other</Text>
            </View>
          </View>

          <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt purus sit amet iaculis semper. Suspendisse non felis purus. Etiam quis massa ut nisi rhoncus accumsan. Phasellus condimentum dapibus massa, sed molestie urna ornare in. Aliquam sollicitudin feugiat neque, tincidunt blandit turpis elementum nec. In sollicitudin enim in ex faucibus, ac aliquam sapien aliquam. Etiam sodales orci ac nunc fermentum molestie. In quis ultrices elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras eget congue lorem.</Text>

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
    //} 
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