import React, {Component} from 'react'
import {Form, Input, Label, Button} from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

class JoinPage extends Component {
    constructor(){
        super()
        this.state = {
            roomName: "",
            userName: ""
        }
    }

    changeRoomName = (event) => {
        const text = event.target.value;
        this.setState(prevState => ({
            ...prevState,
            roomName: text  
        }))
    }

    changeUserName = (event) => {
        const text = event.target.value;
        this.setState(prevState => ({
            ...prevState,
            userName: text  
        }))
    }

    handleSubmit = () => {
        const userName = this.state.userName;
        const roomName = this.state.roomName;
        this.props.updateContext(userName, roomName, false)
        this.setState(prevState => ({
            ...prevState,
            submitted: true
        }))
    }

    render(){
        if(this.state.submitted){
            console.log(this.state.submitted)
            return <Redirect to="/room"/>
        }
        return (
            <Form>
                <Form.Field>
                    <Label>Room Name</Label>
                    <Input value={this.state.roomName} onChange={this.changeRoomName}></Input>
                </Form.Field>
                <Form.Field>
                    <Label>Username</Label>
                    <Input value={this.state.userName} onChange={this.changeUserName}></Input>
                </Form.Field>
                <Button onClick={this.handleSubmit}>Join</Button>
            </Form>
        )
    }
}

export default JoinPage;