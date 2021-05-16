import React, { useState } from "react";
import { Button, Form, Grid, Header } from "semantic-ui-react";

export default function TellUsForm() {
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
                <Header as='h2' style={{ color: 'blue', fontSize: '3em', fontWeight: 'bolder' }}>
                    Belum menemukan brosis di kampusmu?
              </Header>
                <p style={{ fontSize: '1.33em' }}>
                    Jangan khawatir, ceritakan pada kami.
              </p>
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
                            placeholder="+62..."
                            id="nomor_ponsel"
                            onChange={handleChange}
                            style={{ borderRadius: 15 }}
                            type="number"
                        />
                    </Form.Field>
                    <Form.Field>
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
                    </Form.Field>
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