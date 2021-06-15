import React from "react";
import { Card, Grid, Dropdown, Header, Pagination, Icon } from "semantic-ui-react";
import kampus from "../../stores/kampus";
import Link from "next/link";


export default function KostList() {
    const [location, setLocation] = React.useState('');

    const [activePage, setActivePage] = React.useState(1);
    const handlePaginationChange = (e, { activePage }) => {
        setActivePage(activePage)
    }

    const groupByLocation = kampus.reduce((groupByLocation, item) => {
        const location = item.location;
        if (!groupByLocation[location]) {
            groupByLocation[location] = [];
        }
        groupByLocation[location].push(item);
        return groupByLocation;
    }, {});

    // Edit: to add it in the array format instead
    const kampusGroup = Object.keys(groupByLocation).map((location) => {
        return {
            location,
            kampus: groupByLocation[location]
        };
    });

    const locationOptions = kampusGroup.map((item, index) => ({
        // console.log(item.location);
        key: item.location,
        text: item.location,
        value: item.location,
    }));

    const handleChange = (e) => {
        setLocation(e.target.textContent)
        setActivePage(1);
    };

    const filteredLocation = (kampus.filter(function (item) {
        if (location === "") {
            return item
        } else {
            return item.location === location;
        }
    }));

    return (
        <>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column floated='left' textAlign="left" width={5}>
                        <Header as='h5' style={{ marginBottom: 2 }}>
                            pilih kotamu
            </Header>
                        <Dropdown placeholder='location' search selection options={locationOptions} onChange={handleChange} clearable />
                    </Grid.Column>
                    <Grid.Column floated='right' textAlign="right" width={5}>
                        <Pagination
                            activePage={activePage}
                            onPageChange={handlePaginationChange}
                            totalPages={Math.ceil(filteredLocation.length / 12)}
                            firstItem={{ content: <Icon name='angle double left' />, icon: true }}
                            lastItem={{ content: <Icon name='angle double right' />, icon: true }}
                            prevItem={{ content: <Icon name='angle left' />, icon: true }}
                            nextItem={{ content: <Icon name='angle right' />, icon: true }}
                        />
                    </Grid.Column>

                </Grid.Row>
            </Grid>
            <Grid container stackable verticalAlign='middle' style={{}}>
                <Grid.Row>
                    <Grid.Column>
                        <Card.Group itemsPerRow={4} stackable doubling>
                            {filteredLocation.slice((activePage - 1) * 12, 12 * activePage).map((item, index) => {
                                return (
                                    <Link key={index} href="/co-living/[_id]" as={`/co-living/${item._id}`}>
                                        <Card
                                            style={{
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
                                )
                            })}
                        </Card.Group>
                    </Grid.Column>
                </Grid.Row>

            </Grid>

            {/* </Grid> */}
        </>
    )
}
