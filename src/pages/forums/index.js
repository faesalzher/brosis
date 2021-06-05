import React, { useState } from "react";
import { Container, Grid, Segment, Header, Icon, Button, Accordion, Table, Menu } from "semantic-ui-react";
import Link from "next/link";
import Router from "next/router";

// import Faq from './Faq';
import topic from '../../stores/topic';
import TellUsForm from '../../components/TellUsForm';

export default function Index() {
  const [allExpanded, setAllExpanded] = useState(false);

  return (
    <Container style={{ marginTop: '3em' }}>
      <Segment style={{ padding: '4em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row centered>
            <Header as='h1' style={{ fontWeight: 'bolder', color: 'midnightblue', fontSize: '2em' }}>
              Selamat datang di forum!
            </Header>
          </Grid.Row>
        </Grid>
      </Segment>
      <div style={{ padding: '4em 0em', borderRadius: 20 }}>
        <Table selectable>
          <Table.Header >
            <Table.Row padded style={{ backgroundColor: 'aquamarine' }}>
              <Table.HeaderCell style={{ backgroundColor: 'aquamarine' }} colSpan='3'>List of Topic</Table.HeaderCell>
              <Table.HeaderCell style={{ backgroundColor: 'aquamarine' }} textAlign='right' >
                <Button compact color="blue">Add Topic</Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell>Topic</Table.HeaderCell>
              <Table.HeaderCell>Replies</Table.HeaderCell>
              <Table.HeaderCell textAlign='right' >Date</Table.HeaderCell>
              {/* <Table.HeaderCell>Notes</Table.HeaderCell> */}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {
              topic.map((item, index) => {
                return (
                  <Table.Row key={index} onClick={() => console.log('yes')}>
                    <Table.Cell>
                      <img
                        alt="menu"
                        src={item.background}
                        style={{
                          height: 30, width: 30,
                          objectFit: "fill", borderRadius: "50%",
                          // position: "absolute",
                        }}
                      />
                      </Table.Cell>
                    <Table.Cell style={{ color: 'blue' }} >
                      <Link href="/forums/[_id]" as={`/forums/${item._id}`}>
                        {item.name}
                      </Link>
                    </Table.Cell>
                    <Table.Cell >
                      <Icon name="reply" />
                        3
                    </Table.Cell>
                    <Table.Cell textAlign='right' >{item.createdAt.substring(0, 21)}</Table.Cell>
                  </Table.Row>
                );
              })
            }
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>
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