import React, { Component } from "react"
import { Alert, AppRegistry, Platform, Text, StyleSheet, View } from "react-native"
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from "native-base"
export default class FooterNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeButton: "home"
    }
  }

  handleButtonNavigation = buttonType => {
    this.setState({ activeButton: buttonType }, () => {
      console.log(this.state.activeButton)
    })
  }

  render() {
    return (
      <Container style={styles.bottomView}>
        <Footer>
          <FooterTab>
            <Button active={this.state.activeButton === "home"} onPress={() => this.handleButtonNavigation("home")}>
              <Icon name="home" />
            </Button>
            <Button active={this.state.activeButton === "chat"} onPress={() => this.handleButtonNavigation("chat")}>
              <Icon name="ios-chatboxes" />
            </Button>
            <Button active={this.state.activeButton === "map"} onPress={() => this.handleButtonNavigation("map")}>
              <Icon active name="md-globe" />
            </Button>
            <Button
              active={this.state.activeButton === "md-people"}
              onPress={() => this.handleButtonNavigation("md-people")}
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
