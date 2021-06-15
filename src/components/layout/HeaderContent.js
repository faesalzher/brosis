

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


    // const { fixed } = state
    // const isCoLivingActive = router.pathname === "/co-living";
    // const isLocationActive = isCoLivingActive || router.pathname === "/kost/[_id]";
    // const isHelpActive = router.pathname === "/help";

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
        <>

            {
                menu.map((item, index) => {
                    return (
                        <Menu.Item
                            key={index}
                            as='a'
                            active={item.active}
                            onClick={() => Router.push(item.link)}
                        >
                            <h4>{item.name}</h4>
                        </Menu.Item>
                    );
                })
            }
        </>
    )
        ;
}

