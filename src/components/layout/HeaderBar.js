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
import MainMenu from '../MainMenu';
const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});
import PropTypes from 'prop-types'
import { createMedia } from '@artsy/fresnel'
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
            fontSize: mobile ? '2em' : '5em',
            //       fontWeight: 'bolder',
            color: "white",
            //       marginBottom: 0,
            marginTop: mobile ? '1.5em' : '3em',
          }}
        >
          There is nothing like Brosis life.
      </h1>
      </Grid.Column>
      <Grid.Column width={8}>
      <MainMenu />
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
  const { children } = props
  // const { fixed } = state
  const isNotHome = (router.pathname !== "/");
  const isCoLivingActive = router.pathname === "/co-living";
  const isLocationActive = isCoLivingActive || router.pathname === "/kost/[_id]";
  const isHelpActive = router.pathname === "/help";

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
          style={isNotHome ? {} :
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
              <Menu.Item as='a' style={{ padding: '0px 10px', margin: 0, fontWeight: 'bolder' }} onClick={() => Router.push('/')}>
                <div style={{ display: 'flex' }}>
                  <h1 style={{ padding: '0px 0px', margin: 0, fontWeight: 'bolder' }}>BROSIS</h1>
                  <h1 style={{ padding: '0px 0px', color: 'blue', margin: 0, fontWeight: 'bolder' }}>'</h1>
                </div>
              </Menu.Item>
              {
                isCoLivingActive || isLocationActive || isHelpActive ?
                  <>
                    <Menu.Item as='a'><h4>Keseharian</h4></Menu.Item>
                    <Menu.Item
                      as='a'
                      active={isLocationActive}
                      onClick={() => Router.push('/co-living')}
                    >
                      <h4 style={isLocationActive ? { color: 'blue' } : {}}>Lokasi</h4>
                    </Menu.Item>
                    <Menu.Item
                      as='a'
                      active={isHelpActive}
                      onClick={() => Router.push('/help')}
                    >
                      <h4 style={isHelpActive ? { color: 'blue' } : {}}>Bantuan</h4>
                    </Menu.Item></> : <></>
              }
              <Menu.Item position='right' >
                <Button as='a' onClick={() => Router.push('/login')} inverted={isNotHome ? false : !fixed}>
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
  const [sidebarOpened, setSidebarOpened] = useState(false)
  const handleSidebarHide = () => {
    setSidebarOpened(false)
  }
  const handleToggle = () => {
    setSidebarOpened(true)
  }
  const isNotHome = (router.pathname !== "/");
  const isCoLivingActive = router.pathname === "/co-living";
  const isLocationActive = isCoLivingActive || router.pathname === "/kost/[_id]";
  const isHelpActive = router.pathname === "/help";
  const { children } = props

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

          <Menu.Item as="a" onClick={() => Router.push('/')} style={{}}>
            <div style={{ display: 'flex' }}>
              <h1 style={{ padding: '0px 5px', fontWeight: 'bolder' }}>BROSIS</h1>
              <h1 style={{ padding: '0px 5px', color: 'blue', margin: 0, fontWeight: 'bolder' }}>'</h1>
            </div>
          </Menu.Item>
          {
            isCoLivingActive || isLocationActive || isHelpActive ?
              <>
                <Menu.Item as='a'><h4>Keseharian</h4></Menu.Item>
                <Menu.Item
                  as='a'
                  active={isLocationActive}
                  onClick={() => Router.push('/co-living')}
                >
                  <h4 style={isLocationActive ? { color: 'blue' } : {}}>Lokasi</h4>
                </Menu.Item>
                <Menu.Item
                  as='a'
                  active={isHelpActive}
                  onClick={() => Router.push('/help')}
                >
                  <h4 style={isHelpActive ? { color: 'blue' } : {}}>Bantuan</h4>
                </Menu.Item></> : <></>
          }
          <Menu.Item as='a' onClick={() => Router.push('/login')} >Masuk</Menu.Item>
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
                  <Button as='a' inverted={isNotHome ? false : true} onClick={() => Router.push('/co-living')}>
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