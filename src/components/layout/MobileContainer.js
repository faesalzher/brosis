

import React, { useState } from 'react';
import {
  Container,
  Segment,
  Button,
  Menu,
  Sidebar,
  Icon,
} from 'semantic-ui-react';
import Router from "next/router";
import { useRouter } from 'next/router';
import HomepageHeading from '../HomepageHeading';

export default function MobileContainer(props) {
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
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation='overlay'
        // inverted={isNotHome ? false : true}
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
          style={isNotHome ?
            { minHeight: 50, background: 'white', padding: '1em 0em' }
            : { backgroundImage: `url(${"./background.jpg"})`, backgroundSize: 'cover', minHeight: 350, padding: '1em 0em' }}
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
        {/* {console.log(props.mobile)} */}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  )
    ;
}

