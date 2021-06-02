

import React, { useState } from 'react';
import Router from "next/router";
import {
    Container,
    Segment,
    Button,
    Menu,
    Visibility,
    Label,
    Dropdown
} from 'semantic-ui-react';
import { useRouter } from 'next/router';
import HomepageHeading from '../HomepageHeading';
import jwtDecode from "jwt-decode";



export default function DesktopContainer(props) {
    const router = useRouter();
    const [fixed, setFixed] = useState(false)
    const hideFixedMenu = () => {
        setFixed(false)
    }
    const showFixedMenu = () => {
        setFixed(true)
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
            name: "News",
            link: "/news",
            active: false,

        },
        {
            name: "Events",
            link: "/events",
            active: false,

        },
        {
            name: "Bantuan",
            link: "/help",
            active: router.pathname === "/help",

        },
    ]

    return (
        <>
            <Visibility
                once={false}
                onBottomPassed={showFixedMenu}
                onBottomPassedReverse={hideFixedMenu}
            >
                <Segment
                    inverted={isNotHome ? false : !fixed}
                    textAlign='center'
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
                            <Menu.Item
                                as='a'
                                style={{ padding: '0px 10px', margin: 0, fontWeight: 'bolder' }}
                                active={router.pathname === "/"}
                                onClick={() => Router.push('/')}>
                                <div style={{ display: 'flex' }}>
                                    <h1 style={{ padding: '0px 0px', margin: 0, fontWeight: 'bolder' }}>BROSIS</h1>
                                    <h1 style={{ padding: '0px 0px', color: 'blue', margin: 0, fontWeight: 'bolder' }}>'</h1>
                                </div>
                            </Menu.Item>
                            {
                                menu.map((item, index) => {
                                    return (
                                        <Menu.Item
                                            as='a'
                                            active={item.active}
                                            onClick={() => Router.push(item.link)}
                                        >
                                            <h4>{item.name}</h4>
                                        </Menu.Item>
                                    );
                                })
                            }
                            {
                                isLoggedIn ?
                                    // <Menu.Item  position='right' style={{ padding: 0, display: 'flex' }}>
                                    //     <div>
                                    //     <img style={{ borderRadius: 15, width:30, margin: '0px 10px' }} src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                                    //     <h4 style={{margin:'10px 0px'}}>Elliot</h4>
                                    //     </div>

                                    // </Menu.Item>
                                    <Menu.Menu position='right'
                                    inverted={isNotHome ? false : !fixed}
                                    pointing={isNotHome ? false : !fixed}
                                    secondary={isNotHome ? false : !fixed}
                                    >
                                        <Dropdown
                                            style={{ margin: 'auto', borderRadius:20 }}
                                            text={user.email}
                                            icon="user"
                                            image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg'
                                            floating
                                            labeled
                                            children={<div>asdasd</div>}
                                            button
                                            className='icon'
                                        >
                                            <Dropdown.Menu>
                                                <Dropdown.Item icon='user' text='Account' onClick={()=>Router.push('/account')}/>
                                                <Dropdown.Item icon='logout' text='Logout' onClick={()=>handleLogout()} />
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Menu.Menu>
                                    :
                                    <Menu.Item position='right' >
                                        <Button as='a' onClick={() => Router.push('/login')} inverted={isNotHome ? false : !fixed}>
                                            Masuk
                                </Button>
                                        <Button as='a' onClick={() => Router.push('/register')} inverted={isNotHome ? false : !fixed} primary style={{ marginLeft: '0.5em' }}>
                                            Daftar
                                    </Button>
                                    </Menu.Item>
                            }

                        </Container>
                    </Menu>
                    {
                        isNotHome ? <></> : <HomepageHeading mobile={false} />
                    }
                </Segment>
            </Visibility>
            { children}
        </>
    )
        ;
}

