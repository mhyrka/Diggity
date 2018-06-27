import React from "react"
import { Alert, AppRegistry, Button, StyleSheet, View, ScrollView, Content } from "react-native"
import { Container } from "native-base"
import Header from "./components/Header"
import ProfileCards from "./components/ProfileCards"
import FooterNav from "./components/FooterNav"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      profiles: []
    }
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
        <Header />
        <ScrollView style={{ marginTop: 0, marginBottom: 0, padding: 0 }}>
          {this.state.profiles.map((profile, index) => {
            return (
              <ProfileCards
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
        <FooterNav />
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
