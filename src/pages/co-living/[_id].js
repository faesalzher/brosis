import React, { Fragment } from "react";
import { Container, Grid, Segment, Header, Image, Card,Button, Label } from "semantic-ui-react";
import ImageCarousel from "../../components/ImageCarousel";
import kost from '../../stores/kost';
import AboutSegment from '../../components/segment/AboutSegment';
import PreviewSegment from '../../components/segment/PreviewSegment';
import about from "../../stores/about";
import kampus from "../../stores/kampus";
import faker from 'faker';
// import UnitCard from "./UnitCard";
import KataBrosisSegment from '../../components/segment/KataBrosisSegment';
import KeseruanSegment from '../../components/segment/KeseruanSegment';
export default function Index(props) {
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
              Brosis Univesitas Brawijaya
            </Header>
          </Grid.Row>
          <Grid.Row centered>
          </Grid.Row>
        </Grid>
      </Segment>
      <div style={{ margin: props.mobile ? '2em 0em' : '4em', padding: '2em', backgroundColor: 'white', borderRadius: 20 }}>
        <ImageCarousel data={kost} {...props} />
      </div>
      <div style={{ padding: props.mobile ? 0 : '4em', backgroundColor: 'white', borderRadius: 20 }}>
        {/* <div style={{ backgroundColor: 'white',borderRadius:20,margin: '0px 50px' }} vertical> */}

        <Grid container stackable verticalAlign='middle'>
          <Grid.Row centered style={{ padding: '2em' }}>
            <Header as='h2' style={{ fontSize: '2em', }}>
              Tentang Brosis House Universitas Brawijaya
            </Header>
          </Grid.Row>
          <p style={{ fontSize: '1.33em', textAlign: 'center' }}>
            {faker.lorem.paragraphs()}
          </p>
          <Grid.Row centered style={{ padding: '2em' }}>
            <Header as='h2' style={{ fontSize: '2em', }}>
              Pilihan Unit Brosis Universitas Brawijaya
            </Header>
          </Grid.Row>
        </Grid>
        <Grid container stackable verticalAlign='middle' style={{}}>
            <Grid.Row centered>
                <Grid.Column>
                    <Card.Group itemsPerRow={2} stackable doubling>
                        {kost.map((item, index) => {
                            return (
                                // <Link key={index} href="/co-living/[_id]" as={`/co-living/${item._id}`}>
                                <Card
                                    key={index}
                                    style={{
                                        borderRadius: 20,
                                    }}>
                                    <div style={{ height: '70%' }} >
                                        <img
                                            alt="image"
                                            src={item.image}
                                            style={{
                                                objectFit: "cover",
                                                width: "100%",
                                                height: "100%",
                                                padding: '1em',
                                                borderRadius: 30,
                                            }}
                                        />
                                    </div>
                                    <Card.Content extra style={{ textAlign: 'center' }}>
                                        <Header as='h5' style={{ margin: "2px 0px" }}>
                                            {item.type}
                                        </Header>
                                        <Header as='h2' style={{ color: "blue", margin: "2px 0px" }}>
                                            {item.name}
                                        </Header>
                                        <Header as='h5' style={{ color: 'grey', margin: "2px 0px" }}>
                                            Mulai  <Label tag style={{ marginLeft: '1em' }}>{item.price}</Label> / Bulan
                                        </Header>

                                        <Button content='Lihat Unit' fluid primary style={{ borderRadius: 20, margin: "1em 0px" }} />
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
              Amenitas Brosis House Universitas Brawijaya
            </Header>
          </Grid.Row>
          <PreviewSegment data={kampus} title="Lihat Semua Amenitas" href={'#link kampus'} />
        </Grid>
      </div>
      <div style={{ padding: props.mobile ? 0 : '4em', borderRadius: 20 }}>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row >
            <Grid.Column width={8} style={{ padding: '2em', textAlign: 'left' }}>
              <Header as='h2' style={{ color: 'darkblue', fontSize: '2em' }}>
                Kegiatan Komunitas di Brosis Universitas Brawijaya
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                {faker.lorem.sentences()}
              </p>
            </Grid.Column>
            <Grid.Column width={8} style={{ padding: '2em', textAlign: 'right' }}>
              <Image style={{
                objectFit: "cover",
                width: "100%",
                height: 300,
                borderRadius: 150,
                boxShadow: "0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15)",
              }} rounded size='large' src={"https://static.mamikos.com/uploads/cache/data/style/2019-11-27/6CqlIdr0-540x720.jpg"} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      <div style={{ padding: props.mobile ? 0 : '4em 0em', backgroundColor: 'white', borderRadius: 20 }}>
        <Grid container stackable verticalAlign='middle'>
          <AboutSegment data={about.about_kost} />
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