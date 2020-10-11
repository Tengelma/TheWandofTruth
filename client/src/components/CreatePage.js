import React, {Component} from 'react'
import {Form, Input, Label, Button} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'

class CreatePage extends Component {
    constructor(){
        super()
        this.state = {
            roomName: "",
            hostName: "",
            submitted: false
        }
    }

    changeRoomName = (event) => {
        const text = event.target.value;
        this.setState(prevState => ({
            ...prevState,
            roomName: text  
        }))
    }

    changeHostName = (event) => {
        const text = event.target.value;
        this.setState(prevState => ({
            ...prevState,
            hostName: text  
        }))
    }

    handleSubmit = () => {
        const hostName = this.state.hostName;
        const roomName = this.state.roomName;
        this.props.updateContext(hostName, roomName, true)
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
                    <Label>Host Name</Label>
                    <Input value={this.state.hostName} onChange={this.changeHostName}></Input>
                </Form.Field>
                <Button onClick={this.handleSubmit}>Create</Button>
            </Form>
        )
    }
}

export default CreatePage;