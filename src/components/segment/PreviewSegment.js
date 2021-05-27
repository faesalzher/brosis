

import React from 'react'
import {
  Grid,
  Card,
} from 'semantic-ui-react';
import ImageRounded from "../single_components/ImageRounded";

export default function PreviewSegment(props) {
  return (
    <Grid.Row centered>
      <Grid container columns={4} doubling stackable>
        {props.data.slice(0, 3).map((item, index) => {
          return (
            <Grid.Column key={index}>
              <ImageRounded src={item.photo} boxShadow={true} />
            </Grid.Column>
          )
        })}
        <Grid.Column>
          <Card
            href={props.href}
            style={{ height: 200, borderRadius: 20, boxShadow: "0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15)" }}
          >
            <Card.Content
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column'
              }}
            >
              <Card.Header>{<h1 style={{ textAlign: 'center', color: 'blue' }}>{props.title}</h1>}</Card.Header>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </Grid.Row>
  )
}
