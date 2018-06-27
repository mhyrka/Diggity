import React from "react"
import { StyleSheet, Text, View } from "react-native"

export default class App extends React.Component {
  render() {
    return <Text style={styles.title}>diggity</Text>
  }
}

const styles = StyleSheet.create({
  title: {
    paddingTop: 40,
    backgroundColor: "#57aaff",
    fontSize: 40,
    height: 125,
    alignSelf: "stretch",
    textAlign: "center",
    fontFamily: "Avenir Next",
    color: "#f5fcff"
  }
})
