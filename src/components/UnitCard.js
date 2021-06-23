import React, { Fragment } from "react";
import { Container, Grid, Segment, Header, Image, Card, Button, Label, Icon } from "semantic-ui-react";
import Router from "next/router";

export default function UnitCard(props) {
    const { mini, item } = props;
    console.log(mini)
    return (
        mini ?
            <div style={{ display: 'flex' }}>
                <img
                    alt="image"
                    src={item.image}
                    style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                        padding: '1em',
                        borderRadius: 30,
                    }}
                />
                <div>
                    <Header as='h5' style={{ margin: "2px 0px" }}>
                        {item.type}
                    </Header>
                    <Header as='h2' style={{ color: "blue", margin: "2px 0px" }}>
                        {item.name}
                    </Header>
                    <Header as='h5' style={{ color: 'grey', margin: "2px 0px" }}>
                        Mulai  <Label tag style={{ marginLeft: '1em' }}>{item.price}</Label> / Bulan
                    </Header>

                    <Button
                        onClick={
                            () => {
                                Router.push({
                                    pathname: '/unit/[_id]',
                                    query: { _id: item._id },
                                })
                            }
                        }
                        content='Lihat Unit' fluid primary style={{ borderRadius: 20, margin: "1em 0px" }} />
                </div>
            </div>
            :
            <Card
                style={{
                    borderRadius: 20,
                }}>
                <div style={{ height: '70%' }} >
                    <img
                        alt="image"
                        src={item.image}
                        style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                            padding: '1em',
                            borderRadius: 30,
                        }}
                    />
                </div>
                <Card.Content extra style={{ textAlign: 'center' }}>
                    <Header as='h5' style={{ margin: "2px 0px" }}>
                        {item.type}
                    </Header>
                    <Header as='h2' style={{ color: "blue", margin: "2px 0px" }}>
                        {item.name}
                    </Header>
                    <Header as='h5' style={{ color: 'grey', margin: "2px 0px" }}>
                        Mulai  <Label tag style={{ marginLeft: '1em' }}>{item.price}</Label> / Bulan
                    </Header>

                    <Button
                        onClick={
                            () => {
                                Router.push({
                                    pathname: '/unit/[_id]',
                                    query: { _id: item._id },
                                })
                            }
                        }
                        content='Lihat Unit' fluid primary style={{ borderRadius: 20, margin: "1em 0px" }} />
                </Card.Content>
            </Card>
    )
}