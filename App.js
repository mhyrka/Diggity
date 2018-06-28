import React from "react"
import { Alert, AppRegistry, Button, StyleSheet, View, ScrollView, Content } from "react-native"
import { Container } from "native-base"
// import Header from "./components/Header"
import ProfileCards from "./components/ProfileCards"
import SendMessage from "./components/SendMessage"

// import FooterNav from "./components/FooterNav"
import { Router, Scene } from "react-native-router-flux"

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key={"root"}>
          <Scene key={"ProfileCards"} component={ProfileCards} initial={true} hideNavBar={true} />
          <Scene key={"SendMessage"} component={SendMessage} title={"SendMessage"} />
        </Scene>
      </Router>
    )
  }
}
