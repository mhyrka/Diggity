import React, { Component } from "react"
import { Alert, AppRegistry, Button, StyleSheet, View, ScrollView, Content } from "react-native"
import { Actions } from "react-native-router-flux"
import Profile from "./Profile"
import HeaderBar from "./HeaderBar"
import FooterNav from "./FooterNav"

export default class ProfileCards extends Component {
  state = {
    isLoaded: false,
    profiles: [],
    activeButton: "home"
  }

  componentDidMount() {
    return fetch("https://diggity-backend.herokuapp.com/profiles")
      .then(response => response.json())
      .then(response => this.setState({ profiles: response }))
      .catch(function(error) {
        console.log("There has been a problem with your fetch operation: " + error.message)
        throw error
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderBar />

        <ScrollView style={{ marginTop: 0, marginBottom: 0, padding: 0 }}>
          {this.state.profiles.map((profile, index) => {
            return (
              <Profile
                name={profile.name}
                age={profile.age}
                location={profile.locations}
                image={profile.image}
                key={index}
                index={index}
                profilesLength={this.state.profiles.length}
              />
            )
          })}
        </ScrollView>
        <FooterNav activeButton={this.state.activeButton} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    margin: 0,
    top: 0,
    bottom: 0
  },
  bottomBorder: {
    marginBottom: 40
  }
})
