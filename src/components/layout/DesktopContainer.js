

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
import HeaderContent from './HeaderContent';
import AccountInfo from './AccountInfo';



export default function DesktopContainer(props) {
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
    // const isCoLivingActive = router.pathname === "/co-living";
    // const isLocationActive = isCoLivingActive || router.pathname === "/kost/[_id]";
    // const isHelpActive = router.pathname === "/help";


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
                            <HeaderContent />
                            <AccountInfo fixed={fixed}/>
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

