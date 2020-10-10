import React, { Component } from 'react'
import {Grid } from 'semantic-ui-react'
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
            <Grid style={{width:"50%"}}>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <MessengerStudentList currentUser={this.state.currentUser} roomId={this.state.roomId}/>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <MessagePanel currentUser={this.state.currentUser} roomId={this.state.roomId}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default InstantMessenger;