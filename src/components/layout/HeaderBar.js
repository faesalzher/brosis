import React, { useState } from 'react'
import Link from 'next/link'
import Router, { withRouter } from "next/router";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Card,
  age,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});
import PropTypes from 'prop-types'
import { createMedia } from '@artsy/fresnel'
import menu from "../../stores/home";
import login from "../../pages/login";
import { useRouter } from 'next/router';

const HomepageHeading = ({ mobile }) => (
  // <Container style={{ width: 1150 }}>
  //   <Header
  //     as='h1'
  //     content='There is nothing like Brosis life'
  //     inverted
  //     style={{
  //       fontSize: mobile ? '2em' : '5em',
  //       fontWeight: 'bolder',
  //       marginBottom: 0,
  //       marginTop: mobile ? '1.5em' : '3em',
  //     }}
  //   />
  //   <Button primary size='huge'>
  //     Get Started
  //     <Icon name='right arrow' />
  //   </Button>
  // </Container>
  <Container style={{ marginTop: 50 }}>
    <Grid container columns={2} doubling verticalAlign="middle" style={{}} >
      <Grid.Column width={8}>
        <h1
          style={{
            fontWeight: "bolder",
            color: "white",
            fontSize: 65,
          }}
        >
          There is nothing like Brosis life.
      </h1>
      </Grid.Column>
      <Grid.Column width={8}>
        <Card
          style={{
            width: "100%", boxShadow: "none",
            backgroundColor: "rgba(0,0,0,0.25)",
            borderRadius: 20,
          }}
        >
          <Card.Content>
            <h1
              style={{
                color: "white",
                textAlign: "center",
              }}
            >
              Menu
                      </h1>
            <Grid>
              {menu.map((item, index) => {
                return (
                  <Grid.Column width={8} key={index}>
                    <Card
                      style={{
                        borderRadius: 20,
                        boxShadow: "none",
                        backgroundColor: item.color,
                      }}
                      onClick={() => Router.push(item.link)}
                    >
                      <Card.Content>
                        <img
                          alt="menu"
                          src={item.background}
                          style={{
                            height: 60, width: 60,
                            objectFit: "fill", borderRadius: "50%",
                            position: "absolute",
                          }}
                        />
                        <h1
                          style={{
                            marginTop: 10, marginLeft: 70, marginBottom: 13,
                            color: "black",
                          }}
                        >
                          {item.name}
                        </h1>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                )
              })}
            </Grid>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  </Container >
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}


