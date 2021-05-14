import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

export default function Index() {
  return (
    <Menu
      inverted
      attached
      borderless
      style={{
        borderTop: 0, borderLeft: 0, borderRight: 0,
        height: 60
      }}
    >
      <Container>
        <Menu.Item style={{ marginLeft: -15 }}>
          <img src="./logo.png" alt="logo" style={{ height: 30, width: "auto" }} />
        </Menu.Item>
        <Menu.Menu position='right' style={{ marginRight: -15 }}>
          <Menu.Item>
            <Button secondary style={{ marginRight: 6 }}>
              Register
            </Button>
            <Button primary>
              Login
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  )
}