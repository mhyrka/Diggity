import React from "react"

// import SocketIOClient from "socket.io-client"
// import Expo from "expo"
import SplashScreen from "./components/SplashScreen"
import ProfileCards from "./components/ProfileCards"
import SendMessage from "./components/SendMessage"
import MyMessages from "./components/MyMessages"
import Map from "./components/Map"
import Friends from "./components/Friends"
import Login from "./components/Login"
// const io = require("socket.io-client")

import { Router, Scene, Action } from "react-native-router-flux"

export default class App extends React.Component {
  state = {
    showSplash: true,
    showProfiles: false
  }

  render() {
    return (
      <Router>
        <Scene key={"root"}>
          <Scene key={"SplashScreen"} component={SplashScreen} initial={true} hideNavBar={true} />
          <Scene key={"Login"} component={Login} hideNavBar={true} />
          <Scene key={"ProfileCards"} component={ProfileCards} hideNavBar={true} />
          <Scene key={"MyMessages"} component={MyMessages} hideNavBar={true} />
          <Scene key={"SendMessage"} component={SendMessage} title={"Send Message"} hideNavBar={true} />
          <Scene key={"Map"} component={Map} title={"Map View"} hideNavBar={true} />
          <Scene key={"Friends"} component={Friends} title={"Friends View"} hideNavBar={true} />
        </Scene>
      </Router>
    )
  }
}

// Expo.registerRootComponent(App)
