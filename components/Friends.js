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
import { ListItem, Left, Thumbnail, Body, Right, Container, Content, List } from "native-base"
import MessageHeader from "./MessageHeader"
import FooterNav from "./FooterNav"

export default class Friends extends React.Component {
  state = {
    friends: [],
    activeButton: "md-people"
  }

  componentDidMount() {
    fetch("https://diggity-backend.herokuapp.com/profiles/5b3bce57e6eed00014b0af4d")
      .then(response => response.json())
      .then(response => this.setState({ friends: this.state.friends.concat(response.friends) }))
  }

  removeDuplicates = (myArr, prop) => {
    return myArr.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <MessageHeader title={"My Friends"} />
        {this.state.friends.length !== 0 ? (
          <Container>
            <Content>
              <List>
                {this.removeDuplicates(this.state.friends, "user").map(friend => (
                  <ListItem avatar button enableEmptySections={false}>
                    <Left>
                      <Thumbnail
                        source={{
                          uri: `${friend.avatar}`
                        }}
                      />
                    </Left>
                    <Body>
                      <Text>{friend.user}</Text>
                      <Text note>Friends since 2018</Text>
                    </Body>
                    <Right>
                      <Text note>3:43 pm</Text>
                    </Right>
                  </ListItem>
                ))}
              </List>
            </Content>
          </Container>
        ) : null}
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
