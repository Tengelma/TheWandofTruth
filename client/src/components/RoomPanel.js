import React, { Component } from 'react';
import InstantMessenger from './InstantMessenger'
import Whiteboard from './Whiteboard'
import HostControlPanel from './HostControlPanel'
import { Container, Segment } from 'semantic-ui-react' 


class RoomPanel extends Component{
    constructor(props){
        super(props)
        this.state = {
            users: [],
            messages: [],
            canvasState: ""
        }
        this.username = props.username;
        this.roomName = props.roomName;
        this.isHost = props.isHost;
    }

    componentDidMount(){
        //if isHost create room and gets associated information
        //if not isHost join room, get users, get messages pass to child components
    }

    render(){
        var bottom = <div/>
        if(this.isHost){
            bottom = <HostControlPanel users={this.state.users} roomName={this.roomName} hostName={this.userName}/>
        }
        return (
            <Container>
            <Segment.Group horizontal style={{minWidth: "100%"}}>
                <Segment style={{minWidth: 700, minHeight: 500}}>
                    <Whiteboard canvasState={this.state.canvasState} active={this.username === this.state.activeUser}/>
                </Segment>
                <Segment style={{minWidth: 500, minHeight: 500}}>
                    <InstantMessenger users={this.state.users} messages={this.state.messages}/>
                </Segment>
            </Segment.Group>
            {bottom}
            </Container>
        );
   }
}

export default RoomPanel