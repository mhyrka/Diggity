import React, { Component } from "react"
import { View, Text } from "react-native"
import FooterNav from "./FooterNav"

export default class MapView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      activeButton: "map"
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        })
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
    // this.setState({ activeButton: "map" })
  }

  render() {
    return (
      <View style={{ flexGrow: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
        <FooterNav activeButton={this.state.activeButton} />
      </View>
    )
  }
}
