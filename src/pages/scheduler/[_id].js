import React, { useState } from "react";
import { Container, Grid, Segment, Header, Divider, Form, Button } from "semantic-ui-react";


export default function Index(props) {
  const formDefault = {
    name: "Judul 1",
    start_date: "Tanggal 1",
    end_date: "Tanggal 1",
    description:"Floated icons are by default top aligned. To have an icon top aligned try this example."
};

const [form, setForm] = useState(formDefault);
const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value })
}
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
              Edit Schedule
            </Header>
          </Grid.Row>
        </Grid>
        <Divider />
        <Form>
          <Grid container stackable verticalAlign='middle' style={{ padding: props.mobile ? 0 : '3em' }}>
            <Grid.Row centered columns={2}>
              <Grid.Column width={2} style={props.mobile?{padding:0}:{}}>
                <Header as='h5' style={{}}>
                  Judul
            </Header>
              </Grid.Column>
              <Grid.Column width={14}>
                <Form.Field >
                  {/* <label>Nama Lengkap</label> */}
                  <input
                    id="name"
                    placeholder="Title"
                    onChange={handleChange}
                    style={{ borderRadius: 15 }}
                    value={form.name}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={4}>
              <Grid.Column width={2}>
                <Header as='h5' style={{}}>
                  Mulai
            </Header>
              </Grid.Column>
              <Grid.Column width={6}>
                <Form.Field >
                  {/* <label>Nama Lengkap</label> */}
                  <input
                    id="start_date"
                    placeholder="Start Date"
                    onChange={handleChange}
                    style={{ borderRadius: 15 }}
                    value={form.start_date}

                  />
                </Form.Field>
              </Grid.Column>
              <Grid.Column width={2}>
                <Header as='h5' style={{}}>
                  Selesai
            </Header>
              </Grid.Column>
              <Grid.Column width={6}>
                <Form.Field >
                  {/* <label>Nama Lengkap</label> */}
                  <input
                    id="end_date"
                    placeholder="End Date"
                    onChange={handleChange}
                    style={{ borderRadius: 15 }}
                    value={form.end_date}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={2}>
              <Grid.Column width={2}>
                <Header as='h5' style={{}}>
                  Deskripsi
            </Header>
              </Grid.Column>
              <Grid.Column width={14}>
                <Form.Field >
                  {/* <label>Nama Lengkap</label> */}
                  <textarea
                    id="description"
                    placeholder="Description"
                    onChange={handleChange}
                    style={{ borderRadius: 15 }}
                    value={form.description}
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