import React, { Fragment } from "react";
import { Container, Grid, Segment, Header } from "semantic-ui-react";
import KostList from './KostList';
import TellUsForm from '../../components/TellUsForm';
import Description from './Description';
import KataBrosisSegment from "../../components/KataBrosisSegment";
import KeseruanSegment from "../../components/KeseruanSegment";

export default function Index() {

  return (
    <Container style={{ marginTop: '3em' }}>
      <Segment style={{ padding: '1em 0em' }} vertical>
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

      <Segment style={{ padding: '1em 0em' }} vertical>
     
        <KostList />
      </Segment>

      <Segment style={{ padding: '1em 0em', borderRadius: 20 }}>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row centered>
            <TellUsForm
              title=" Belum menemukan brosis di kampusmu?"
              subtitle="Jangan khawatir, ceritakan pada kami."
            />
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: '1em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row centered>
            <Description />
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: '1em 0em' }} vertical>
        <KataBrosisSegment />
      </Segment>

      <Segment style={{ padding: '1em 0em', borderRadius: 20 }} >
        <KeseruanSegment />
      </Segment>

    </Container>
  )
}