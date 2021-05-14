// import React, { Fragment } from "react";
import { Image } from "semantic-ui-react";
// import Router from "next/router";
import menu from "../stores/home";
import kost from "../stores/kost";
import Router from "next/router";
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

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})
const dataSeru = [0, 1, 2, 3, 4, 5, 6, 7, 8];
import image_default from '../../public/image_default.png'
import image_not_found from '../../public/image_not_found.png'


const HomepageHeading = ({ mobile }) => (
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
  <Container style={{ marginTop: 50 }}>
    <Grid container columns={2} doubling verticalAlign="middle" style={{}} >
      <Grid.Column width={8}>
        <h1
          style={{
            fontWeight: "bolder",
            color: "white",
            fontSize: 65,
          }}
        >
          There is nothing like Brosis life.
      </h1>
      </Grid.Column>
      <Grid.Column width={8}>
        <Card
          style={{
            width: "100%", boxShadow: "none",
            backgroundColor: "rgba(0,0,0,0.25)",
            borderRadius: 20,
          }}
        >
          <Card.Content>
            <h1
              style={{
                color: "white",
                textAlign: "center",
              }}
            >
              Menu
                      </h1>
            <Grid>
              {menu.map((item, index) => {
                return (
                  <Grid.Column width={8} key={index}>
                    <Card
                      style={{
                        borderRadius: 20,
                        boxShadow: "none",
                        backgroundColor: item.color,
                      }}
                      onClick={() => Router.push(item.link)}
                    >
                      <Card.Content>
                        <img
                          alt="menu"
                          src={item.background}
                          style={{
                            height: 60, width: 60,
                            objectFit: "fill", borderRadius: "50%",
                            position: "absolute",
                          }}
                        />
                        <h1
                          style={{
                            marginTop: 10, marginLeft: 70, marginBottom: 13,
                            color: "black",
                          }}
                        >
                          {item.name}
                        </h1>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                )
              })}
            </Grid>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  </Container >
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Media greaterThan='mobile'>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='left'
            style={{
              minHeight: 700, padding: '1em 0em',
              backgroundImage: `url(${"./background.jpg"})`,
              backgroundSize: 'cover',
            }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                {/* <Menu.Item as='a' active>
                  Keseharian
                </Menu.Item>
                <Menu.Item as='a'>Lokasi</Menu.Item>
                <Menu.Item as='a'>Bantuan</Menu.Item> */}
                {/* <Menu.Item as='a'>Dana</Menu.Item> */}
                <Menu.Item as='h1' style={{ padding: '0px 10px', margin: 0, fontWeight: 'bolder' }}>
                  {/* <img src="./logo.png" alt="logo" style={{ height: 30, width: "auto" }} />
                  BROSIS' */}
                  <div style={{ display: 'flex' }}>
                    <h1 style={{ padding: '0px 0px', margin: 0, fontWeight: 'bolder' }}>BROSIS</h1>
                    <h1 style={{ padding: '0px 0px', color: 'blue', margin: 0, fontWeight: 'bolder' }}>'</h1>
                  </div>
                </Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>
                    Masuk
                  </Button>
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Daftar
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading style={{ width: 100 }} />
          </Segment>
        </Visibility>

        { children}
      </Media >
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Media as={Sidebar.Pushable} at='mobile'>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            {/* <Menu.Item as='a' active>
              Home
            </Menu.Item>
            <Menu.Item as='a'>Work</Menu.Item>
            <Menu.Item as='a'>Company</Menu.Item>
            <Menu.Item as='a'>Careers</Menu.Item> */}
            <Menu.Item style={{ marginLeft: -15 }}>
              <img src="./logo.png" alt="logo" style={{ height: 30, width: "auto" }} />
            </Menu.Item>
            <Menu.Item as='a'>Masuk</Menu.Item>
            <Menu.Item as='a'>Daftar</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted>
                      Masuk
                    </Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                      Daftar
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const Index = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      {/* <div style={{ backgroundColor: 'white',borderRadius:20,margin: '0px 50px' }} vertical> */}
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column floated='middle' width={8} style={{ padding: '2em' }}>
            <Image style={{ borderRadius: 20, width: '100%' }} bordered rounded size='large' src='https://www.iberdrola.com/wcorp/gc/prod/en_US/comunicacion/coliving_mult_1_res/Coliving_746x419.jpg' />
          </Grid.Column>
          <Grid.Column width={8} style={{ padding: '2em' }}>
            <Header as='h2' style={{ fontSize: '1.8em' }}>
              Tentang Brosis House
            </Header>
            <Header as='h2' style={{ color: 'blue', fontSize: '2em' }}>
              Konsep hunian:
              Shared Communal Living
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8} style={{ padding: '2em' }}>
            <Header as='h2' style={{ fontSize: '1.8em', textAlign: 'right' }}>
              Fasilitas di Brosis house
            </Header>
            <Header as='h2' style={{ color: 'blue', fontSize: '2em', textAlign: 'right' }}>
              Semua milik kita bersama
            </Header>
            <p style={{ fontSize: '1.33em', textAlign: 'right' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Grid.Column>
          <Grid.Column width={8} style={{ padding: '2em' }}>
            <Image style={{ borderRadius: 20, width: '100%' }} bordered rounded size='large' src='https://miro.medium.com/max/2596/1*wa0vPro0KkqrVKj8upXHow.png' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8} style={{ padding: '2em' }}>
            <Image style={{ borderRadius: 20, width: '100%' }} bordered rounded size='large' src='https://static01.nyt.com/images/2015/08/02/realestate/02COV1/02COV1-superJumbo.jpg' />
          </Grid.Column>
          <Grid.Column width={8} style={{ padding: '2em' }}>
            <Header as='h2' style={{ fontSize: '1.8em' }}>
              Rasanya tinggal disini
            </Header>
            <Header as='h2' style={{ color: 'blue', fontSize: '2em' }}>
              Kehangatan seperti rumah
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Header as='h2' style={{ fontSize: '2em', }}>
            Brosis Bukan Kosan Biasa!
            </Header>
        </Grid.Row>
        <Grid.Row>
          <Grid container columns={4} doubling stackable>
            {kost.slice(3).map((item, index) => {
              return (
                <Grid.Column>
                  <div >
                    <img
                      alt="photo"
                      src={item.photo}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: 200,
                        borderRadius: 20,
                        boxShadow: "1px 1px 1px gray"
                      }}
                    />
                  </div>
                </Grid.Column>
              )
            })}
            <Grid.Column>
              <Card
                href='#card-example-link-card'
                style={{ height: 200, borderRadius: 20 }}
              >
                <Card.Content
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column'
                  }}
                >
                  <Card.Header>{<h1 style={{ textAlign: 'center', color: 'blue' }}>Lihat Semua</h1>}</Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid>
        </Grid.Row>
        {/* <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Lihat Semua</Button>
          </Grid.Column>
        </Grid.Row> */}
      </Grid>
      {/* </div> */}
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

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row centered>
          <Header as='h2' style={{ fontSize: '2em', }}>
            Kami ada dimana kamu ada!
            </Header>
        </Grid.Row>
        <Grid.Row centered>
          <Grid container columns={4} doubling stackable>
            {kost.slice(3).map((item, index) => {
              return (
                <Grid.Column>
                  <div >
                    <img
                      alt="photo"
                      src={item.photo}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: 200,
                        borderRadius: 20,
                        boxShadow: "1px 1px 1px gray"
                      }}
                    />
                  </div>
                </Grid.Column>
              )
            })}
            <Grid.Column>
              <Card
                href='#card-example-link-card'
                style={{ height: 200, borderRadius: 20 }}
              >
                <Card.Content
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column'
                  }}
                >
                  <Card.Header>{<h1 style={{ textAlign: 'center', color: 'blue' }}>Lihat Semua Lokasi</h1>}</Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid>
          {/* <Grid.Column textAlign='center'>
            <Button size='huge'>Lihat Semua Lokasi</Button>
          </Grid.Column> */}
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row >
          <Grid container columns={1} doubling stackable>
            <Header as='h2' style={{ fontSize: '2em', }}>
              Kata Brosis'
            </Header>
          </Grid>
        </Grid.Row>
        <Grid.Row centered>
          <Grid container columns={3} doubling stackable>
            {kost.slice(3).map((item, index) => {
              return (
                <Grid.Column>
                  <div >
                    <img
                      alt="photo"
                      src={image_default}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: 300,
                        borderRadius: 20,
                        boxShadow: "1px 1px 1px gray"
                      }}
                    />
                  </div>
                </Grid.Column>
              )
            })}
          </Grid>
          {/* <Grid.Column textAlign='center'>
            <Button size='huge'>Lihat Semua Lokasi</Button>
          </Grid.Column> */}
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row centered>
          <Header as='h2' style={{ fontSize: '2em', }}>
            Selalu ada yang seru!
            </Header>
        </Grid.Row>
        <Grid.Row centered>
          <Header as='h4' color="grey">
            Inilah sebagian kecil keseruan kami...
            </Header>
        </Grid.Row>
        <Grid.Row centered>
          <Grid container columns={4} doubling stackable>
            {dataSeru.slice(0, 8).map((item, index) => {
              return (
                <Grid.Column>
                  <div >
                    <img
                      alt="photo"
                      src={image_not_found}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: 200,
                        borderRadius: 20,
                        border: "solid 1px gray"
                      }}
                    />
                  </div>
                </Grid.Column>
              )
            })}
          </Grid>
        </Grid.Row>
        <Grid.Row centered>
          <Header as='h2' style={{ fontSize: '2em', }}>
            #FeelsLikeHome
            </Header>
        </Grid.Row>
        <Grid.Row centered>
          <Header as='h4' color="grey">
            Brosis 2020 - All Right Reserved
            </Header>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={7}>
              <Header as='h1' inverted>
                BROSIS'
              </Header>
              <p>
                Belajar bukan saja hanya mencari ilmu literasi dan ijazah. Belajar yang sesungguhnya adalah ketika seseorang dapat memberikan dampak positif, inspirasi, serta menjadi bagian dari perubahan.
              </p>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as='h4' content='Menu' style={{ color: "aquamarine" }} />
              <List link inverted>
                <List.Item as='a'>Keseharian</List.Item>
                <List.Item as='a'>Lokasi</List.Item>
                <List.Item as='a'>Bantuan</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as='h4' content='Kontak' style={{ color: "aquamarine" }} />
              <List link inverted>
                <List.Item as='a'>Hotline - 088 906 320515</List.Item>
                <List.Item as='a'>Email - lifeatbrosis@gmail.com</List.Item>
                <List.Item as='a'>Social Medias - lifeatbrosis.id</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default Index
