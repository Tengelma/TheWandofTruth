import React, { Component } from 'react'
import { Button, Label, Container, Input, List, Icon } from 'semantic-ui-react'

class MessagePanel extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentUser: this.props.currentUser,
            roomId: this.props.roomId,
            input: "",
            messages: []
        }
    }

    componentDidMount(){
        //get messages from server
        //set up listener for new messages
    }

    messageSubmit = () => {
        //send current value of input to server endpoint
        this.setState(prevState => ({
            ...prevState,
            messages: [...prevState.messages, {username: "username", content: prevState.input, timestamp: "now"}], 
            input: ""
        }))
    }

    handleChange = (event) => {
        var text = event.target.value
        this.setState(prevState => ({
            ...prevState,
            input: text 
        }))
    }

    render(){
        var items = []
        var messages = this.state.messages
        for(const [index, message] of messages.entries()){
            items.push(
                <List.Item key={index}> 
                    <List.Content>
                        <div><Label>{message.username}</Label> {/*<i>{message.timestamp}</i>:*/} {message.content}</div>  
                    </List.Content>
                </List.Item> )
        }

        return (
            <Container>
                <List style={{height: 300, overflow: "scroll"}} >
                    {items}
                </List>
                <div>
                    <Label>{this.state.currentUser}: </Label>
                    <Input style={{width: "100%"}} 
                        icon={<Button icon onClick={this.messageSubmit}><Icon name="send"/></Button>} 
                        value={this.state.input} 
                        onChange={this.handleChange}>
                    </Input>
                </div>
            </Container>
        );
    }
}

export default MessagePanel;