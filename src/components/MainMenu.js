

import React from 'react';
import {
    Grid,
    Card,
} from 'semantic-ui-react';
import menu from "../stores/home";
import { useRouter } from 'next/router';

export default function MainMenu(props) {
    const Router = useRouter();
    return (
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
                <Grid stackable doubling>
                    {menu.map((item, index) => {
                        return (
                            <Grid.Column  width={8} key={index}>
                                <Card
                                    style={{
                                        borderRadius: 20,
                                        boxShadow: "none",
                                        backgroundColor: item.color,
                                    }}
                                    onClick={() => Router.push(item.link)}
                                >
                                    <Card.Content style={{display:'flex'}}>
                                        <img
                                            alt="menu"
                                            src={item.background}
                                            style={{
                                                height: 60, width: 60,
                                                objectFit: "fill", borderRadius: "50%",
                                                // position: "absolute",
                                            }}
                                        />
                                        <div style={{padding:10}}>
                                        <h1
                                            style={{
                                                // marginTop: 10, marginLeft: 70, marginBottom: 13,
                                                color: "black",
                                            }}
                                        >
                                            {item.name}
                                        </h1>
                                        </div>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                        )
                    })}
                </Grid>
            </Card.Content>
        </Card>
    );
}

