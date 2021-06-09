import React, { Fragment } from "react";
import { Container, Grid, Card, Image, Segment, Header, Icon, Divider, Button } from "semantic-ui-react";
import topic from '../../stores/topic';
import Router, { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  return (
    <Container style={{ marginTop: '3em' }}>
      <Segment style={{ padding: '0em 3em', borderRadius: 20 }}>
        <Grid container stackable verticalAlign='middle' style={{ padding: '1em 0em', paddingTop: '4em' }}>
          <div style={{ padding: 0 }}>
            <Grid columns="2" stackable>
              <Grid.Column width={3}>
                <Card>
                  <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                  <Card.Content style={{ padding: 0, textAlign: 'center', margin: 0 }} >
                    {/* <Card.Header as='h6'>Matthew</Card.Header> */}<h6 style={{ padding: 0, textAlign: 'center', margin: 0 }} >Faesal Herlambang</h6>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column width={12} verticalAlign="middle">
                < Header as='h1' style={{ fontWeight: 'bolder', fontSize: '2em', marginBottom: 0 }}>
                  Pengumuman Penting
                        </Header>
                <div style={{ display: 'flex' }}>
                  <Icon name="calendar outlie" />
              Date Posted: Sat Jun 05 2021 22:58
                        </div>
              </Grid.Column>
            </Grid>

          </div>
        </Grid>
        <Divider />
        <Grid container stackable verticalAlign='middle' style={{ padding: '1em 0em' }}>
          Lipsum generator: Lorem Ipsum - All the facts
          https://www.lipsum.com
          Terjemahkan halaman ini
          Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
          Anda telah mengunjungi halaman ini 2 kali. Kunjungan terakhir: 04/05/21
          Lorem ipsum dolor sit amet
          Reference site about Lorem Ipsum, giving information on its origins ...
	<br />
Lorem Ipsum
Lorem Ipsum adalah contoh teks atau dummy dalam industri ...
Telusuran lainnya dari lipsum.com »
Orang juga bertanya
Lorem ipsum dolor sit amet apa?
Apa itu Lorem Ipsum Generator?
Apa itu teks dummy?
Masukan
<br />

Lorem Ipsum – Generator, Origins and Meaning
https://loremipsum.io
Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknow
</Grid>
        <Divider />
        <Grid container stackable verticalAlign='middle' style={{ padding: '2em 0em', paddingTop: '1em', display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ padding: 0, }}>
            <Button icon='reply' content='Reply' color="blue" floated="right" />
          </div>
        </Grid>
      </Segment>
      <Segment style={{ padding: '0em 3em', borderRadius: 20 }}>
        <Grid container stackable verticalAlign='middle' style={{ padding: '1em 0em', paddingTop: '4em' }}>
          <div style={{ padding: 0 }}>
            <Grid columns="2" stackable>
              <Grid.Column width={3}>
                <img
                  alt="menu"
                  src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                  style={{
                    height: 40, width: 40,
                    objectFit: "fill", borderRadius: "50%",
                    // position: "absolute",
                  }}
                />
              </Grid.Column>
              <Grid.Column width={13} verticalAlign="middle">
                < Header as='h6' style={{ fontWeight: 'bolder', fontSize: '1em', marginBottom: 0 }}>
                  Ahmad Sembiring
                        </Header>
                <div style={{ display: 'flex' }}>
                  <Icon name="calendar outlie" />
              Date Posted:Sat Jun 05 2021 22:58
                </div>
              </Grid.Column>
            </Grid>

          </div>
        </Grid>
        <Divider />
        <Grid container stackable verticalAlign='middle' style={{ padding: '1em 0em' }}>
          Lipsum generator: Lorem Ipsum - All the facts
          https://www.lipsum.com
</Grid>
        <Divider />
        <Grid container stackable verticalAlign='middle' style={{ padding: '2em 0em', paddingTop: '1em', display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ padding: 0, }}>
            <Button icon='reply' content='Reply' color="blue" floated="right" />
          </div>
        </Grid>
      </Segment>
      <Segment style={{ padding: '0em 3em', borderRadius: 20 }}>
        <Grid container stackable verticalAlign='middle' style={{ padding: '1em 0em', paddingTop: '4em' }}>
          <div style={{ padding: 0 }}>
            <Grid columns="2" stackable>
              <Grid.Column width={3}>
                <img
                  alt="menu"
                  src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                  style={{
                    height: 40, width: 40,
                    objectFit: "fill", borderRadius: "50%",
                    // position: "absolute",
                  }}
                />
              </Grid.Column>
              <Grid.Column width={13} verticalAlign="middle">
                < Header as='h6' style={{ fontWeight: 'bolder', fontSize: '1em', marginBottom: 0 }}>
                  Ahmad Sembiring
                        </Header>
                <div style={{ display: 'flex' }}>
                  <Icon name="calendar outlie" />
              Date Posted: Sat Jun 05 2021 22:58
                </div>
              </Grid.Column>
            </Grid>

          </div>
        </Grid>
        <Divider />
        <p style={{ fontSize: '1em' }}>Quote:</p>
        <Segment secondary style={{ color: 'black' }}>
          <div style={{ display: 'flex' }}>
            Original Posted By Ahmad Sembiring
            <Icon name='caret right' link color="blue"/>
          </div>
          Pellentesque habitant morbi tristique senectus.
          </Segment>
        <Grid container stackable verticalAlign='middle' style={{ padding: '1em 0em' }}>

          Lipsum generator: Lorem Ipsum - All the facts
          https://www.lipsum.com
</Grid>
        <Divider />
        <Grid container stackable verticalAlign='middle' style={{ padding: '2em 0em', paddingTop: '1em', display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ padding: 0, }}>
            <Button icon='reply' content='Reply' color="blue" floated="right" />
          </div>
        </Grid>
      </Segment>
    </Container >
  )
}