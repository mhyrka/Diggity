import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (

        <Text style={styles.title}>DIGGITY</Text>

    );
  }
}

const styles = StyleSheet.create({
  title: {
    paddingTop: 50,
    backgroundColor: '#57aaff',
    fontSize: 30,
    height: 125,
    alignSelf: 'stretch',
    textAlign: 'center'
  }
});
