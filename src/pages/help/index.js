import React, { useState } from "react";
import { Container, Grid, Segment, Header, Divider, Button, Accordion } from "semantic-ui-react";
import Faq from './Faq';
import faq from '../../stores/faq';
import TellUsForm from '../../components/TellUsForm';

export default function Index() {
  const [allExpanded, setAllExpanded] = useState(false);

  return (
    <Container style={{ marginTop: '3em' }}>
      <Segment style={{ padding: '4em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row centered>
            <Header as='h1' style={{ fontWeight: 'bolder', color: 'midnightblue', fontSize: '4em' }}>
              Hai! ada yang bisa kami bantu?
            </Header>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: '4em 0em', borderRadius: 20 }}>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Grid.Column width={8}>
              <Header as='h1' style={{ fontWeight: 'bolder' }}>
                Pertanyaan Siap Jawab (FAQ)
            </Header>
            </Grid.Column>
            <Grid.Column width={4} >
              <div style={{ display: 'flex' }}>
                <Button onClick={() => setAllExpanded(false)} content="Hide all" />
                <Button onClick={() => setAllExpanded(true)} content="Show all" />
              </div>
            </Grid.Column>
          </Grid.Row>
          {/* <Divider /> */}
          <Grid.Row style={{ padding: '1em' }}>
            <Accordion fluid styled style={{borderRadius:20}}>
              {faq.map((item, index) => {
                return (<Faq key={index} expanded={allExpanded} question={item.question} answer={item.answer} />);
              })}
            </Accordion>
          </Grid.Row>
        </Grid>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row centered>
            <TellUsForm
              title=" Butuh bantuan lebih?"
              subtitle="Beritahukan pada kami."
            />
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  )
}