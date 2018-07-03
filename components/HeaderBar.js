import React from "react"
import { StyleSheet, Text, View, Button } from "react-native"
import { Icon } from "native-base"

export default class HeaderBar extends React.Component {
  render() {
    return (
      <View>
        {/* <Button title="" style={styles.button} onPress={() => console.log("hello")}>
          <Icon name="menu" size="large" style={{ color: "white" }} />
        </Button> */}
        <Text style={styles.title}>diggity</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    paddingTop: 40,
    backgroundColor: "#57aaff",
    fontSize: 40,
    height: 125,
    textAlign: "center",
    fontFamily: "Avenir Next",
    color: "#f5fcff"
  },
  button: {
    width: 50,
    height: 50,
    position: "absolute",
    left: 0,
    top: 15,
    bottom: 15,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    verticalAlign: "center"
  }
})
