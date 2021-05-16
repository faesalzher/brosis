import React, { Fragment } from "react";
import { Card, Grid, Segment } from "semantic-ui-react";
import kost from "../../stores/kost";
import Link from "next/link";

export default function KostList() {
    return (
        <Grid container columns={4} doubling stackable>
            {kost.map((item, index) => {
                return (
                    <Grid.Column key={index}>
                        {item._id}
                        <Link href="/kost/[_id]" as={`/kost/${item._id}`}>
                            <Card
                                // href='/kost'
                                style={{
                                    width: "100%",
                                    borderRadius: 20,
                                }}>
                                <div >
                                    <img
                                        alt="photo"
                                        src={item.photo}
                                        style={{
                                            objectFit: "cover",
                                            width: "100%",
                                            height: 200,
                                            borderTopLeftRadius: 20,
                                            borderTopRightRadius: 20,
                                        }}
                                    />
                                </div>
                                <Card.Content>
                                    <Card.Header style={{ color: 'blue' }}>{item.name}</Card.Header>
                                    <Card.Meta>{item.location}</Card.Meta>
                                    {/* <Card.Description>{item.address}</Card.Description> */}
                                </Card.Content>
                                {/* <Card.Content extra>
                  <b>{item.price}</b>
                </Card.Content> */}
                            </Card>
                        </Link>
                    </Grid.Column>
                )
            })}
        </Grid>
    )
}
