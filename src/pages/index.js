// import React, { Fragment } from "react";
import { Image } from "semantic-ui-react";
import kampus from "../stores/kampus";
import Router, { withRouter } from "next/router";
import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
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
import AboutSegment from '../components/segment/AboutSegment';
import about from "../stores/about";
import PreviewSegment from "../components/segment/PreviewSegment";
import KataBrosisSegment from "../components/segment/KataBrosisSegment";
import KeseruanSegment from "../components/segment/KeseruanSegment";
import ImageCarousel from "../components/ImageCarousel";
import MainMenu from '../components/MainMenu';
import Schedules from '../components/Schedules';
import Recomend from "../components/segment/Recomend";
import jwtDecode from "jwt-decode";



// import image_default from '../../public/image_default.png'
// import image_not_found from '../../public/image_not_found.png'


/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
const gambar_jam = [
  { name: "7 am", image: "https://cdn-0.idownloadblog.com/wp-content/uploads/2018/06/macOS-Mojave-Day-wallpaper.jpg" },
  { name: "9 am", image: "https://cdn-0.idownloadblog.com/wp-content/uploads/2018/06/macOS-Mojave-Day-wallpaper.jpg" },
  { name: "3 am", image: "https://cdn-0.idownloadblog.com/wp-content/uploads/2018/06/macOS-Mojave-Day-wallpaper.jpg" },
  { name: "4 pm", image: "https://cdn-0.idownloadblog.com/wp-content/uploads/2018/06/macOS-Mojave-Day-wallpaper.jpg" },
  { name: "7 pm", image: "https://cdn-0.idownloadblog.com/wp-content/uploads/2018/06/macOS-Mojave-Day-wallpaper.jpg" },
  { name: "9 pm", image: "https://cdn-0.idownloadblog.com/wp-content/uploads/2018/06/macOS-Mojave-Day-wallpaper.jpg" },
];



const Index = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  React.useEffect(() => {    // Update the document title using the browser API    document.title = `You clicked ${count} times`;  
    if (typeof window !== "undefined") {
      if (window.localStorage.getItem("jwtToken") !== null) {
        // console.log("sudah login")
        setIsLoggedIn(true);
        setUser(jwtDecode(window.localStorage.getItem("jwtToken")));
      } else {
        setIsLoggedIn(false);
      };
    }
  }, []);
  return (
    <Container style={{ marginTop: props.mobile ? '2em' : '4em', }}>

      {/* <div style={{ padding: props.mobile ? 0 : '4em', backgroundColor: 'white', borderRadius: 20 }}> */}
      {/* <div style={{ backgroundColor: 'white',borderRadius:20,margin: '0px 50px' }} vertical> */}
      {isLoggedIn ?
        <>
          <Grid container columns={2} stackable doubling verticalAlign="middle" style={{}} >
            <Grid.Column width={4} stackable style={{ padding: "10px 30px" }}>
              <MainMenu {...props} />
            </Grid.Column>
            <Grid.Column width={12}>
              <Grid container columns={2} stackable doubling verticalAlign="middle" style={{ padding: '6em 0em' }} >
                <Grid.Row centered>
                  <h1
                    style={{
                      fontWeight: "bolder",
                      color: "black",
                      fontSize: 65,
                      fontSize: props.mobile ? '1em' : '2em',
                      //       fontWeight: 'bolder',
                      //       marginBottom: 0,
                      // marginTop: props.mobile ? '1.5em' : '0em',
                    }}
                  >
                    Selamat datang, {props.user.email}
                  </h1>
                </Grid.Row>
                <Grid.Row centered style={{ padding: '0em 4em' }} >
                  {/* <MainMenu {...props} /> */}
                  <Schedules />
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid>


          <Grid container stackable doubling verticalAlign="middle" style={{ padding: '6em 0em' }} >
            {/* <Grid.Column width={4} stackable style={{ padding: "10px 30px" }}> */}
            <Grid.Row centered>
              <Header as='h2' style={{ fontSize: '2em', padding: '1em 0em' }}>
                Rekomendasi khusus untukmu!
       </Header>
            </Grid.Row>
            <Recomend />
            {/* </Grid.Column> */}
          </Grid>
        </>
        : <></>
      }


      <div style={{ padding: props.mobile ? 0 : '4em', backgroundColor: 'white', borderRadius: 20 }}>
        {/* <div style={{ backgroundColor: 'white',borderRadius:20,margin: '0px 50px' }} vertical> */}
        <Grid container stackable verticalAlign='middle'>
          {isLoggedIn ?
            <></>
            :
            <AboutSegment data={about.about_home} />
          }
          <Grid.Row centered>
            <Header as='h2' style={{ fontSize: '2em', }}>
              Brosis Bukan Kosan Biasa!
        </Header>
          </Grid.Row>
          <PreviewSegment data={kampus} title="Lihat Semua" href={'#link kampus'} />
        </Grid>
      </div>

      <div style={{ margin: props.mobile ? '2em 0em' : '4em', padding: '2em', backgroundColor: 'white', borderRadius: 20 }}>
        <ImageCarousel data={gambar_jam} {...props} icon="clock"/>
      </div>

      <div style={{ padding: '4em 0em', backgroundColor: 'white', borderRadius: 20 }}>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row centered>
            <Header as='h2' style={{ fontSize: '2em', }}>
              Kami ada dimana kamu ada!
        </Header>
          </Grid.Row>
          <PreviewSegment data={kampus} title="Lihat Semua Lokasi" href={'#link lokasi'} />
        </Grid>
      </div>

      <div style={{ padding: '4em 0em' }}>
        <KataBrosisSegment />
      </div>

      <div style={{ padding: '4em 0em', backgroundColor: 'white', borderRadius: 20 }} >
        <KeseruanSegment />
      </div>

    </Container>
  );
}

export default Index;
