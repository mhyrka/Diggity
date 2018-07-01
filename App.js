import React from "react"
// import {
//   Alert,
//   AppRegistry,
//   Button,
//   StyleSheet,
//   View,
//   ScrollView,
//   Content,
//   AsyncStorage,
//   KeyboardAvoidingView
// } from "react-native"

// this
// import SocketIOClient from "socket.io-client"
import ProfileCards from "./components/ProfileCards"
import SendMessage from "./components/SendMessage"
import Map from "./components/Map"

import { Router, Scene } from "react-native-router-flux"

export default class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Router>
        <Scene key={"root"}>
          <Scene key={"ProfileCards"} component={ProfileCards} initial={true} hideNavBar={true} />
          <Scene key={"SendMessage"} component={SendMessage} title={"Send Message"} hideNavBar={true} />
          <Scene key={"Map"} component={Map} title={"Map View"} hideNavBar={true} />
        </Scene>
      </Router>
    )
  }
}
