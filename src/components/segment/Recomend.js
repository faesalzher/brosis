import React from "react";
import { Card, Grid, Dropdown, Header, GridColumn } from "semantic-ui-react";
import recomended from "../../stores/recomended";
import Link from "next/link";


export default function Recomend() {


    return (
            <Card.Group itemsPerRow={3} stackable doubling>
                {recomended.map((item, index) => {
                    return (
                        <Link key={index} href="#">
                            <Card
                                style={{
                                    borderRadius: 20,
                                }}>
                                <div >
                                    <img
                                        alt="photo"
                                        src={item.background}
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
                                    <Card.Header style={{}}>{item.name}</Card.Header>
                                </Card.Content>
                            </Card>
                        </Link>
                    )
                })}
            </Card.Group>
    )
}
