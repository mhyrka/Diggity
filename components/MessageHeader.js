import React from "react"
import { View, Text, StyleSheet, StatusBar, Button } from "react-native"
import Icon from "react-native-vector-icons"

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Button title="" style={styles.button}>
          <Icon name="ios-arrow-back" />
        </Button>
        <StatusBar backgroundColor="lightseagreen" barStyle="light-content" />
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: "#57aaff",
    alignItems: "center",
    // justifyContent: "flex-end",
    padding: 10,
    flexDirection: "row"
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24
  },
  button: {
    position: "absolute"
  }
})
