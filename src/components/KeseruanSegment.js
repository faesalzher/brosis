

import React from 'react'
import {
  Grid,
  Header,
} from 'semantic-ui-react';
import ImageRounded  from "./single_components/ImageRounded";
const dataSeru = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export default function AboutSegment(props) {
  return (
    <Grid container stackable verticalAlign='middle'>
        <Grid.Row centered>
          <Header as='h2' style={{ fontSize: '2em', }}>
            Selalu ada yang seru!
            </Header>
        </Grid.Row>
        <Grid.Row centered>
          <Header as='h4' color="grey">
            Inilah sebagian kecil keseruan kami...
            </Header>
        </Grid.Row>
        <Grid.Row centered>
          <Grid container columns={4} doubling stackable>
            {dataSeru.slice(0, 8).map((item, index) => {
              return (
                <Grid.Column key={index}>
                  <div >
                    <img
                      alt="photo"
                      src={'https://cdn.statically.io/img/9to5mac.com/2018/06/05/macos-mojave-wallpapers-download/mojave-day/'}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: 200,
                        borderRadius: 20,
                        border: "solid 1px gray"
                      }}
                    />
                  </div>
                </Grid.Column>
              )
            })}
          </Grid>
        </Grid.Row>
        <Grid.Row centered>
          <Header as='h2' style={{ fontSize: '2em', }}>
            #FeelsLikeHome
            </Header>
        </Grid.Row>
        <Grid.Row centered>
          <Header as='h4' color="grey">
            Brosis 2020 - All Right Reserved
            </Header>
        </Grid.Row>
      </Grid>
  )
}
