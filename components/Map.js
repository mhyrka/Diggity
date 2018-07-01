import React, { Component } from "react"
import { Alert, AppRegistry, Button, StyleSheet, View, ScrollView, Content } from "react-native"
import FooterNav from "./FooterNav"
import MapView from "react-native-maps"

export default class Map extends Component {
  constructor(props) {
    super(props)

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      activeButton: "map",
      coordinatesLoaded: false,
      profiles: []
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState(
          {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null
          },
          () => this.setState({ coordinatesLoaded: true })
        )
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
    fetch("https://diggity-backend.herokuapp.com/profiles")
      .then(response => response.json())
      .then(response => this.setState({ profiles: response }))
      .catch(function(error) {
        console.log("There has been a problem with your fetch operation: " + error.message)
        throw error
      })
  }

  render() {
    return (
      <View style={{ flexGrow: 1, alignItems: "center", justifyContent: "center" }}>
        {this.state.coordinatesLoaded ? (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          >
            <MapView.Marker
              coordinate={{
                latitude: this.state.latitude,
                longitude: this.state.longitude
              }}
            >
              <View style={styles.radius}>
                <View style={styles.marker} />
              </View>
            </MapView.Marker>
            {this.state.profiles.map(profile => {
              return (
                <MapView.Marker
                  coordinate={{
                    latitude: profile.location.coords.latitude,
                    longitude: profile.location.coords.longitude
                  }}
                />
              )
            })}
          </MapView>
        ) : null}

        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
        <FooterNav activeButton={this.state.activeButton} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  map: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute"
  },
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: "hidden",
    backgroundColor: "rgba(0, 122, 255, 0.3)",
    borderWidth: 1,
    borderColor: "rgba(0, 112, 255, 0.3)",
    alignItems: "center",
    justifyContent: "center"
  },
  marker: {
    height: 20,
    width: 20,
    borderRadius: 20 / 2,
    borderWidth: 3,
    borderColor: "white",
    overflow: "hidden",
    backgroundColor: "#007AFF"
  }
})
