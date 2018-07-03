import React, { Component } from "react"
import { Image, StyleSheet } from "react-native"
import { Actions } from "react-native-router-flux"
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base"
import SendMessage from "./SendMessage"

export default class Profile extends Component {
  state = {
    friendAdded: false,
    user: "",
    avatar: ""
  }

  addFriend = () => {
    // console.log("add friend")

    this.setState({ friendAdded: true, user: this.props.name, avatar: this.props.image }, () => {
      fetch(`https://diggity-backend.herokuapp.com/profiles/5b3bce57e6eed00014b0af4d/addfriend`, {
        method: "PUT",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ user: this.state.user, avatar: this.state.avatar })
      })
        .then(response => response.json())
        .then(response => console.log(response))
    })
  }

  render() {
    return (
      <Content
        style={
          this.props.index === this.props.profilesLength - 1
            ? { marginBottom: 50 }
            : { marginTop: 0, marginBottom: 10, padding: 0 }
        }
      >
        <Card style={{ marginTop: 0, marginBottom: 0, padding: 0 }}>
          <CardItem>
            <Left>
              <Body>
                <Text>{this.props.name}</Text>
                <Text note>{this.props.age} years old</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{ uri: this.props.image }} style={{ height: 300, width: null, flex: 1 }} />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent onPress={this.addFriend}>
                <Icon active name="heart" style={this.state.friendAdded ? { color: "pink" } : { color: "blue" }} />
                <Text style={{ fontSize: 18 }}>Add Friend</Text>
              </Button>
            </Left>
            <Body>
              <Button
                transparent
                style={{ paddingLeft: 15 }}
                onPress={() => Actions.SendMessage({ profileId: this.props.profileId })}
              >
                <Icon active name="chatbubbles" />
                <Text style={{ fontSize: 18, paddingRight: 0 }}>Let's Play!</Text>
              </Button>
            </Body>
          </CardItem>
        </Card>
      </Content>
    )
  }
}
