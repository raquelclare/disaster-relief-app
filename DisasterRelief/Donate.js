import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, Platform, TextInput, ScrollView } from 'react-native';
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
            <Text style={{ height: 50, textAlign:'center', fontWeight:'bold', color:'gray' }}>SEARCH</Text>
          </TouchableOpacity>
        </View>
        
          <SearchBar
            ref={(ref) => this.searchBar = ref}
            data={items}
            handleResults={this._handleResults}
          />
        <ScrollView>
        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt purus sit amet iaculis semper. Suspendisse non felis purus. Etiam quis massa ut nisi rhoncus accumsan. Phasellus condimentum dapibus massa, sed molestie urna ornare in. Aliquam sollicitudin feugiat neque, tincidunt blandit turpis elementum nec. In sollicitudin enim in ex faucibus, ac aliquam sapien aliquam. Etiam sodales orci ac nunc fermentum molestie. In quis ultrices elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras eget congue lorem.</Text>

        <Text style={styles.smallInfoText}>LOCAL</Text>
        {/*Each button will call the press function with a different charity/organization name*/}
        <TouchableOpacity onPress={() => this.pressOrg1('Organization1')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}><Text style={{color:'#fff'}}>Neighborhood Health Clinic</Text></Text>
            </View>
        </TouchableOpacity>
        <Text style={styles.smallInfoText}>GLOBAL</Text>
        <TouchableOpacity onPress={() => this.pressOrg2('Organization2')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}><Text style={{color:'#fff'}}>ORG 2</Text></Text>
            </View>
        </TouchableOpacity>
        <Text style={styles.smallInfoText}>GLOBAL (NON-USA)</Text>
        <TouchableOpacity onPress={() => this.pressOrg3('Organization3')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}><Text style={{color:'#fff'}}>ORG 3</Text></Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pressOrg4('Organization3')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}><Text style={{color:'#fff'}}>ORG 4</Text></Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pressOrg5('Organization3')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}><Text style={{color:'#fff'}}>ORG 5</Text></Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pressOrg6('Organization3')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}><Text style={{color:'#fff'}}>ORG 6</Text></Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pressOrg7('Organization3')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}><Text style={{color:'#fff'}}>ORG 7</Text></Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pressOrg3('Organization3')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}><Text style={{color:'#fff'}}>ORG 3</Text></Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pressOrg3('Organization3')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}><Text style={{color:'#fff'}}>ORG 3</Text></Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pressOrg3('Organization3')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}><Text style={{color:'#fff'}}>ORG 3</Text></Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pressOrg3('Organization3')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}><Text style={{color:'#fff'}}>ORG 3</Text></Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pressOrg3('Organization3')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}><Text style={{color:'#fff'}}>ORG 3</Text></Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pressOrg3('Organization3')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}><Text style={{color:'#fff'}}>ORG 3</Text></Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pressOrg3('Organization3')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}><Text style={{color:'#fff'}}>ORG 3</Text></Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pressOrg3('Organization3')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}><Text style={{color:'#fff'}}>ORG 3</Text></Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pressOrg3('Organization3')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}><Text style={{color:'#fff'}}>ORG 3</Text></Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pressOrg3('Organization3')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}><Text style={{color:'#fff'}}>ORG 3</Text></Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pressOrg3('Organization3')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}><Text style={{color:'#fff'}}>ORG 3</Text></Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pressOrg3('Organization3')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}><Text style={{color:'#fff'}}>ORG 3</Text></Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pressOrg3('Organization3')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}><Text style={{color:'#fff'}}>ORG 3</Text></Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pressOrg3('Organization3')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}><Text style={{color:'#fff'}}>ORG 3</Text></Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pressOrg3('Organization3')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}><Text style={{color:'#fff'}}>ORG 3</Text></Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pressOrg3('Organization3')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}><Text style={{color:'#fff'}}>ORG 3</Text></Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pressOrg3('Organization3')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}><Text style={{color:'#fff'}}>ORG 3</Text></Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pressOrg3('Organization3')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}><Text style={{color:'#fff'}}>ORG 3</Text></Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pressOrg3('Organization3')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}><Text style={{color:'#fff'}}>ORG 3</Text></Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pressOrg3('Organization3')} style={styles.outerButton}>
            <View style={styles.innerButton}>
                <Text style={styles.actionText}><Text style={{color:'#fff'}}>ORG 3</Text></Text>
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
  }
});