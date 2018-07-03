import React, { Component } from "react"
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from "native-base"
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

export default class StackedLabelExample extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#57aaff", justifyContent: "center" }}>
        <Text style={styles.title}>diggity</Text>

        <Content style={{ top: 30 }}>
          <View>
            <KeyboardAvoidingView behavior="padding">
              <Form>
                <Item stackedLabel style={{ right: 7 }}>
                  <Label>Username</Label>
                  <Input />
                </Item>
                <Item stackedLabel style={{ right: 7 }}>
                  <Label>Password</Label>
                  <Input />
                </Item>
              </Form>
              <Button block light style={{ top: 40 }} onPress={Actions.ProfileCards}>
                <Text>Create my Account</Text>
              </Button>
            </KeyboardAvoidingView>
          </View>
        </Content>
      </Container>
    )
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
