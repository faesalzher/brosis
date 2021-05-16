// import React, { Fragment } from "react";
import { Image } from "semantic-ui-react";
import kost from "../stores/kost";
import Router, { withRouter } from "next/router";
import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Card,
  age,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
// import AboutSegment from 'components/AboutSegment';
import AboutSegment from '../components/AboutSegment';
import about from "../stores/about";
import PreviewSegment from "../components/PreviewSegment";
import KataBrosisSegment from "../components/KataBrosisSegment";
import KeseruanSegment from "../components/KeseruanSegment";


// import image_default from '../../public/image_default.png'
// import image_not_found from '../../public/image_not_found.png'


/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */

const Index = () => (
  
  <Container>
    <Segment style={{ padding: '8em 0em' }} vertical>
      {/* <div style={{ backgroundColor: 'white',borderRadius:20,margin: '0px 50px' }} vertical> */}
      <Grid container stackable verticalAlign='middle'>
        <AboutSegment data={about.about_home} />
        <Grid.Row centered>
          <Header as='h2' style={{ fontSize: '2em', }}>
            Brosis Bukan Kosan Biasa!
            </Header>
        </Grid.Row>
        <PreviewSegment data={kost} title="Lihat Semua" href={'#link kost'} />
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid centered>
        {/* <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "What a Company"
            </Header>
            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='/images/avatar/large/nan.jpg' />
              <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row> */}
        carousel
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em', borderRadius:20 }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row centered>
          <Header as='h2' style={{ fontSize: '2em', }}>
            Kami ada dimana kamu ada!
            </Header>
        </Grid.Row>
        <PreviewSegment data={kost} title="Lihat Semua Lokasi" href={'#link lokasi'} />
      </Grid>
    </Segment>

    <Segment style={{ padding: '4em 0em'  }} vertical>
      <KataBrosisSegment />
    </Segment>

    <Segment style={{ padding: '4em 0em', borderRadius:20 }} >
      <KeseruanSegment />
    </Segment>

  </Container>
)

export default Index
