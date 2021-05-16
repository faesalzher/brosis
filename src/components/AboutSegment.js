

import React from 'react'
import {
  Grid,
  Header,
  Image
} from 'semantic-ui-react';
import ImageRounded  from "./single_components/ImageRounded";

export default function AboutSegment(props) {
  return (
    props.data.map((item, index) => {
      if (index % 2 === 0) {
        return (
          <Grid.Row key={index}>
            <Grid.Column width={8} style={{ padding: '2em' }}>
              <ImageRounded src={item.image} height={300} />
            </Grid.Column>
            <Grid.Column width={8} style={{ padding: '2em' }}>
              {item.header !== undefined ?
                <Header as='h2' style={{ fontSize: '1.8em' }}>
                  {item.header}
                </Header> : <></>
              }
              <Header as='h2' style={{ color: 'blue', fontSize: '2em' }}>
                {item.title}
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                {item.description}
              </p>
            </Grid.Column>
          </Grid.Row>)
      } else {
        return (
          <Grid.Row key={index}>
            <Grid.Column width={8} style={{ padding: '2em' }}>
              {
                item.header !== undefined ?
                  <Header as='h2' style={{ fontSize: '1.8em', textAlign: 'right' }}>
                    {item.header}
                  </Header> : <></>
              }
              <Header as='h2' style={{ color: 'blue', fontSize: '2em', textAlign: 'right' }}>
                {item.title}
              </Header>
              <p style={{ fontSize: '1.33em', textAlign: 'right' }}>
                {item.description}
              </p>
            </Grid.Column>
            <Grid.Column width={8} style={{ padding: '2em' }}>
            <ImageRounded src={item.image} height={300}/>
            </Grid.Column>
          </Grid.Row>)
      }
    }
    )
  )
}
