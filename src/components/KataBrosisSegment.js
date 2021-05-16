

import React from 'react'
import {
  Grid,
  Header,
} from 'semantic-ui-react';
import ImageRounded  from "./single_components/ImageRounded";
import kost from '../stores/kost';
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
        {kost.slice(3).map((item, index) => {
          return (
            <Grid.Column key={index}>
              <ImageRounded
                height={300}
                boxShadow
                src={'https://cdn.statically.io/img/9to5mac.com/2018/06/05/macos-mojave-wallpapers-download/mojave-day/'} />
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
