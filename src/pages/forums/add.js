import React, { useState } from "react";
import { Container, Grid, Card, Image, Segment, Header, Icon, Divider, Button } from "semantic-ui-react";


export default function Index() {
  // console.log(convertFromRaw(content));
  // const [contentState, setContentState] = useState((content));
  // const handleContentStateChange = (e) => {
  //   setContentState(e);
  // }
  // console.log(contentState)
  return (
    <Container style={{ marginTop: '3em' }}>
      <Segment style={{ padding: '0em 3em', borderRadius: 20 }}>
        {/* <Editor
          // editorState={contentState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onContentStateChange={handleContentStateChange}
        /> */}
      </Segment>
    </Container >
  )
}