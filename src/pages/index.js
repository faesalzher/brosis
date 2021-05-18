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
import ImageCarousel from "../components/ImageCarousel";
import "pure-react-carousel/dist/react-carousel.es.css";

// import image_default from '../../public/image_default.png'
// import image_not_found from '../../public/image_not_found.png'


/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
const gambar_jam = [
  { jam: "7 am", image: "https://cdn.statically.io/img/9to5mac.com/2018/06/05/macos-mojave-wallpapers-download/mojave-day/" },
  { jam: "9 am", image: "https://cdn.statically.io/img/9to5mac.com/2018/06/05/macos-mojave-wallpapers-download/mojave-day/" },
  { jam: "3 am", image: "https://cdn.statically.io/img/9to5mac.com/2018/06/05/macos-mojave-wallpapers-download/mojave-day/" },
  { jam: "4 pm", image: "https://cdn.statically.io/img/9to5mac.com/2018/06/05/macos-mojave-wallpapers-download/mojave-day/" },
  { jam: "7 pm", image: "https://cdn.statically.io/img/9to5mac.com/2018/06/05/macos-mojave-wallpapers-download/mojave-day/" },
  { jam: "9 pm", image: "https://cdn.statically.io/img/9to5mac.com/2018/06/05/macos-mojave-wallpapers-download/mojave-day/" },
];

const Index = () => (

  <Container>
    <div style={{ padding: '4em 4em', backgroundColor: 'white', borderRadius: 20 }}>
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
    </div>

    <div style={{ margin: '4em 4em', padding: '1em', backgroundColor: 'white', borderRadius: 20 }}>

      <ImageCarousel data={gambar_jam} />

    </div>

    <div style={{ padding: '4em 0em', backgroundColor: 'white', borderRadius: 20 }}>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row centered>
          <Header as='h2' style={{ fontSize: '2em', }}>
            Kami ada dimana kamu ada!
            </Header>
        </Grid.Row>
        <PreviewSegment data={kost} title="Lihat Semua Lokasi" href={'#link lokasi'} />
      </Grid>
    </div>

    <div style={{ padding: '4em 0em' }}>
      <KataBrosisSegment />
    </div>

    <div style={{ padding: '4em 0em', backgroundColor: 'white', borderRadius: 20 }} >
      <KeseruanSegment />
    </div>

  </Container>
)

export default Index
