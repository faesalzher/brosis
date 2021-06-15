

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
    const { fixed } = props;
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
    
    return (
        <>
            {
                isLoggedIn ?
                    <Menu.Menu position='right'
                        inverted={isNotHome ? false : !fixed}
                        pointing={isNotHome ? false : !fixed}
                        secondary={isNotHome ? false : !fixed}
                    >
                        <Dropdown
                            style={{ margin: 'auto', borderRadius: 20 }}
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
                                <Dropdown.Item icon='user' text='Account' onClick={() => Router.push('/account')} />
                                <Dropdown.Item icon='logout' text='Logout' onClick={() => handleLogout()} />
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
        </>
    )
        ;
}

