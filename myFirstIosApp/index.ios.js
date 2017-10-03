/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Greeting from './src/component/greeting.js'

// class Greeting extends Component {
//   render(){
//     return (
//       <Text>Hello {this.props.name}</Text>
//     )
//   }
// }

export default class myFirstIosApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Greeting name="cc" style={styles.welcome}>
          
        </Greeting>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('myFirstIosApp', () => myFirstIosApp);
