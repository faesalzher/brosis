import React, { useState } from "react";
import { Container, Grid, Segment, Header } from "semantic-ui-react";
import Detail from './Detail';
import jwtDecode from "jwt-decode";

export default function Index() {
  // const [allExpanded, setAllExpanded] = useState(false);
  const [user, setUser] = useState({});

  React.useEffect(() => {    // Update the document title using the browser API    document.title = `You clicked ${count} times`;  
    if (typeof window !== "undefined") {
      if (window.localStorage.getItem("jwtToken") !== null) {
        setUser(jwtDecode(window.localStorage.getItem("jwtToken")));
      } else {
        setIsLoggedIn(false);
      };
    }
  }, []);
  return (
    <Container style={{ marginTop: '3em' }}>
      {/* <Segment style={{ padding: '4em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row centered>
            <Header as='h1' style={{ fontWeight: 'bolder', color: 'midnightblue', fontSize: '1em' }}>
              Hi, {user.email}
            </Header>
          </Grid.Row>
        </Grid>
      </Segment> */}
      <Segment style={{ padding: '4em 0em', borderRadius: 20 }}>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row centered>
            <Header as='h1' style={{ fontWeight: 'bolder', color: 'midnightblue', fontSize: '2em' }}>
              Your Account Information
            </Header>
          </Grid.Row>
          <Detail user={user} />
        </Grid>
      </Segment>
    </Container>
  )
}