import React, { Component } from "react"
import {
  StyleSheet,
  Dimensions,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  FlatList,
  Image
} from "react-native"
import { Actions } from "react-native-router-flux"
import ProfileCards from "./ProfileCards"
const imageWidth = Dimensions.get("window").width

export default class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      Actions.Login()
    }, 3000)
  }

  render() {
    return (
      <View style={styles.splashPage}>
        <Image source={require("../assets/diggity.png")} style={styles.containerImage} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  splashPage: {
    flex: 1,
    backgroundColor: "#57aaff",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  containerImage: {
    width: imageWidth,
    height: imageWidth
  }
})
