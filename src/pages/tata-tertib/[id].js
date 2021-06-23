import React, { Fragment } from "react";
import { Container, Grid, Icon, Segment, Header, Card, } from "semantic-ui-react";
// import ImageCarousel from "../../components/ImageCarousel";
// import UnitCard from "./UnitCard";

const wajib = [
  { name: "Wajib Bayar", img: "https://us.123rf.com/450wm/scyther5/scyther51705/scyther5170500069/79147284-developing-programming-and-coding-technologies-website-design-cyber-space-concept-.jpg?ver=6" },
  { name: "Wajib Nafas", img: "https://us.123rf.com/450wm/scyther5/scyther51705/scyther5170500069/79147284-developing-programming-and-coding-technologies-website-design-cyber-space-concept-.jpg?ver=6" },
]

const boleh = [
  { name: "Boleh Makan", img: "https://us.123rf.com/450wm/scyther5/scyther51705/scyther5170500069/79147284-developing-programming-and-coding-technologies-website-design-cyber-space-concept-.jpg?ver=6" },
  { name: "Boleh Tidur", img: "https://us.123rf.com/450wm/scyther5/scyther51705/scyther5170500069/79147284-developing-programming-and-coding-technologies-website-design-cyber-space-concept-.jpg?ver=6" },
]

const dilarang = [
  { name: "Ngutang", img: "https://us.123rf.com/450wm/scyther5/scyther51705/scyther5170500069/79147284-developing-programming-and-coding-technologies-website-design-cyber-space-concept-.jpg?ver=6" },
  { name: "Membawa Binatang", img: "https://us.123rf.com/450wm/scyther5/scyther51705/scyther5170500069/79147284-developing-programming-and-coding-technologies-website-design-cyber-space-concept-.jpg?ver=6" },
]



export default function Index(props) {

  return (
    <Container style={{ marginTop: '3em' }}>
      <Segment style={{ padding: '4em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row centered style={{ padding: 0, }}>
            <Header as='h2' style={{ fontWeight: 'bolder', color: 'midnightblue', textAlign: 'center', fontSize: '2em' }}>
              Tata Tertib Tinggal
            </Header>
          </Grid.Row>
          <Grid.Row centered>
            <Header as='h1' style={{ fontWeight: 'bolder', color: 'midnightblue', textAlign: 'center', fontSize: '3em' }}>
              di Brosis' House
            </Header>
          </Grid.Row>
          <Grid.Row centered>
          </Grid.Row>
        </Grid>
      </Segment>
      <div style={{ padding: props.mobile ? 0 : '4em', marginTop: '2em', backgroundColor: 'white', borderRadius: 20 }}>
        {/* <div style={{ backgroundColor: 'white',borderRadius:20,margin: '0px 50px' }} vertical> */}
        <Grid container doubling verticalAlign='middle'>
          <Grid.Row>
            <Header as='h2' style={{ fontSize: '2em', color: 'blue', textAlign: 'left' }}>
              Pasal I:7 Wajib
            </Header>
          </Grid.Row>
          <Grid.Row>
            <Header as='h4' style={{ textAlign: 'left' }}>
              Kewajiban Yang Harus Dilakukan
            </Header>
          </Grid.Row>
            <Grid.Row centered>
              <Grid.Column>
                <Card.Group itemsPerRow={2} stackable doubling>
                  {wajib.map((item, index) => {
                    return (
                      <UnitCard item={item} key={index} allow ={true}/>
                    )
                  })}
                </Card.Group>
              </Grid.Column>
            </Grid.Row>
        </Grid>
        <Grid container doubling verticalAlign='middle'>
          <Grid.Row>
            <Header as='h2' style={{ fontSize: '2em', color: 'blue', textAlign: 'left' }}>
              Pasal I:7 Boleh
            </Header>
          </Grid.Row>
          <Grid.Row>
            <Header as='h4' style={{ textAlign: 'left' }}>
              Kewajiban Yang Boleh Dilakukan
            </Header>
          </Grid.Row>
            <Grid.Row centered>
              <Grid.Column>
                <Card.Group itemsPerRow={2} stackable doubling>
                  {boleh.map((item, index) => {
                    return (
                      <UnitCard item={item} key={index} allow ={true}/>
                    )
                  })}
                </Card.Group>
              </Grid.Column>
            </Grid.Row>
        </Grid>
        <Grid container doubling verticalAlign='middle'>
          <Grid.Row>
            <Header as='h2' style={{ fontSize: '2em', color: 'blue', textAlign: 'left' }}>
              Pasal I:7 Dilarang
            </Header>
          </Grid.Row>
          <Grid.Row>
            <Header as='h4' style={{ textAlign: 'left' }}>
              Kewajiban Yang Dilarang Dilakukan
            </Header>
          </Grid.Row>
            <Grid.Row centered>
              <Grid.Column>
                <Card.Group itemsPerRow={2} stackable doubling>
                  {dilarang.map((item, index) => {
                    return (
                      <UnitCard item={item} key={index} allow ={false}/>
                    )
                  })}
                </Card.Group>
              </Grid.Column>
            </Grid.Row>
        </Grid>
      </div>
    </Container>
  )
}

const UnitCard = (props) => {
  const { mini, item } = props;
  return (
    <Card
      style={{
        borderRadius: 20,
      }}>
      <div style={{ }} >
        <img
          alt="image"
          src={item.img}
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

        <Header as='h2' style={{ margin: "2px 0px" }}>
          {
            props.allow ?
              <Icon name="check circle outline" color="green"/>
              :
              <Icon name="minus circle" color="red"/>
          }
          {item.name}
        </Header>
      </Card.Content>
    </Card>
  );
}