'use strict';

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, Platform, TextInput, ScrollView, Linking } from 'react-native';
import SearchBar from 'react-native-searchbar';
//import { SearchBar } from 'react-native-elements';
//import { Container, Header, Content, Card, CardItem, Body } from 'native-base';

const items = [
  'Neighborhood Health Clinic',
  'Heart of Florida United Way',
  'United Way of Miami-Dade',
  'All Faiths Food Bank',
  'Second Harvest Food Bank of Central Florida',
  'Boys and Girls Club of Miami Dade',
  'Austin Humane Society',
  'Houston Food Bank',
  'San Antonio Food Bank',
  'Houston Habitat for Humanity',
  'Greater Baton Rouge Food Bank',
  'United Way of Central Louisiana',
  'United Way of Greater Houston',
  'ConPRmetidos',
  'United for Puerto Rico',
  'All Hands Volunteer',
  'Catholic Relief Services',
  'Direct Relief',
  'Episcopal Relief and Development',
  'United Methodist Committee on Relief',
  'PetSmart Charities',
  'Operation USA',
  'Save the Children',
  'UNICEF USA',
  'International Medical Corps',
  'Lutheran World Relief',
  'Partners in Health'
]

// const items = [
//   {
//   name: 'Austin Humane Socieity',
//   disasters: ['Harvey']
//   },
//   {
//     name: 'Neighborhood Health Clinic',
//     disasters: ['Irma']
//   }
// ]


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

  //function to handle pushing correct page to stack from clicking search results
  pressOrg(result) {
    switch(result) {
      case 'Neighborhood Health Clinic':
        this.props.navigator.push({ 
          id: 6
        });
      break;
      case 'Heart of Florida United Way':
        this.props.navigator.push({ 
          id: 7
        });
      break;
      case 'United Way of Miami-Dade':
        this.props.navigator.push({ 
          id: 8
        });
      break;
      case 'All Faiths Food Bank':
        this.props.navigator.push({ 
          id: 9
        });
      break;
      case 'Second Harvest Food Bank of Central Florida':
        this.props.navigator.push({ 
          id: 10
        });
      break;
      case 'Boys and Girls Club of Miami Dade':
        this.props.navigator.push({ 
          id: 11
        });
      break;
      case 'Austin Humane Society':
        this.props.navigator.push({ 
          id: 12
        });
      break;
      case 'Houston Food Bank':
        this.props.navigator.push({ 
          id: 13
        });
      break;
      case 'San Antonio Food Bank':
        this.props.navigator.push({ 
          id: 14
        });
      break;
      case 'Houston Habitat for Humanity':
        this.props.navigator.push({ 
          id: 15
        });
      break;
      case 'Greater Baton Rouge Food Bank':
        this.props.navigator.push({ 
          id: 16
        });
      break;
      case 'United Way of Central Louisiana':
        this.props.navigator.push({ 
          id: 17
        });
      break;
      case 'United Way of Greater Houston':
        this.props.navigator.push({ 
          id: 18
        });
      break;
      case 'ConPRmetidos':
        this.props.navigator.push({ 
          id: 19
        });
      break;
      case 'United for Puerto Rico':
        this.props.navigator.push({ 
          id: 20
        });
      break;
      case 'All Hands Volunteer':
        this.props.navigator.push({ 
          id: 21
        });
      break;
      case 'Catholic Relief Services':
        this.props.navigator.push({ 
          id: 22
        });
      break;
      case 'Direct Relief':
        this.props.navigator.push({ 
          id: 23
        });
      break;
      case 'Episcopal Relief and Development':
        this.props.navigator.push({ 
          id: 24
        });
      break;
      case 'United Methodist Committee on Relief':
        this.props.navigator.push({ 
          id: 25
        });
      break;
      case 'PetSmart Charities':
        this.props.navigator.push({ 
          id: 26
        });
      break;
      case 'Operation USA':
        this.props.navigator.push({ 
          id: 27
        });
      break;
      case 'Save the Children':
        this.props.navigator.push({ 
          id: 28
        });
      break;
      case 'UNICEF USA':
        this.props.navigator.push({ 
          id: 29
        });
      break;
      case 'International Medical Corps':
        this.props.navigator.push({ 
          id: 30
        });
      break;
      case 'Lutheran World Relief':
        this.props.navigator.push({ 
          id: 31
        });
      break;
      case 'Partners in Health':
        this.props.navigator.push({ 
          id: 32
        });
      break;
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

  pressOrg4(charity) {
    this.props.navigator.push({ 
      id: 9
    });
  }

  pressOrg5(charity) {
    this.props.navigator.push({ 
      id: 10
    });
  }

  pressOrg6(charity) {
    this.props.navigator.push({ 
      id: 11
    });
  }

  pressOrg7(charity) {
    this.props.navigator.push({ 
      id: 12
    });
  }

  pressOrg8(charity) {
    this.props.navigator.push({ 
      id: 13
    });
  }

  pressOrg9(charity) {
    this.props.navigator.push({ 
      id: 14
    });
  }

  pressOrg10(charity) {
    this.props.navigator.push({ 
      id: 15
    });
  }

  pressOrg11(charity) {
    this.props.navigator.push({ 
      id: 16
    });
  }

  pressOrg12(charity) {
    this.props.navigator.push({ 
      id: 17
    });
  }

  pressOrg13(charity) {
    this.props.navigator.push({ 
      id: 18
    });
  }

  pressOrg14(charity) {
    this.props.navigator.push({ 
      id: 19
    });
  }

  pressOrg15(charity) {
    this.props.navigator.push({ 
      id: 20
    });
  }

  pressOrg16(charity) {
    this.props.navigator.push({ 
      id: 21
    });
  }

  pressOrg17(charity) {
    this.props.navigator.push({ 
      id: 22
    });
  }

  pressOrg18(charity) {
    this.props.navigator.push({ 
      id: 23
    });
  }

  pressOrg19(charity) {
    this.props.navigator.push({ 
      id: 24
    });
  }

  pressOrg20(charity) {
    this.props.navigator.push({ 
      id: 25
    });
  }

  pressOrg21(charity) {
    this.props.navigator.push({ 
      id: 26
    });
  }

  pressOrg22(charity) {
    this.props.navigator.push({ 
      id: 27
    });
  }

  pressOrg23(charity) {
    this.props.navigator.push({ 
      id: 28
    });
  }

  pressOrg24(charity) {
    this.props.navigator.push({ 
      id: 29
    });
  }

  pressOrg25(charity) {
    this.props.navigator.push({ 
      id: 30
    });
  }

  pressOrg26(charity) {
    this.props.navigator.push({ 
      id: 31
    });
  }

  pressOrg27(charity) {
    this.props.navigator.push({ 
      id: 32
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
                <TouchableOpacity key={i} onPress={() => this.pressOrg(result)} style={styles.outerButton}>
                  <Text key={i}>
                    {typeof result === 'object' && !(result instanceof Array) ? 'no results found' : result.toString()}
                  </Text>
                </TouchableOpacity>
              );
            })
          }

          <TouchableOpacity onPress={() => this.searchBar.show()}>
            <Text style={styles.search}>SEARCH</Text>
          </TouchableOpacity>
        </View>
        
          <SearchBar
            ref={(ref) => this.searchBar = ref}
            data={items}
            handleResults={this._handleResults}
          />
        <ScrollView>
        <Text style={styles.text}>The list of charities below is complete with information on what disasters each charity is helping with, and a rating. Ratings are taken from Charity Navigator and Charity Watch.</Text>

        <Text style={styles.text}>All charities have been vetted, regardless of whether or not they are complete with a rating.</Text>

        <Text style={styles.infoText}>LOCAL</Text>
        {/*Each button will call the press function with a different charity/organization name*/}
        <TouchableOpacity onPress={() => this.pressOrg1('Neighborhood Health Clinic')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}>Neighborhood Health Clinic</Text>
                <Text style={styles.actionTextSmall}>Hurricane Irma, 4/4</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.pressOrg2('Heart of Florida United Way')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}>Heart of Florida United Way</Text>
                <Text style={styles.actionTextSmall}>Hurricane Irma, 4/4</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.pressOrg3('United Way of Miami-Dade')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}>United Way of Miami-Dade</Text>
                <Text style={styles.actionTextSmall}>Hurricane Irma, 3/4</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.pressOrg4('All Faiths Food Bank')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}>All Faiths Food Bank</Text>
                <Text style={styles.actionTextSmall}>Hurricane Irma, 4/4</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.pressOrg5('Second Harvest Food Bank of Central Florida')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}>Second Harvest Food Bank of Central Florida</Text>
                <Text style={styles.actionTextSmall}>Hurricane Irma, 4/4</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.pressOrg6('Boys and Girls Club of Miami Dade')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}>Boys and Girls Club of Miami Dade</Text>
                <Text style={styles.actionTextSmall}>Hurricane Irma, 4/4</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.pressOrg7('Austin Humane Society')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}>Austin Humane Society</Text>
                <Text style={styles.actionTextSmall}>Hurricane Harvey, 3/4</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.pressOrg8('Houston Food Bank')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}>Houston Food Bank</Text>
                <Text style={styles.actionTextSmall}>Hurricane Harvey, 4/4</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.pressOrg9('San Antonio Food Bank')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}>San Antonio Food Bank</Text>
                <Text style={styles.actionTextSmall}>Hurricane Harvey, 4/4</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.pressOrg10('Houston Habitat for Humanity')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}>Houston Habitat for Humanity</Text>
                <Text style={styles.actionTextSmall}>Hurricane Harvey, 4/4</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.pressOrg11('Greater Baton Rouge Food Bank')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}>Greater Baton Rouge Food Bank</Text>
                <Text style={styles.actionTextSmall}>Hurricane Harvey, 4/4</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.pressOrg12('United Way of Central Louisiana')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}>United Way of Central Louisiana</Text>
                <Text style={styles.actionTextSmall}>Hurricane Harvey, 4/4</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.pressOrg13('United Way of Greater Houston')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}>United Way of Greater Houston</Text>
                <Text style={styles.actionTextSmall}>Hurricane Harvey, 4/4</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.pressOrg14('ConPRmetidos')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}>ConPRmetidos</Text>
                <Text style={styles.actionTextSmall}>Hurricane Maria</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.pressOrg15('United for Puerto Rico')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}>United for Puerto Rico</Text>
                <Text style={styles.actionTextSmall}>Hurricane Maria</Text>
            </View>
        </TouchableOpacity>



        <Text style={styles.infoText}>GLOBAL</Text>
        <TouchableOpacity onPress={() => this.pressOrg16('All Hands Volunteer')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}>All Hands Volunteer</Text>
                <Text style={styles.actionTextSmall}>Hurricanes Irma, Harvey, and Maria</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.pressOrg17('Catholic Relief Services')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}>Catholic Relief Services</Text>
                <Text style={styles.actionTextSmall}>Hurricanes Irma, Harvey, and Maria; earthquakes in Mexico</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.pressOrg18('Direct Relief')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}>Direct Relief</Text>
                <Text style={styles.actionTextSmall}>Hurricanes Irma, Harvey, and Maria; earthquakes in Mexico</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.pressOrg19('Episcopal Relief and Development')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}>Episcopal Relief and Development</Text>
                <Text style={styles.actionTextSmall}>Hurricanes Irma, Harvey, and Maria</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.pressOrg20('United Methodist Committee on Relief')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}>United Methodist Committee on Relief</Text>
                <Text style={styles.actionTextSmall}>Hurricanes Irma, Harvey, and Maria; earthquakes in Mexico</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.pressOrg21('PetSmart Charities')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}>PetSmart Charities</Text>
                <Text style={styles.actionTextSmall}>Hurricanes Irma and Harvey</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.pressOrg22('Operation USA')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}>Operation USA</Text>
                <Text style={styles.actionTextSmall}>Hurricanes Irma, Harvey, and Maria; earthquakes in Mexico</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.pressOrg23('Save the Children')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}>Save the Children</Text>
                <Text style={styles.actionTextSmall}>Hurricanes Irma, Harvey, and Maria; earthquakes in Mexico</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.pressOrg24('UNICEF USA')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}>UNICEF USA</Text>
                <Text style={styles.actionTextSmall}>Hurricanes Irma, Harvey, and Maria; earthquakes in Mexico</Text>
            </View>
        </TouchableOpacity>


        <Text style={styles.infoText}>GLOBAL (NON-USA)</Text>
        <TouchableOpacity onPress={() => this.pressOrg25('International Medical Corps')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}>International Medical Corps</Text>
                <Text style={styles.actionTextSmall}>Hurricanes Irma and Maria; earthquakes in Mexico</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.pressOrg26('Lutheran World Relief')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}>Lutheran World Relief</Text>
                <Text style={styles.actionTextSmall}>Hurricanes Irma and Maria</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.pressOrg27('Partners in Health')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}>Partners in Health</Text>
                <Text style={styles.actionTextSmall}>Hurricane Irma; earthquakes in Mexico</Text>
            </View>
        </TouchableOpacity>

        <View style={{flexDirection:'row', justifyContent:'center', margin: 40}}>
            <TouchableOpacity onPress={this.handlePress} style={{width:100}}>
            <View style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: 'white', borderRadius: 50}}>
                <Text style={{color: 'rgba(12,65,123,1)', fontWeight: 'bold'}}>Go Back</Text>
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
    color: '#fff'
  },
  infoText: {
    marginTop: 10,
    marginBottom: 10,
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 25, 
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
    marginBottom: 20,
    color: 'rgb(12,65,123)',
    fontFamily: (Platform.OS === 'android') ? 'sans-serif-light' : 'Avenir-Light',
    textAlign: 'center'
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(12,65,123)',
    height: 50, 
    marginTop: 30
  },
  title: {
    color: '#fff',
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
    backgroundColor: 'rgb(49,140,231)',
    borderRadius: 50
  },
  actionText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  actionTextSmall: {
    color: '#fff'
  },
  search: {
    marginBottom: 20,
    height: 40, 
    textAlign:'center', 
    fontWeight:'bold', 
    paddingVertical: 10,
    backgroundColor: 'gray',
    color: '#fff',
    fontSize: 18
  }
});