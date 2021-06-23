import React, { Fragment } from "react";
import { Container, Grid, Segment, Header, Image, Card, Button, Label, Icon } from "semantic-ui-react";
import Router from "next/router";

export default function UnitCard(props) {
    const { mini, item } = props;
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '40%' }}>
                <img
                    alt="image"
                    src={item.image}
                    style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                        // padding: '1em',
                        borderRadius: 30,
                    }}
                />
            </div>
            <div style={{paddingLeft:'1em'}}>
                <Header as='h6' style={{ margin: "2px 0px" }}>
                    {item.type}
                </Header>
                <Header as='h5' style={{ color: "blue", margin: "2px 0px" }}>
                    {item.name}
                </Header>
                <div style={{ display: 'flex' }}>
                    <Header as='h6' style={{ color: 'grey', margin: "2px 0px" }}>
                        Mulai  {item.price}  / Bulan
                    </Header>
                </div>
                <a
                    href={`/unit/${item._id}`}
                >
                       <Header as='h6' style={{ color: 'blue', margin: "2px 0px" }}>
                        Lihat Unit
                    </Header>
                </a>
            </div>
        </div>
    )
}

