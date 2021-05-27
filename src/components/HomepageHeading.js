

import React from 'react'
import {
    Grid,
} from 'semantic-ui-react';
import MainMenu from './MainMenu';
export default function HomepageHeading(props) {
    // <Container style={{ width: 1150 }}>
    //   <Header
    //     as='h1'
    //     content='There is nothing like Brosis life'
    //     inverted
    //     style={{
    //       fontSize: mobile ? '2em' : '5em',
    //       fontWeight: 'bolder',
    //       marginBottom: 0,
    //       marginTop: mobile ? '1.5em' : '3em',
    //     }}
    //   />
    //   <Button primary size='huge'>
    //     Get Started
    //     <Icon name='right arrow' />
    //   </Button>
    // </Container>
    return (
        // <Container style={{ marginTop: 50 }}>
        <Grid container columns={2} doubling verticalAlign="middle" style={{ padding: props.mobile ? '0em' : '6em 0em' }} >
            <Grid.Column width={8}>
                <h1
                    style={{
                        fontWeight: "bolder",
                        color: "white",
                        fontSize: 65,
                        fontSize: props.mobile ? '2em' : '5em',
                        //       fontWeight: 'bolder',
                        //       marginBottom: 0,
                        marginTop: props.mobile ? '1.5em' : '0em',
                    }}
                >
                    There is nothing like Brosis life.
          </h1>
            </Grid.Column>
            <Grid.Column width={8}>
                <MainMenu {...props} />
            </Grid.Column>
        </Grid>
        // </Container >
    );
}
