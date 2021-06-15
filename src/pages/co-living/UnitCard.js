import React from "react";
import { Card, Grid, Dropdown, Header, Pagination, Icon, Button, Label } from "semantic-ui-react";
import kampus from "../../stores/kampus";
import Link from "next/link";

export default function UnitCard(props) {
    const { data } = props;
    return (
        <Grid container stackable verticalAlign='middle' style={{}}>
            <Grid.Row centered>
                <Grid.Column>
                    <Card.Group itemsPerRow={2} stackable doubling>
                        {data.map((item, index) => {
                            return (
                                // <Link key={index} href="/co-living/[_id]" as={`/co-living/${item._id}`}>
                                <Card
                                    key={index}
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

                                        <Button content='Lihat Unit' fluid primary style={{ borderRadius: 20, margin: "1em 0px" }} />
                                    </Card.Content>
                                </Card>
                                // </Link>
                            )
                        })}
                    </Card.Group>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
