

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
import jwtDecode from "jwt-decode";
import HomepageHeading from '../HomepageHeading';
import HeaderContent from './HeaderContent';
import AccountInfo from './AccountInfo';
export default function MobileContainer(props) {
  const router = useRouter();
  const [sidebarOpened, setSidebarOpened] = useState(false)
  const handleSidebarHide = () => {
    setSidebarOpened(false)
  }
  const handleToggle = () => {
    setSidebarOpened(true)
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  React.useEffect(() => {    // Update the document title using the browser API    document.title = `You clicked ${count} times`;  
    if (typeof window !== "undefined") {
      if (window.localStorage.getItem("jwtToken") !== null) {
        // console.log("sudah login")
        setIsLoggedIn(true);
        setUser(jwtDecode(window.localStorage.getItem("jwtToken")));
      } else {
        setIsLoggedIn(false);
      };
    }
  }, []);

  const { children } = props
  // const { fixed } = state
  const isNotHome = (router.pathname !== "/");
  // const isCoLivingActive = router.pathname === "/co-living";
  // const isLocationActive = isCoLivingActive || router.pathname === "/kost/[_id]";
  // const isHelpActive = router.pathname === "/help";

  const handleLogout = () => {
    setIsLoggedIn(false);
    window.localStorage.removeItem("jwtToken");
    Router.push('/')
    // setUser(jwtDecode(window.localStorage.getItem("jwtToken")));
  }
  const menu = [
    {
      name: "Co-Living",
      link: "/co-living",
      active: router.pathname === "/co-living" || router.pathname === "/co-living/[_id]",
    },
    {
      name: "Tentang",
      link: "/about",
      active: false,
    },
    {
      name: "Forums",
      link: "/forums",
      active: false,

    },
    {
      name: "Bantuan",
      link: "/help",
      active: router.pathname === "/help",
    },
  ]

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
        <HeaderContent />
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
              <AccountInfo />
              {/* <Menu.Item position='right'>
                <Button as='a' inverted={isNotHome ? false : true} onClick={() => Router.push('/co-living')}>
                  Masuk
                      </Button>
                <Button as='a' primary inverted={isNotHome ? false : true} style={{ marginLeft: '0.5em' }}>
                  Daftar
                      </Button>
              </Menu.Item> */}
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

