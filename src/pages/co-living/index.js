import React, { Fragment } from "react";
import { Button, Card, Menu, Container, Form, Grid, Segment, Image, Header } from "semantic-ui-react";
import kost from "../../stores/kost";

function KostList() {
  return (
    <Grid container columns={4} doubling stackable>
      {kost.map((item, index) => {
        return (
          <Grid.Column key={index}>
            <Card
              href='#card-example-link-card'
              style={{
                width: "100%",
                borderRadius: 20,
              }}>
              <div >
                <img
                  alt="photo"
                  src={item.photo}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: 200,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  }}
                />
              </div>
              <Card.Content>
                <Card.Header style={{ color: 'blue' }}>{item.name}</Card.Header>
                <Card.Meta>{item.location}</Card.Meta>
                {/* <Card.Description>{item.address}</Card.Description> */}
              </Card.Content>
              {/* <Card.Content extra>
                <b>{item.price}</b>
              </Card.Content> */}
            </Card>
          </Grid.Column>
        )
      })}
    </Grid>
  )
}

const HeaderBar = () => {
  return (
    <div>
      <Menu
        fixed={'top'}
        size='large'
      >
        <Container>
          <Menu.Item as='h1' style={{ padding: '0px 10px', margin: 0, fontWeight: 'bolder' }}>
            <div style={{ display: 'flex' }}>
              <h1 style={{ padding: '0px 0px', margin: 0, fontWeight: 'bolder' }}>BROSIS</h1>
              <h1 style={{ padding: '0px 0px', color: 'blue', margin: 0, fontWeight: 'bolder' }}>'</h1>
            </div>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item as='a'>Keseharian</Menu.Item>
            <Menu.Item as='a'>Lokasi</Menu.Item>
            <Menu.Item as='a'>Bantuan</Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  )
}

function TellUsForm() {
  return (
    <Segment style={{ borderRadius: 20 }}>
      <Grid>
        <Grid.Column width={8}>
          <div style={{
            paddingTop: "44%",
            marginLeft: 18
          }}>
            <div style={{ fontWeight: 900, fontSize: 28, marginBottom: 15 }}>
              Belum menemukan brosis di kampusmu?
            </div>
            <div style={{ fontWeight: 900, fontSize: 22 }}>
              Jangan khawatir, ceritakan pada kami.
            </div>
          </div>
        </Grid.Column>
        <Grid.Column width={8}>
          <Form>
            <Form.Field>
              <label>Nama Lengkap</label>
              <input placeholder="Full Name Example" />
            </Form.Field>
            <Form.Field>
              <label>Nomor Ponsel</label>
              <input placeholder="+62..." />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input placeholder="example@email.com" />
            </Form.Field>
            <Form.Field>
              <label>Universitas</label>
              <input placeholder="Universitas ABCD" />
            </Form.Field>
            <Form.Field>
              <label>Keterangan (opsional)</label>
              <textarea placeholder="Tambahan keterangan..." />
            </Form.Field>
            <Button primary>Kirimkan</Button>
          </Form>
        </Grid.Column>
      </Grid>
    </Segment>
  )
}

