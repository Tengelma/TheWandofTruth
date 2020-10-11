import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import MessengerStudentList from './MessengerStudentList'
import MessagePanel from './MessagePanel'

class InstantMessenger extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentUser: props.username,
            roomId: ""
        }
    }

    render(){
        return (
            <Segment.Group horizontal>
                <Segment style={{minWidth: 200, minHeight: 525}}>
                    <MessengerStudentList currentUser={this.state.currentUser} roomId={this.state.roomId}/>
                </Segment>  
                <Segment style={{minHeight: 525}}>      
                    <MessagePanel currentUser={this.state.currentUser} roomId={this.state.roomId}/>
                </Segment>
            </Segment.Group>
        );
    }
}

export default InstantMessenger;