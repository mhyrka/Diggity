import React from "react"
import { Alert, AppRegistry, Button, StyleSheet, View, ScrollView, Content, Text, TextInput } from "react-native"
import { Actions } from "react-native-router-flux"
import Header from "./Header"
import FooterNav from "./FooterNav"

export default class SendMessage extends React.Component {
  state = {
    text: ""
  }
  render() {
    return (
      <View>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => this.setState({ text })}
        />
        <Button title={"Go Back"} onPress={Actions.ProfileCards}>
          Go Back
        </Button>
      </View>
    )
  }
}
