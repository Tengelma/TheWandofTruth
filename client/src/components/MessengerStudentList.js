import React, { Component } from 'react'
import { List, Icon } from 'semantic-ui-react'

class MessengerStudentList extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentUser: this.props.currentUser,
            roomId: this.props.roomId,
            users: []
        }
    }

    componentDidMount(){
        this.setState(prevState => ({
            ...prevState,
            users: [{username: "Trent Engelman", state: "claimed"},
            {username: "Tia Peruzzi", state: "waiting"},
            {username: "Vijay Suthar", state: "waiting"},
            {username: "Alexandra Melhase", state: "request"},
            {username: "Ruben Acuna", state: "request"}]
        }))
        //get current users in room
        //set up listener for new users
    }

    render(){
        var users = this.state.users
        console.log(users)
        var items = []
        for(const [index, user] of users.entries()){
            const state = user.state
            if(user.state === "waiting"){
                items.push(<List.Item key={index}>{user.username}</List.Item>)  
            } else if (user.state === "request"){
                items.push(<List.Item key={index}>{user.username}<Icon name="hand paper outline"/></List.Item>)
            } else if (user.state === "claimed"){
                items.push(<List.Item key={index}>{user.username}<Icon name="pencil alternate"/></List.Item>)
            }
        }
        return (
            <List>
                {items}
            </List>
        )
    }
}

export default MessengerStudentList;