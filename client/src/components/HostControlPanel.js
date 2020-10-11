import React, { Component } from 'react'
import { List, Icon } from 'semantic-ui-react'

class HostControlPanel extends Component {
    constructor(props){
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        //get students
        this.setState(prevState => ({
            ...prevState,
            users: [{username: "Trent Engelman", state: "claimed"},
            {username: "Tia Peruzzi", state: "waiting"},
            {username: "Vijay Suthar", state: "waiting"},
            {username: "Alexandra Melhase", state: "request"},
            {username: "Ruben Acuna", state: "request"}]
        }))
    }

    giveUtencil = () => {
        //set user state to claimed
        //set all others to waiting
    }

    reclaimUtencil = () => {
        //set user state to waiting
    }

    render(){
        var users = this.state.users
        var items = []
        for(const [index, user] of users.entries()){
            if(user.state === "waiting"){
                items.push(<List.Item onClick={} key={index}>{user.username}</List.Item>)  
            } else if (user.state === "request"){
                items.push(<List.Item onClick={} key={index}>{user.username}<Icon style={{float: "right"}} name="hand paper outline"/></List.Item>)
            } else if (user.state === "claimed"){
                items.push(<List.Item onClick={} key={index}>{user.username}<Icon style={{float: "right"}} name="pencil alternate"/></List.Item>)
            }
        }
        return (
            <List style={{width: "50%"}} animated>
                {items}
            </List>
        )
    }
}

export default HostControlPanel;