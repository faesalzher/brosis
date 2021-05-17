

import React, { Component } from 'react'
import {
    Container,
    Grid,
    Header,
    List,
    Segment,
} from 'semantic-ui-react';

export default function Index() {
    return (
        <Segment inverted vertical style={{ padding: '5em 0em', marginTop: '3em' }}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={7}>
                            <Header as='h1' inverted>
                                BROSIS'
            </Header>
                            <p>
                                Belajar bukan saja hanya mencari ilmu literasi dan ijazah. Belajar yang sesungguhnya adalah ketika seseorang dapat memberikan dampak positif, inspirasi, serta menjadi bagian dari perubahan.
            </p>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header as='h4' content='Menu' style={{ color: "aquamarine" }} />
                            <List link inverted>
                                <List.Item as='a'>Keseharian</List.Item>
                                <List.Item as='a'>Lokasi</List.Item>
                                <List.Item as='a'>Bantuan</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header as='h4' content='Kontak' style={{ color: "aquamarine" }} />
                            <List link inverted>
                                <List.Item as='a'>Hotline - 088 906 320515</List.Item>
                                <List.Item as='a'>Email - lifeatbrosis@gmail.com</List.Item>
                                <List.Item as='a'>Social Medias - lifeatbrosis.id</List.Item>
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )
}
