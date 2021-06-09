import React, { useState } from "react";
import { Container, Grid, Segment, Header, Divider, Form, Button } from "semantic-ui-react";


export default function Index(props) {
  const formDefault = {
    // nama_lengkap: "",
    // momor_ponsel: "",
    // email: "",
    // universitas: "",
    // keterangan: "",
  };

  const [form, setForm] = useState(formDefault);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value })
  }
  console.log(form);
  return (
    <Container style={{ marginTop: '3em' }}>
      <Segment style={
        props.mobile ?
          { borderRadius: 20 } :
          { margin: '4em 10em', padding: '1em 0em', borderRadius: 20 }
      }>

        <Grid container stackable verticalAlign='middle' style={{ padding: '1em' }}>
          <Grid.Row centered>
            <Header as='h1' style={{ fontWeight: 'bolder', color: 'midnightblue' }}>
              Adminisitrasi Pembayaran
            </Header>
          </Grid.Row>
        </Grid>
        <Divider />
        <Form>
          <Grid container stackable verticalAlign='middle' style={{ padding: props.mobile ? 0 : '3em' }}>
            <Grid.Row centered columns={2}>
              <Grid.Column width={4} style={props.mobile ? { padding: 0 } : {}}>
                <Header as='h5' style={{}}>
                  User ID
            </Header>
              </Grid.Column>
              <Grid.Column width={12}>
                <Form.Field >
                  {/* <label>Nama Lengkap</label> */}
                  <input
                    id="_id"
                    readOnly
                    placeholder="Title"
                    onChange={handleChange}
                    style={{ borderRadius: 15 }}
                    value="MEM0001"
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={2}>
              <Grid.Column width={4} style={props.mobile ? { padding: 0 } : {}}>
                <Header as='h5' style={{}}>
                  Nama
            </Header>
              </Grid.Column>
              <Grid.Column width={12}>
                <Form.Field >
                  {/* <label>Nama Lengkap</label> */}
                  <input
                    id="name"
                    placeholder="Name"
                    onChange={handleChange}
                    style={{ borderRadius: 15 }}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={2}>
              <Grid.Column width={4} style={props.mobile ? { padding: 0 } : {}}>
                <Header as='h5' style={{}}>
                  Transfer Ke
            </Header>
              </Grid.Column>
              <Grid.Column width={12}>
                <Form.Field >
                  {/* <label>Nama Lengkap</label> */}
                  <input
                    id="transfer_to"
                    placeholder="Name"
                    onChange={handleChange}
                    style={{ borderRadius: 15 }}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={2}>
              <Grid.Column width={4} style={props.mobile ? { padding: 0 } : {}}>
                <Header as='h5' style={{}}>
                  Jumlah Transfer
            </Header>
              </Grid.Column>
              <Grid.Column width={12}>
                <Form.Field >
                  {/* <label>Nama Lengkap</label> */}
                  <input
                    id="nominal"
                    placeholder="Jumlah Transfer"
                    onChange={handleChange}
                    style={{ borderRadius: 15 }}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={2}>
              <Grid.Column width={4} style={props.mobile ? { padding: 0 } : {}}>
                <Header as='h5' style={{}}>
                  Tanggal Transfer
            </Header>
              </Grid.Column>
              <Grid.Column width={12}>
                <Form.Field >
                  {/* <label>Nama Lengkap</label> */}
                  <input
                    id="transfer_date"
                    placeholder="Name"
                    onChange={handleChange}
                    style={{ borderRadius: 15 }}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={2}>
              <Grid.Column width={4} style={props.mobile ? { padding: 0 } : {}}>
                <Header as='h5' style={{}}>
                  Bukti Transfer
            </Header>
              </Grid.Column>
              <Grid.Column width={12}>
                <Form.Field >
                  {/* <label>Nama Lengkap</label> */}
                  <input
                    id="image"
                    placeholder="Name"
                    onChange={handleChange}
                    style={{ borderRadius: 15 }}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={2}>
              <Grid.Column width={4}>
                <Header as='h5' style={{}}>
                  Deskripsi
            </Header>
              </Grid.Column>
              <Grid.Column width={12}>
                <Form.Field >
                  {/* <label>Nama Lengkap</label> */}
                  <textarea
                    id="description"
                    placeholder="Description"
                    onChange={handleChange}
                    style={{ borderRadius: 15 }}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
        <Divider />
        <Grid container stackable tverticalAlign='middle' style={{ padding: '1em 4em', paddingTop: '1em', display: 'flex', justifyContent: 'flex-end' }}>
          <Button compact basic content="Cancel" floated="right" />
          <Button compact color="blue" content="Simpan" floated="right" />
        </Grid>
      </Segment>
    </Container >
  )
}