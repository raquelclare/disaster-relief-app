import React, { Component } from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity, Image, StyleSheet, Dimensions, Platform, TextInput } from 'react-native';
import SearchBar from 'react-native-searchbar';
//import { SearchBar } from 'react-native-elements';
//import { Container, Header, Content, Card, CardItem, Body } from 'native-base';

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
      // loading: true,
      items,
      results: []
    //   organization: ''
    };
    this.handlePress = this.handlePress.bind(this);
    // I added this and I no longer get the "this.setState is undefined" error
    this._handleResults = this._handleResults.bind(this);
  }

  //to handle results for the search bar
  _handleResults(results) {
    this.setState({ results });
  }

  pressOrg(result) {
    console.log("result:", result);
    if(result === "Neighborhood Health Clinic") {
      this.props.navigator.push({ 
        id: 6
      });
    } else if (result === "Heart of Florida United Way") {
      this.props.navigator.push({ 
        id: 7
      });
    } else if (result === "United Way of Miami-Dade") {
      this.props.navigator.push({ 
        id: 8
      });
    }
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

        <View>
          {
            this.state.results.map((result, i) => {
              return (
                <TouchableHighlight key={i} onPress={() => this.pressOrg(result)} style={styles.outerButton}>
                  <Text key={i}>
                    {typeof result === 'object' && !(result instanceof Array) ? 'no results found' : result.toString()}
                  </Text>
                </TouchableHighlight>
              );
            })
          }

          <TouchableOpacity onPress={() => this.searchBar.show()}>
            <Text style={{ height: 50, textAlign:'center', fontWeight:'bold', color:'gray' }}>SEARCH</Text>
          </TouchableOpacity>
        </View>
        
          <SearchBar
            ref={(ref) => this.searchBar = ref}
            data={items}
            handleResults={this._handleResults}
          />
        
        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt purus sit amet iaculis semper. Suspendisse non felis purus. Etiam quis massa ut nisi rhoncus accumsan. Phasellus condimentum dapibus massa, sed molestie urna ornare in. Aliquam sollicitudin feugiat neque, tincidunt blandit turpis elementum nec. In sollicitudin enim in ex faucibus, ac aliquam sapien aliquam. Etiam sodales orci ac nunc fermentum molestie. In quis ultrices elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras eget congue lorem.</Text>

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
        <Text style={styles.smallInfoText}>GLOBAL (NON-USA)</Text>
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
    backgroundColor: '#fff'
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
    color: 'gray', 
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
    color: 'rgb(12,65,123)',
    fontFamily: (Platform.OS === 'android') ? 'sans-serif-light' : 'Avenir-Light',
    textAlign: 'center'
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 50, 
    marginTop: 30
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