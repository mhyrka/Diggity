import React, { Component } from 'react'
import { Alert, AppRegistry, Platform, Text, StyleSheet, View } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base'
export default class FooterNav extends Component {
  render() {
    return (
      <Container style={styles.bottomView}>
        <Footer>
          <FooterTab>
            <Button>
              <Icon name="home" />
            </Button>
            <Button>
              <Icon name="ios-chatboxes" />
            </Button>
            <Button active>
              <Icon active name="md-globe" />
            </Button>
            <Button>
              <Icon name="ios-mail" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create(
{
    bottomView:{

      width: '100%',
      height: 50,
      backgroundColor: '#FF9800',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0
    }
})
