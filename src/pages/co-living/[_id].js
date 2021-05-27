import React, { Fragment } from "react";
import { Container, Grid, Segment, Header } from "semantic-ui-react";

export default function Index() {

  return (
    <Container style={{ marginTop: '3em' }}>
      <Segment style={{ padding: '4em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row centered style={{ padding: 0 }}>
            <Header as='h3' style={{ color: 'blue', fontWeight: 'bolder' }}>
              TEMUKAN
            </Header>
          </Grid.Row>
          <Grid.Row centered>
            <Header as='h1' style={{ fontWeight: 'bolder', fontSize: '2em' }}>
              Brosis di kampusmu!
            </Header>
          </Grid.Row>
        </Grid>
      </Segment>

    </Container>
  )
}