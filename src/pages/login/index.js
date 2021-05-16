import React, { useState } from 'react'
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react'

const Index = () => {
  const [form, setForm] = useState({})
  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value })
  }
  return (
    < Grid textAlign='center'
      style={{
        height: 700,
        backgroundImage: `url(${"./background.jpg"})`,
        backgroundSize: 'cover',
      }}
      verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h1 style={{ padding: '0px 0px', margin: 0, fontWeight: 'bolder' }}>BROSIS</h1>
          <h1 style={{ padding: '0px 0px', color: 'blue', margin: 0, fontWeight: 'bolder' }}>'</h1>
        </div>
        <Header as='h2' style={{ color: 'white' }} textAlign='center'>
          {/* <Image src='/logo.png' /> */}
         Masuk ke akun anda
      </Header>
        <Form size='large'>
          <Segment style={{ borderRadius: 20 }}>
            <Form.Input
              id="email"
              fluid
              icon='user'
              iconPosition='left'
              input={<input style={{ borderRadius: 15 }} />}
              placeholder='E-mail address'
              type='email'
              onChange={handleChange}
            />
            <Form.Input
              id="password"
              fluid
              icon='lock'
              iconPosition='left'
              input={<input style={{ borderRadius: 15 }} />}
              placeholder='Password'
              type='password'
              style={{ borderRadius: 20 }}
              onChange={handleChange}
            />
            <Button style={{ borderRadius: 20 }} color='blue' fluid size='large'>
              Masuk
          </Button>
          </Segment>
        </Form>
        <Message style={{ borderRadius: 20 }}>
          Baru bergabung dengan kami? <a href='#'>Daftar</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
}

export default Index;