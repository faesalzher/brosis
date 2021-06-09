import React, { useState } from "react";
import { Container, Grid, Segment, Header, Icon, Button, Table, Menu } from "semantic-ui-react";
import Link from "next/link";
import Router from "next/router";

// import Faq from './Faq';
import schedule from '../../stores/schedule';

export default function Index() {

  return (
    <Container style={{ marginTop: '3em' }}>
      <Segment style={{ padding: '4em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row centered>
            <Header as='h1' style={{ fontWeight: 'bolder', color: 'midnightblue', fontSize: '2em' }}>
              Selamat datang di scheduler!
            </Header>
          </Grid.Row>
        </Grid>
      </Segment>
      <div style={{ padding: '4em 0em', borderRadius: 20 }}>
        <Table selectable>
          <Table.Header >
            <Table.Row padded style={{ backgroundColor: 'aquamarine' }}>
              <Table.HeaderCell style={{ backgroundColor: 'aquamarine' }} colSpan='4'>List of Schedule</Table.HeaderCell>
              <Table.HeaderCell style={{ backgroundColor: 'aquamarine' }} textAlign='right' >
                <Button compact color="blue" onClick={() => Router.push('/scheduler/add')}>Add Schedule</Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>No</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell textAlign='center'>Action</Table.HeaderCell>
              {/* <Table.HeaderCell>Notes</Table.HeaderCell> */}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {
              schedule.map((item, index) => {
                return (
                  <Table.Row key={index} onClick={() => console.log('yes')}>
                    <Table.Cell style={{}} >
                      {index + 1}
                    </Table.Cell>
                    <Table.Cell style={{}} >
                      {/* <Link href="/forums/[_id]" as={`/forums/${item._id}`}> */}
                      <h4>{item.name}</h4>
                      {/* </Link> */}
                    </Table.Cell>
                    <Table.Cell >
                      <div style={{ display: 'flex', color: "blue" }}>
                        <Icon name="clock outline" color='black' />
                        {item.start_date.substring(0, 21)}
                      </div>
                      <div style={{ color: 'grey' }}>until</div>
                      <div style={{ display: 'flex', color: "blue" }}>
                        <Icon name="clock outline" color="black" />
                        {item.end_date.substring(0, 21)}
                      </div>
                    </Table.Cell>
                    <Table.Cell  >
                      {item.description}
                    </Table.Cell>
                    <Table.Cell textAlign='center' >
                      <Button compact basic color="blue" content="See Detail"
                        onClick={() => {
                          Router.push({
                            pathname: '/scheduler/[_id]',
                            query: { _id: item._id },
                          })
                        }}
                      />
                    </Table.Cell>
                  </Table.Row>
                );
              })
            }
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='5'>
                <Menu floated='right' pagination>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron left' />
                  </Menu.Item>
                  <Menu.Item as='a'>1</Menu.Item>
                  <Menu.Item as='a'>2</Menu.Item>
                  <Menu.Item as='a'>3</Menu.Item>
                  <Menu.Item as='a'>4</Menu.Item>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron right' />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    </Container>
  )
}