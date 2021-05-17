import React from "react";
import { Card, Grid, Dropdown, Header } from "semantic-ui-react";
import kost from "../../stores/kost";
import Link from "next/link";


export default function KostList() {
    const [location, setLocation] = React.useState('');
    const groupByLocation = kost.reduce((groupByLocation, item) => {
        const location = item.location;
        if (!groupByLocation[location]) {
            groupByLocation[location] = [];
        }
        groupByLocation[location].push(item);
        return groupByLocation;
    }, {});

    // Edit: to add it in the array format instead
    const kostGroup = Object.keys(groupByLocation).map((location) => {
        return {
            location,
            kost: groupByLocation[location]
        };
    });

    const locationOptions = kostGroup.map((item, index) => ({
        // console.log(item.location);
        key: item.location,
        text: item.location,
        value: item.location,
    }));

    const handleChange = (e) => {
        setLocation(e.target.textContent)
    };

    const filteredLocation = (kost.filter(function (item) {
        if (location === "") {
            return item
        } else {
            return item.location === location;
        }
    }));

    return (
        <>
            <Grid container stackable verticalAlign='middle'>
                {/* <Grid.Column floated='right' textAlign="right" width={5}>
                    <Header as='h5' style={{}}>
                        pilih kotamu
            </Header>
                </Grid.Column> */}
                <Grid.Column floated='right' textAlign="right" width={5}>
                    <Header as='h5' style={{marginBottom:2}}>
                        pilih kotamu
            </Header>
                    <Dropdown placeholder='location' search selection options={locationOptions} onChange={handleChange} clearable />
                </Grid.Column>
            </Grid>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row centered>
                    <Grid container columns={4} doubling stackable>
                        {filteredLocation.map((item, index) => {
                            return (
                                <Grid.Column key={index}>
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
                </Grid.Row>
            </Grid>
        </>
    )
}