function Description() {
  return (
    <div>
      <Grid>
        <Grid.Column width={8}>
          <div style={{ marginTop: 60 }}>
            <h1>Hunian terjangkau berlokasi strategis</h1>
            <h3>Jangan salah, walaupun harga tinggal di Brosis amat terjangkau, tetapi Brosis selalu berdiri di lokasi-lokasi yang strategis dan dekat dengan kampus favoritmu!</h3>
          </div>
        </Grid.Column>
        <Grid.Column width={8}>
          <div style={{ margin: 20 }}>
            <img
              alt="preview"
              src="https://asset.kompas.com/crops/mLvE54pAGkvYBY6eMDAt7eN0V1c=/0x4:1000x670/750x500/data/photo/2017/05/26/1411099444.jpg"
              style={{
                objectFit: "cover",
                width: "100%", height: 250,
                borderRadius: 50
              }}
            />
          </div>
        </Grid.Column>
      </Grid>
      <br />
      <Grid>
        <Grid.Column width={8}>
          <div style={{ margin: 20 }}>
            <img
              alt="preview"
              src="https://live.staticflickr.com/2644/4312316795_c3efb665d1_b.jpg"
              style={{
                objectFit: "cover",
                width: "100%", height: 250,
                borderRadius: 50
              }}
            />
          </div>
        </Grid.Column>
        <Grid.Column width={8}>
          <div style={{ marginTop: 60 }}>
            <h1>Dekat dengan kampus</h1>
            <h3>Brosis House disediakan untuk mahasiswa diseluruh Indonesia. Maka dari itu, kamu tidak perlu khawatir cari tempat tinggal yang terjangkau dekat kampus.</h3>
          </div>
        </Grid.Column>
      </Grid>
      <br />
      <Grid>
        <Grid.Column width={8}>
          <div style={{ marginTop: 60 }}>
            <h1>Dekat dengan Ruang Publik dan Kuliner</h1>
            <h3>Buat kamu yang tinggal di Brosis tidak perlu lagi khawatir soal makanan atau kebutuhan karena lokasi strategis Brosis dekat dengan ikon-ikon kota atau distrik makanan.</h3>
          </div>
        </Grid.Column>
        <Grid.Column width={8}>
          <div style={{ margin: 20 }}>
            <img
              alt="preview"
              src="https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/ideafoto/original/12083_mau-tahu-gaya-industrial-kontemporer-cek-kafe-ini.jpg"
              style={{
                objectFit: "cover",
                width: "100%", height: 250,
                borderRadius: 50
              }}
            />
          </div>
        </Grid.Column>
      </Grid>
      <br />
      <Grid>
        <Grid.Column width={8}>
          <div style={{ margin: 20 }}>
            <img
              alt="preview"
              src="https://awsimages.detik.net.id/community/media/visual/2019/03/25/75c29e7c-5a8e-4beb-88c8-693fd410ad0a_169.jpeg?w=780&q=90"
              style={{
                objectFit: "cover",
                width: "100%", height: 250,
                borderRadius: 50
              }}
            />
          </div>
        </Grid.Column>
        <Grid.Column width={8}>
          <div style={{ marginTop: 60 }}>
            <h1>Akses mudah kendaraan dan angkutan publik</h1>
            <h3>Tidak memiliki kendaraan pribadi bukan jadi masalah lagi sebab lokasi Brosis dekat dengan akses kendaraan umum dan angkutan online.</h3>
          </div>
        </Grid.Column>
      </Grid>
      <br />
      <Grid>
        <Grid.Column width={8}>
          <div style={{ marginTop: 60 }}>
            <h1>Jaminan bersih, aman, dan nyaman.</h1>
            <h3>Kebersihan adalah sebagian dari iman. Maka dari itu, Brosis selalu menjaga kebersihan, keamanan, serta kenyamanan semua penghuninya.</h3>
          </div>
        </Grid.Column>
        <Grid.Column width={8}>
          <div style={{ margin: 20 }}>
            <img
              alt="preview"
              src="https://kominfo.lomboktimurkab.go.id/foto_berita/61kebersihan-lingkungan.jpg"
              style={{
                objectFit: "cover",
                width: "100%", height: 250,
                borderRadius: 50
              }}
            />
          </div>
        </Grid.Column>
      </Grid>
    </div>
  )
}

function Footer() {
  return (
    <div style={{
      backgroundColor: "#201C1C", color: "whitesmoke",
      paddingTop: 20, paddingBottom: 20,
    }}>
      <Container>
        <Grid>
          <Grid.Column width={8}>
            <h1>BROSIS`</h1>
            <b>
              Belajar bukan saja hanya mencari ilmu literasi dan ijazah.
              Belajar yang sesungguhnya adalah ketika seseorang dapat memberikan dampak positif, inspirasi, serta menjadi bagian dari perubahan.
            </b>
          </Grid.Column>
          <Grid.Column width={8}>
            <div style={{ textAlign: "right" }}>
              <h1>Kontak</h1>
              <b>Hotline - 088 906 320515</b><br />
              <b>Email - lifeatbrosis@gmail.com</b><br />
              <b>Social Medias - lifeatbrosis.id</b><br />
            </div>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  )
}

export default function Index() {
  return (
    <Fragment>
      <HeaderBar />
      <Container style={{ marginTop: '3em' }}>
        <Segment style={{ padding: '4em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row centered style={{padding:0}}>
              <Header as='h3' style={{ color: 'blue', fontWeight: 'bolder' }}>
                TEMUKAN
            </Header>
            </Grid.Row>
            <Grid.Row centered>
              <Header as='h1' style={{ fontWeight: 'bolder', fontSize:'2em' }}>
                Brosis di kampusmu!
            </Header>
            </Grid.Row>
          </Grid>
        </Segment>
        <KostList />
        <br />
        <TellUsForm />
        <br />
        <Description />
        <br />
      </Container>
      <Footer />
    </Fragment >
  )
}