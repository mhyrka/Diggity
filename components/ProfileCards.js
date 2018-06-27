import React, { Component } from "react"
import { Image, StyleSheet } from "react-native"
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

export default class ProfileCards extends Component {
  constructor(props) {
    super(props)
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
              <Button transparent>
                <Icon active name="heart" />
                <Text style={{ fontSize: 18 }}>Add Friend</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent style={{ paddingLeft: 15 }}>
                <Icon active name="chatbubbles" />
                <Text style={{ fontSize: 18, paddingRight: 0 }}>Let's Play!</Text>
              </Button>
            </Body>
            {/* <Right>
                      <Text>Active</Text>
                    </Right> */}
          </CardItem>
        </Card>
      </Content>
    )
  }
}
