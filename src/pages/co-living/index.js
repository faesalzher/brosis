import React, { Fragment } from "react";
import { Container, Grid, Segment, Header } from "semantic-ui-react";
import KostList from './KostList';
import TellUsForm from '../../components/TellUsForm';
import Description from './Description';
import KataBrosisSegment from "../../components/segment/KataBrosisSegment";
import KeseruanSegment from "../../components/segment/KeseruanSegment";

export default function Index(props) {

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

      <div style={{ padding: props.mobile ? '2em 0em' : '4em', margin: '1em 0em', backgroundColor: 'white', borderRadius: 20 }}>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row centered>
            <TellUsForm
              title=" Belum menemukan brosis di kampusmu?"
              subtitle="Jangan khawatir, ceritakan pada kami."
            />
          </Grid.Row>
        </Grid>
      </div>

      <div style={{ padding: props.mobile ? '2em 0em' : '4em', backgroundColor: 'white', borderRadius: 20 }}>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row centered>
            <Description />
          </Grid.Row>
        </Grid>
      </div>

      {/* <Segment style={{ padding: '1em 0em' }} vertical>
        <KataBrosisSegment />
      </Segment>

      <Segment style={{ padding: '1em 0em', borderRadius: 20 }} >
        <KeseruanSegment />
      </Segment> */}
      <div style={{ padding: '4em 0em' }}>
        <KataBrosisSegment />
      </div>

      <div style={{ padding: '4em 0em', backgroundColor: 'white', borderRadius: 20 }} >
        <KeseruanSegment />
      </div>

    </Container>
  )
}