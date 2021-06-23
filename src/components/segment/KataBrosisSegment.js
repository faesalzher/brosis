

import React from 'react'
import {
  Grid,
  Header,
} from 'semantic-ui-react';
import ImageRounded  from "../single_components/ImageRounded";
import kampus from '../../stores/kampus';
export default function AboutSegment(props) {
  return (
    <Grid container stackable verticalAlign='middle'>
    <Grid.Row >
      <Grid container columns={1} doubling stackable>
        <Header as='h2' style={{ fontSize: '2em', }}>
          Kata Brosis'
        </Header>
      </Grid>
    </Grid.Row>
    <Grid.Row centered>
      <Grid container columns={3} doubling stackable>
        {kampus.slice(0,3).map((item, index) => {
          return (
            <Grid.Column key={index}>
              <ImageRounded
                height={300}
                boxShadow
                src={'https://cdn-0.idownloadblog.com/wp-content/uploads/2018/06/macOS-Mojave-Day-wallpaper.jpg'} />
            </Grid.Column>
          )
        })}
      </Grid>
      {/* <Grid.Column textAlign='center'>
        <Button size='huge'>Lihat Semua Lokasi</Button>
      </Grid.Column> */}
    </Grid.Row>
  </Grid>
  )
}
