import React from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';
import Header from './components/Header'
import ProfileCards from './components/ProfileCards'
import FooterNav from './components/FooterNav'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <Header />
        <ProfileCards />
        <FooterNav />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: 900,
    margin: 0,
    top: 0,
    bottom: 0,



  }
});
