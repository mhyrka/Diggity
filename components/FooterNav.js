import React, { Component } from "react"
import { Alert, AppRegistry, Platform, Text, StyleSheet, View } from "react-native"
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from "native-base"
import { Actions } from "react-native-router-flux"

export default class FooterNav extends Component {
  state = {
    activeButton: "home"
  }

  toggleActiveButton = buttonType => {
    this.setState({ activeButton: buttonType }, () => {
      console.log(this.state.activeButton)
    })
  }

  render() {
    return (
      <Container style={styles.bottomView}>
        <Footer>
          <FooterTab>
            <Button active={this.state.activeButton === "home"} onPress={() => this.toggleActiveButton("home")}>
              <Icon name="home" />
            </Button>
            <Button active={this.state.activeButton === "chat"} onPress={() => this.toggleActiveButton("chat")}>
              <Icon name="ios-chatboxes" />
            </Button>
            <Button active={this.state.activeButton === "map"} onPress={() => this.toggleActiveButton("map")}>
              <Icon active name="md-globe" />
            </Button>
            <Button
              active={this.state.activeButton === "md-people"}
              onPress={() => this.toggleActiveButton("md-people")}
            >
              <Icon name="md-people" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  bottomView: {
    width: "100%",
    height: 50,
    backgroundColor: "#FF9800",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0
  }
})
