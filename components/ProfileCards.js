import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class ProfileCards extends Component {
  render() {
    return (
      <Container sytle={{margin: 0}}>

        <Content>
          <Card style={{margin:0}}>

            <CardItem>
              <Left>

                <Body>
                  <Text>Chloe</Text>
                  <Text note>Sweet Puppers</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../photos/chloe.jpg')} style={{height: 300, width: null, flex: 1}}/>
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
              <Right>
                <Text>Active</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