function DesktopContainer(props) {
  const router = useRouter();

  const [fixed, setFixed] = useState(false)
  const hideFixedMenu = () => {
    setFixed(false)
  }
  const showFixedMenu = () => {
    setFixed(true)
  }
  const isNotHome = (router.pathname !== "/")
  const { children } = props
  // const { fixed } = state
  const isCoLivingActive = router.pathname === "/co-living"
  const isLocationActive = isCoLivingActive || router.pathname === "/kost/[_id]";
  return (
    <Media greaterThan='mobile'>
      <Visibility
        once={false}
        onBottomPassed={showFixedMenu}
        onBottomPassedReverse={hideFixedMenu}
      >
        <Segment
          inverted={isNotHome ? false : !fixed}
          textAlign='left'
          style={
            isNotHome ?
              {}
              :
              {
                minHeight: 700, padding: '1em 0em',
                backgroundImage: `url(${"./background.jpg"})`,
                backgroundSize: 'cover',
              }}
          vertical
        >
          <Menu
            fixed={isNotHome ? 'top' : fixed ? 'top' : null}
            inverted={isNotHome ? false : !fixed}
            pointing={isNotHome ? false : !fixed}
            secondary={isNotHome ? false : !fixed}
            size='large'
          >
            <Container>
              {/* <Menu.Item as='a' active>
                  Keseharian
                </Menu.Item>
                <Menu.Item as='a'>Lokasi</Menu.Item>
                <Menu.Item as='a'>Bantuan</Menu.Item> */}
              {/* <Menu.Item as='a'>Dana</Menu.Item> */}
              <Menu.Item as='h1' style={{ padding: '0px 10px', margin: 0, fontWeight: 'bolder' }}>
                {/* <img src="./logo.png" alt="logo" style={{ height: 30, width: "auto" }} />
                  BROSIS' */}
                <div style={{ display: 'flex' }}>
                  <h1 style={{ padding: '0px 0px', margin: 0, fontWeight: 'bolder' }}>BROSIS</h1>
                  <h1 style={{ padding: '0px 0px', color: 'blue', margin: 0, fontWeight: 'bolder' }}>'</h1>
                </div>
              </Menu.Item>
              {
                isCoLivingActive || isLocationActive ?
                  <>
                    <Menu.Item as='a'><h4>Keseharian</h4></Menu.Item>
                    <Menu.Item as='a' active={isLocationActive}>
                      <h4 style={isLocationActive ? { color: 'blue' } : {}}>Lokasi</h4>
                    </Menu.Item>
                    <Menu.Item as='a'><h4>Bantuan</h4></Menu.Item></> : <></>
              }
              <Menu.Item position='right'>
                <Button as='a' onClick={() => Router.push(
                  '/login'
                  // {
                  //   pathname: '/post/[pid]',
                  //   query: { pid: post.id },
                  // }
                )} inverted={isNotHome ? false : !fixed}>
                  Masuk
                  </Button>
                <Button as='a' inverted={isNotHome ? false : !fixed} primary style={{ marginLeft: '0.5em' }}>
                  Daftar
                  </Button>
              </Menu.Item>
            </Container>
          </Menu>
          {
            isNotHome ? <></> : <HomepageHeading style={{ width: 100 }} />
          }
        </Segment>
      </Visibility>

      { children}
    </Media >
  )

}

function MobileContainer(props) {
  const router = useRouter();
  const isNotHome = (router.pathname !== "/")
  const [sidebarOpened, setSidebarOpened] = useState(false)
  const handleSidebarHide = () => {
    setSidebarOpened(false)
  }
  const handleToggle = () => {
    setSidebarOpened(true)
  }

  const { children } = props
  // const {fixed} = state

  return (
    <Media as={Sidebar.Pushable} at='mobile'>
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation='overlay'
          inverted={isNotHome ? false : true}
          onHide={handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          {/* <Menu.Item as='a' active>
              Home
            </Menu.Item>
            <Menu.Item as='a'>Work</Menu.Item>
            <Menu.Item as='a'>Company</Menu.Item>
            <Menu.Item as='a'>Careers</Menu.Item> */}
          <Menu.Item as="h1" style={{ marginLeft: -15 }}>
            <div style={{ display: 'flex' }}>
              <h1 style={{ padding: '0px 0px', margin: 0, fontWeight: 'bolder' }}>BROSIS</h1>
              <h1 style={{ padding: '0px 0px', color: 'blue', margin: 0, fontWeight: 'bolder' }}>'</h1>
            </div>
          </Menu.Item>
          <Menu.Item as='a'>Masuk</Menu.Item>
          <Menu.Item as='a'>Daftar</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted={isNotHome ? false : true}
            textAlign='center'
            style={isNotHome ? { minHeight: 50, background: 'white', padding: '1em 0em' } : { minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu
                inverted={isNotHome ? false : true}
                fixed={isNotHome ? 'top' : null}
                pointing={isNotHome ? false : true}
                secondary
                size='large'>
                <Menu.Item onClick={handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={isNotHome ? false : true} onClick={() => Router.push('co-living')}>
                    Masuk
                    </Button>
                  <Button as='a' primary inverted={isNotHome ? false : true} style={{ marginLeft: '0.5em' }}>
                    Daftar
                    </Button>
                </Menu.Item>
              </Menu>
              {
                isNotHome ? <></> : <HomepageHeading mobile />
              }
            </Container>
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Media>
  );
}

const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

export default function HeaderBar(props) {

  const { children } = props
  return (
    <ResponsiveContainer>{children}</ResponsiveContainer>
  )
}