import React, { Fragment, useRef } from "react";
import { Container, Grid, Segment, Header, Image, Card, Button, Label, Divider } from "semantic-ui-react";
import ImageCarousel from "../../components/ImageCarousel";
import room from '../../stores/room';
import ReservationForm from './ReservationForm';
import PreviewSegment from '../../components/segment/PreviewSegment';
import about from "../../stores/about";
import kampus from "../../stores/kampus";
import faker from 'faker';
// import roomCard from "./roomCard";
import KataBrosisSegment from '../../components/segment/KataBrosisSegment';
import KeseruanSegment from '../../components/segment/KeseruanSegment';

export default function Index(props) {

  const myRef = useRef(null)

  const executeScroll = () => myRef.current.scrollIntoView()
  return (
    <Container style={{ marginTop: '3em' }}>
      <Segment style={{ padding: '4em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row centered style={{ padding: 0, }}>
            <Header as='h2' style={{ fontWeight: 'bolder', color: 'midnightblue', textAlign: 'center', fontSize: '2em' }}>
              Selamat datang di
            </Header>
          </Grid.Row>
          <Grid.Row centered>
            <Header as='h1' style={{ fontWeight: 'bolder', color: 'midnightblue', textAlign: 'center', fontSize: '3em' }}>
              Bro' House Univesitas Brawijaya
            </Header>
          </Grid.Row>
          <Grid.Row centered>
          </Grid.Row>
        </Grid>
      </Segment>
      <div style={{ margin: props.mobile ? '2em 0em' : '4em', padding: '2em', backgroundColor: 'white', borderRadius: 20 }}>
        <ImageCarousel data={room} {...props} />
      </div>
      <div style={{ padding: props.mobile ? 0 : '4em', backgroundColor: 'white', borderRadius: 20 }}>
        {/* <div style={{ backgroundColor: 'white',borderRadius:20,margin: '0px 50px' }} vertical> */}

        <Grid container stackable verticalAlign='middle'>
          <Grid.Row centered style={{ padding: '2em' }}>
            <Header as='h2' style={{ fontSize: '2em', }}>
              Profil Bro' House Universitas Brawijaya
            </Header>
          </Grid.Row>
          <p style={{ fontSize: '1.33em', textAlign: 'center' }}>
            {faker.lorem.paragraphs()}
          </p>
          <Grid.Row centered style={{ padding: '2em' }}>
            <Header as='h2' style={{ fontSize: '2em', }}>
              Pilihan Ruang Kamar
            </Header>
          </Grid.Row>
        </Grid>
        <Grid container stackable verticalAlign='middle' style={{}}>
          <Grid.Row centered>
            <Grid.Column>
              <Card.Group itemsPerRow={2} stackable doubling>
                {room.map((item, index) => {
                  return (
                    // <Link key={index} href="/co-living/[_id]" as={`/co-living/${item._id}`}>
                    <Card
                      key={index}
                      raised
                      style={{
                        borderRadius: 20,
                        padding: '1em',
                      }}>
                      {
                        item.availibility ?
                          <Label color='green' ribbon style={{ width: "max-content" }}>
                            Unit Tersedia
                          </Label>
                          :
                          <Label color='red' ribbon style={{ width: "max-content" }}>
                            Unit Tidak Tersedia
                          </Label>
                      }
                      <div style={{ height: '70%', padding: props.mobile ? '0px 10px' : '5px' }} >
                        <img
                          alt="image"
                          src={item.image}
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                            borderRadius: 20,
                          }}
                        />
                      </div>
                      <Card.Content extra style={{ textAlign: 'center' }}>
                        <Header as='h3' style={{ margin: "2px 0px", textAlign: 'center', color: "blue" }}>
                          {item.name} - {item.type}
                        </Header>
                        <Header as='h5' style={{ margin: "2px 0px", color: 'grey' }}>
                          Harga sewa per orangan
                        </Header>
                        <Header as='h6' style={{ color: 'grey', margin: '1em 0em' }}>
                          <Label tag style={{ margin: "0px 5px" }}>
                            <Header as='h3' style={{}}>
                              {item.price}
                            </Header>
                          </Label>
                          / Bulan
                        </Header>
                        <Button content='Mau yang ini!' disabled={!item.availibility} fluid primary style={{ borderRadius: 20, margin: "1em 0px" }} />
                      </Card.Content>
                    </Card>
                    // </Link>
                  )
                })}
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row centered style={{ padding: '2em' }}>
            <Header as='h2' style={{ fontSize: '2em', }}>
              Demi Kenyamanan Bersama...
            </Header>
          </Grid.Row>
          <PreviewSegment data={kampus} title="Lihat Semua Tata Tertib" href={'#link kampus'} />
        </Grid>
          <Grid container stackable verticalAlign='middle'>
            <ReservationForm ref={myRef} />
          </Grid>
      </div>
      <div style={{ padding: props.mobile ? 0 : '4em 0em' }}>
        <KataBrosisSegment />
      </div>

      <div style={{ padding: props.mobile ? 0 : '4em 0em', backgroundColor: 'white', borderRadius: 20 }} >
        <KeseruanSegment />
      </div>
    </Container>
  )
}