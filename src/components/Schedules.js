

import React from 'react';
import {
    Grid,
    List,
    Card,
    CardContent,
    Icon,
} from 'semantic-ui-react';
import schedule from "../stores/schedule";
import { useRouter } from 'next/router';

export default function Schedules(props) {
    const Router = useRouter();
    return (
        <Card
            style={{
                width: "100%", boxShadow: "none",
                backgroundColor: "white",
                borderRadius: 20,
                margin: props.mobile ? "1em 0em" : 0
            }}
        >
            <Card.Content>
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
                                fontSize: '1em'
                            }}
                        >
                            Jadwalmu hari ini
                        </h1>
                    </Card.Content>
                </Card>
                <List divided relaxed size={"big"}>
                    {
                        schedule.slice(0, 3).map((item, index) => {
                            return (
                                <List.Item as='a' key={index} >
                                    <List.Icon name='right triangle' size='large'/>
                                    <List.Content style={{ textAlign: "left" }}>
                                        <List.Header>{item.name}</List.Header>
                                        <List.Description>
                                            {item.description}
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                            );
                        })
                    }
                </List>
            </Card.Content>
        </Card>
    );
}

