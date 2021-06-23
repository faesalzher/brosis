import React, { Fragment } from "react";
import { Container, Grid, Image, Segment, Header,  Card, Button, Label, Icon } from "semantic-ui-react";
// import ImageCarousel from "../../components/ImageCarousel";
import kost from '../../stores/kost';
import AboutSegment from '../../components/segment/AboutSegment';
import PreviewSegment from '../../components/segment/PreviewSegment';
import about from "../../stores/about";
import kampus from "../../stores/kampus";
import faker from 'faker';
// import UnitCard from "./UnitCard";
import Router from "next/router";

export default function Index(props) {

  return (
    <Container style={{ marginTop: '3em' }}>
      <Segment style={{ padding: '4em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row centered style={{ padding: 0, }}>
            <Header as='h2' style={{ fontWeight: 'bolder', color: 'midnightblue', textAlign: 'center', fontSize: '2em' }}>
             Jelajah Lokasi Seputar
            </Header>
          </Grid.Row>
          <Grid.Row centered>
            <Header as='h1' style={{ fontWeight: 'bolder', color: 'midnightblue', textAlign: 'center', fontSize: '3em' }}>
              Brosis Tidar
            </Header>
          </Grid.Row>
          <Grid.Row centered>
          </Grid.Row>
        </Grid>
      </Segment>
      <div style={{ padding: props.mobile ? 0 : '4em', backgroundColor: 'white', borderRadius: 20 }}>
        {/* <div style={{ backgroundColor: 'white',borderRadius:20,margin: '0px 50px' }} vertical> */}
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row centered style={{ padding: '2em' }}>
           <Image style={{width:'100%', borderRadius:20}} src="https://us.123rf.com/450wm/scyther5/scyther51705/scyther5170500069/79147284-developing-programming-and-coding-technologies-website-design-cyber-space-concept-.jpg?ver=6"/>
          </Grid.Row>
        </Grid>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row centered style={{ padding: '2em' }}>
            <Header as='h2' style={{ fontSize: '2em', }}>
              Tentang Brosis House Tidar
            </Header>
          </Grid.Row>
          <p style={{ fontSize: '1.33em', textAlign: 'center' }}>
            {faker.lorem.paragraphs()}
          </p>
        </Grid>
      </div>
      <div style={{ padding: props.mobile ? 0 : '4em 0em', backgroundColor: 'white', borderRadius: 20 }}>
        <Grid container stackable verticalAlign='middle'>
          <AboutSegment data={about.about_kost} />
        </Grid>
      </div>
    </Container>
  )
}