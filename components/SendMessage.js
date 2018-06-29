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

const NAME = "Matt H"
const CHANNEL = "9018717640"
const AVATAR = ""

export default class App extends React.Component {
  state = {
    typing: "",
    messages: []
  }

  componentWillMount() {
    subscribe(CHANNEL, messages => {
      this.setState({ messages })
    })
  }

  sendMessage = async () => {
    // read message from component state
    const message = this.state.typing

    // send message to our channel, with sender name
    await send({
      channel: CHANNEL,
      sender: NAME,
      avatar: AVATAR,
      message
    })

    // set the component state (clears text input)
    this.setState({
      typing: ""
    })
  }

  renderItem({ item }) {
    return (
      <View style={styles.row}>
        <Image style={styles.avatar} source={{ uri: item.avatar }} />
        <View style={styles.rowText}>
          <Text style={styles.sender}>{item.sender}</Text>
          <Text style={styles.message}>{item.message}</Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <MessageHeader title={"Send Message"} />
        <FlatList data={this.state.messages} renderItem={this.renderItem} inverted />
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.footer}>
            <TextInput
              value={this.state.typing}
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Type something nice"
              onChangeText={text => this.setState({ typing: text })}
            />
            <TouchableOpacity onPress={this.sendMessage}>
              <Text style={styles.send}>Send</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
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
  }
})
