import React from 'react';
import InstantMessenger from './components/InstantMessenger'
import Whiteboard from './components/Whiteboard'
import HostControlPanel from './components/HostControlPanel'
import { Container, Segment } from 'semantic-ui-react' 
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <Container>
      <Segment.Group horizontal style={{minWidth: "100%"}}>
        <Segment style={{minWidth: 700, minHeight: 500}}><Whiteboard/></Segment>
        <Segment style={{minWidth: 500, minHeight: 500}}><InstantMessenger/></Segment>
      </Segment.Group>
      <HostControlPanel/>
    </Container>
  );
}

export default App;
