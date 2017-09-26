import React, { Component } from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity, Image, StyleSheet, Dimensions, Platform } from 'react-native';
import SearchBar from 'react-native-searchbar'

const items = [
  'Neighborhood Health Clinic',
  'Heart of Florida United Way',
  'United Way of Miami-Dade'
]

export default class Donate extends Component {

  //added items and results
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      items,
      results: []
    //   organization: ''
    };
    this.handlePress = this.handlePress.bind(this);
  }

  //to handle results for the search bar
  _handleResults(results) {
    this.setState({ results });
  }

  pressOrg1(charity) {
    this.props.navigator.push({ 
      id: 6
    });
  }

  pressOrg2(charity) {
    this.props.navigator.push({ 
      id: 7
    });
  }

  pressOrg3(charity) {
    this.props.navigator.push({ 
      id: 8
    });
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
            <Text style={styles.title}>CHARITIES</Text>
        </View>

        <TouchableOpacity onPress={() => this.searchBar.show()}>
          <Text style={{ backgroundColor: 'green', height: 30, textAlign:'center' }}>Search</Text>
        </TouchableOpacity>

        <SearchBar
          ref={(ref) => this.searchBar = ref}
          data={items}
          handleResults={this._handleResults}
          
        />

        <Text style={styles.smallInfoText}>LOCAL</Text>
        {/*Each button will call the press function with a different charity/organization name*/}
        <TouchableHighlight onPress={() => this.pressOrg1('Organization1')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}><Text style={{color:'#fff'}}>Neighborhood Health Clinic</Text></Text>
            </View>
        </TouchableHighlight>
        <Text style={styles.smallInfoText}>NON-LOCAL</Text>
        <TouchableHighlight onPress={() => this.pressOrg2('Organization2')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}><Text style={{color:'#fff'}}>ORG 2</Text></Text>
            </View>
        </TouchableHighlight>
        <Text style={styles.smallInfoText}>GLOBAL NON-USA</Text>
        <TouchableHighlight onPress={() => this.pressOrg3('Organization3')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}><Text style={{color:'#fff'}}>ORG 3</Text></Text>
            </View>
        </TouchableHighlight>
        <Text style={styles.smallInfoText}>GLOBAL</Text>

        <View style={{flexDirection:'row', justifyContent:'center', margin: 40}}>
            <TouchableHighlight onPress={this.handlePress} style={{width:100}}>
            <View style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: 'white', borderRadius: 50}}>
                <Text style={{color: 'rgba(12,65,123,1)', fontWeight: 'bold'}}>Go Back</Text>
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
    backgroundColor: 'rgb(192,192,192)'
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
    fontFamily: (Platform.OS === 'android') ? 'sans-serif-light' : 'Avenir-Light',
    textAlign:'center'
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
    backgroundColor: '#fff',
    height: 50
  },
  title: {
    color: 'rgb(12,65,123)',
    fontSize: 25,
    fontWeight: 'bold'
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