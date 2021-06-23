import React, { useState, useEffect } from 'react'
import { Grid, Form, Button, Modal, Header, Image } from 'semantic-ui-react'

export default function Detail(props) {
  const formDefault = {
    nama_lengkap: "Nama Lengkap Anda",
    nomor_ponsel: "089273723",
    email: props.user.email,
    universitas: "Nama Universitas",
  };


  const [open, setOpen] = React.useState(false)
  const [form, setForm] = useState(formDefault);
  const [edit, setEdit] = useState(false);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value })
  }
  const disabledButton = (
    form.nama_lengkap === formDefault.nama_lengkap &&
    form.nomor_ponsel === formDefault.nomor_ponsel &&
    form.email === formDefault.email &&
    form.universitas === formDefault.universitas
  );
  const handleEdit = e => {
    setEdit(!edit);
  }
  const handleCancel = e => {
    handleEdit();
    setForm(formDefault);
  }
  const handleSave = e => {
    setForm(form);
    handleEdit();
  }
  const onChange = (e) => {
    // const { id, value } = e.target;
    // setForm({ ...form, [id]: value })
    console.log('upload');
    setOpen(false);
  }
  return (
    <>
      <Grid.Row centered>
        <Grid.Column textAlign="center" width={8} >
          <div>
            <img
              alt="menu"
              src={"https://cdn-0.idownloadblog.com/wp-content/uploads/2018/06/macOS-Mojave-Day-wallpaper.jpg"}
              style={{
                height: '20em', width: '20em',
                objectFit: "fill", borderRadius: "50%",
                // position: "absolute",
              }}
            />
          </div>
          <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button style={{ display: edit ? '' : 'none' }}>Edit Image</Button>}
            style={{ width: 'auto' }}
          >
            <Modal.Header style={{ textAlign: 'center' }}>Edit Image</Modal.Header>
            <Modal.Content>
              <Button.Group>
                <Button
                  content="Remove Image"
                  labelPosition='left'
                  icon="close"
                  color="red"
                  onClick={() => setOpen(false)}
                />
                <Button.Or />
                <Button
                  content="Upload Image"
                  labelPosition='right'
                  icon='upload'
                  // onClick={() => setOpen(false)}
                  color="blue"
                  as="label" htmlFor="file" type="button"
                />
                <input type="file" id="file" style={{ display: "none" }} onChange={onChange} />
              </Button.Group>
            </Modal.Content>

          </Modal>
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
                readOnly={!edit}
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
                readOnly={!edit}
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
                readOnly={!edit}
              />

            </Form.Field>
            <Form.Field>
              <label>Universitas</label>
              <input
                placeholder="Universitas ABCD"
                id="universitas"
                onChange={handleChange}
                value={form.universitas}
                style={{ borderRadius: 15 }}
                readOnly={!edit}
              />
            </Form.Field>
          </Form>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row style={{ justifyContent: 'flex-end', padding: "1em 2em" }}>

        {
          edit ?
            <>
              <Button basic content="Cancel" floated="right" onClick={handleCancel} />
              <Button color="blue" content="Save" floated="right" disabled={disabledButton} onClick={handleSave} />
            </>
            :
            <Button color="blue" content="Edit" floated="right" onClick={handleEdit} />
        }
      </Grid.Row>
    </>
  );
}