

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
                margin: props.mobile ? "1em 0em" : 0
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
                <Grid stackable={!props.mobile} doubling style={props.mobile ? { padding: "1em 0em" } : {}}>
                    {menu.map((item, index) => {
                        return (
                            <Grid.Column width={8} key={index} style={props.mobile ? { padding: "5px 1em" } : {}}>
                                <Card
                                    style={{
                                        borderRadius: props.mobile ? 15 : 20,
                                        boxShadow: "none",
                                        backgroundColor: item.color,
                                    }}
                                    onClick={() => Router.push(item.link)}
                                >
                                    <Card.Content style={{ display: 'flex', padding: props.mobile ? 8 : '1em' }}>
                                        <img
                                            alt="menu"
                                            src={item.background}
                                            style={{
                                                height: props.mobile ? 30 : 60, width: props.mobile ? 30 : 60,
                                                objectFit: "fill", borderRadius: "50%",
                                                // position: "absolute",
                                            }}
                                        />
                                        <div style={{ padding: props.mobile ? 5 : 10 }}>
                                            <h1
                                                style={{
                                                    // marginTop: 10, marginLeft: 70, marginBottom: 13,
                                                    color: "black",
                                                    fontSize: props.mobile ? 14 : '2em'
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

