

import React from 'react'
import {
    Grid,
    Header
} from 'semantic-ui-react';
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
        <Grid container verticalAlign="middle" style={{justifyContent:'center'}}>
            <Header
                as='h1'
                content='There is nothing like Brosis life.'
                inverted
                style={{
                    fontSize: props.mobile ? '2em' : '4em',
                    fontWeight: 'bolder',
                    // marginBottom: 0,
                    marginTop: props.mobile ? '1.5em' : '4em',
                }}
            />
        </Grid>
        // </Container >
    );
}
