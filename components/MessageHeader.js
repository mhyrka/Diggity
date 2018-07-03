import React from "react"
import { View, Text, StyleSheet, StatusBar } from "react-native"
import { Icon, Button } from "native-base"
import { Actions } from "react-native-router-flux"

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Button title="" style={styles.button} onPress={Actions.ProfileCards}>
          <Icon name="ios-arrow-back" size="large" style={styles.backIcon} />
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
    verticalAlign: "center",
    justifyContent: "center",
    padding: 10,
    flexDirection: "row"
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    alignSelf: "center",
    marginTop: 10
  },
  button: {
    width: 50,
    height: 50,
    position: "absolute",
    left: 0,
    marginTop: 5,

    top: 15,
    bottom: 15,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    verticalAlign: "center"
  },
  backIcon: {
    color: "white",
    fontSize: 34
  }
})
