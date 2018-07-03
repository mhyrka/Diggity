import React from "react"
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  FlatList,
  Image
} from "react-native"
import { Icon } from "react-native-vector-icons"
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from "native-base"
import { send, subscribe } from "react-native-training-chat-server"
import MessageHeader from "./MessageHeader"
import FooterNav from "./FooterNav"

const NAME = "Matt H"
const CHANNEL = "9018717641"
const AVATAR = ""

export default class MyMessages extends React.Component {
  state = {
    messages: [],
    activeButton: "chat"
  }

  componentDidMount() {
    fetch("https://diggity-backend.herokuapp.com/profiles/5b3a955b4c9ecc00149b41c8")
      .then(response => response.json())
      .then(response => this.setState({ messages: this.state.messages.concat(response.messages) }))
  }

  render() {
    return (
      <View style={styles.container}>
        <MessageHeader title={"My Messages"} />
        <Container>
          <Content>
            <List>
              {this.state.messages.map(message => {
                return (
                  <ListItem
                    avatar
                    button
                    onPress={() => {
                      console.log("hello")
                    }}
                    enableEmptySections={false}
                  >
                    <Left>
                      <Thumbnail
                        source={{
                          uri:
                            "https://s3.us-east-2.amazonaws.com/diggity-image-hosting/adorable-animal-bull-160846.jpg"
                        }}
                      />
                    </Left>
                    <Body>
                      <Text>{message.user}</Text>
                      <Text note>{message.message}</Text>
                    </Body>
                    <Right>
                      <Text note>3:43 pm</Text>
                    </Right>
                  </ListItem>
                )
              })}
            </List>
          </Content>
        </Container>
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
