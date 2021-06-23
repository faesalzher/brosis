import React, { useState } from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";

export default function ReservationForm(props) {
    const formDefault = {
        nama_lengkap: "",
        momor_ponsel: "",
        email: "",
        universitas: "",
        keterangan: "",
    };

    const [form, setForm] = useState(formDefault);
    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm({ ...form, [id]: value })
    }

    return (
        <>
            <Grid.Column width={8} style={{ padding: '2em' }}>
                <Segment raised style={{padding:'2em'}}>
                    <Header as='h2' style={{ color: 'blue', fontSize: '3em', fontWeight: 'bolder' }}>
                        Reservasi Tempat!
                    </Header>
                    <Header as='h3' style={{ fontWeight: 'bolder' }}>
                        Bro' House Tidar
                    </Header>
                    <p style={{ color: 'grey' }}>
                        32 Park Meadow Point RT 35 / RW 21
                    </p>
                </Segment>
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
                        />
                    </Form.Field>
                    {/* <Form.Field>
                        <label>Email</label>
                        <input
                            placeholder="example@email.com"
                            id="email"
                            onChange={handleChange}
                            style={{ borderRadius: 15 }} />
                    </Form.Field>
                    <Form.Field>
                        <label>Universitas</label>
                        <input
                            placeholder="Universitas ABCD"
                            id="universitas"
                            onChange={handleChange}
                            style={{ borderRadius: 15 }} />
                    </Form.Field> */}
                    <Form.Field>
                        <label>Keterangan (opsional)</label>
                        <textarea
                            placeholder="Tambahan keterangan..."
                            id="keterangan"
                            onChange={handleChange}
                            style={{ borderRadius: 15 }} />
                    </Form.Field>
                    <Button primary style={{ borderRadius: 15, width: '100%' }} >Kirimkan</Button >
                </Form>
            </Grid.Column>
        </>
    )
}