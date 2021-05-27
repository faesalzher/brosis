import React, { useState, useEffect } from 'react'
import { Grid, Form, Button } from 'semantic-ui-react'

export default function Detail(props) {
  const formDefault = {
    nama_lengkap: "Nama Lengkap Anda",
    momor_ponsel: "089273723",
    email: "as",
    universitas: "",
  };

  const [form, setForm] = useState(formDefault);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value })
  }
  return (
    <Grid.Row centered>
      <Grid.Column textAlign="center" width={8} style={{ padding: '2em' }}>
        <img
          alt="menu"
          src={"https://cdn.statically.io/img/9to5mac.com/2018/06/05/macos-mojave-wallpapers-download/mojave-day/"}
          style={{
            height: '20em', width: '20em',
            objectFit: "fill", borderRadius: "50%",
            // position: "absolute",
          }}
        />
      </Grid.Column>
      <Grid.Column width={8} style={{ padding: '2em' }}>
        <Form>
          <Form.Field >
            <label>Nama Lengkap</label>
            <input
              id="nama_lengkap"
              placeholder="Full Name Example"
              onChange={handleChange}
              style={{ borderRadius: 15 }}
              value={form.nama_lengkap}
            />
          </Form.Field>
          <Form.Field>
            <label>Nomor Ponsel</label>
            <input
              placeholder="Nomor Ponsel"
              id="nomor_ponsel"
              onChange={handleChange}
              style={{ borderRadius: 15 }}
              type="number"
              value={form.nomor_ponsel}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              placeholder="example@email.com"
              id="email"
              onChange={handleChange}
              style={{ borderRadius: 15 }}
              value={form.email}
              
              />
              
          </Form.Field>
          <Form.Field>
            <label>Universitas</label>
            <input
              placeholder="Universitas ABCD"
              id="universitas"
              onChange={handleChange}
              style={{ borderRadius: 15 }} />
          </Form.Field>
        </Form>
      </Grid.Column>
    </Grid.Row>
  );
}