import React from "react"
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  FlatList,
  Image
} from "react-native"
import { Icon } from "react-native-vector-icons"
import { send, subscribe } from "react-native-training-chat-server"
import MessageHeader from "./MessageHeader"
import FooterNav from "./FooterNav"

export default class Friends extends React.Component {
  state = {
    messages: [],
    activeButton: "md-people"
  }
  render() {
    return (
      <View style={styles.container}>
        <MessageHeader title={"My Friends"} />
        {/* <FlatList data={this.state.messages} renderItem={this.renderItem} inverted /> */}
        {/* <KeyboardAvoidingView behavior="padding">
          <View style={styles.footer}>
            <TextInput
              value={this.state.typing}
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Let's Play!"
              onChangeText={text => this.setState({ typing: text })}
            />
            <TouchableOpacity onPress={this.sendMessage}>
              <Text style={styles.send}>Send</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView> */}
        <FooterNav activeButton={this.state.activeButton} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  row: {
    flexDirection: "row",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  },
  avatar: {
    borderRadius: 20,
    width: 40,
    height: 40,
    marginRight: 10
  },
  rowText: {
    flex: 1
  },
  message: {
    fontSize: 18
  },
  sender: {
    fontWeight: "bold",
    paddingRight: 10
  },
  footer: {
    flexDirection: "row",
    backgroundColor: "#eee"
  },
  input: {
    paddingHorizontal: 20,
    fontSize: 18,
    flex: 1
  },
  send: {
    alignSelf: "center",
    color: "#57aaff",
    fontSize: 16,
    fontWeight: "bold",
    padding: 20
  },
  messageBubble: {
    borderRadius: 5,
    marginTop: 8,
    marginRight: 10,
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    flex: 1
  }
})
