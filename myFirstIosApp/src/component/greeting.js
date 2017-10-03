import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';

export default class Greeting extends Component {
    render (){
        return (
            <Text style={styles.welcome}>Hello {this.props.name}</Text>
        )
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
    }
})