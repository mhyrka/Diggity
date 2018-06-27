import React, { Component } from "react"
import { Image } from "react-native"
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
  componentDidMount() {
    console.log(this.props.image)
  }

  render() {
    return (
      <Content style={{ marginTop: 0, marginBottom: 0, padding: 0 }}>
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
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>Let's Play!</Text>
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
