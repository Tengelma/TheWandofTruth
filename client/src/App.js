import React, {Component} from "react"
import 'semantic-ui-css/semantic.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import {Menu} from 'semantic-ui-react'
import HomePage from './components/HomePage'
import CreatePage from './components/CreatePage'
import JoinPage from './components/JoinPage'
import RoomPanel from './components/RoomPanel'

class App extends Component {
  constructor(){
    super()
    this.state = {

    }
  
  }

  updateContext = (userName, roomName, isHost) => {
    this.setState({
      userName: userName, roomName: roomName, isHost: isHost
    })
  }

  render(){
    return(
      <Router>
        <Menu>
            <Menu.Item><Link to="/">Home</Link></Menu.Item>
            <Menu.Item><Link to="/about">About</Link></Menu.Item>
        </Menu>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route path="/join">
            <JoinPage updateContext={this.updateContext}/>
          </Route>
          <Route path="/create">
            <CreatePage updateContext={this.updateContext}/>
          </Route>
          <Route path="/room">
            <RoomPanel userName={this.state.userName} roomName={this.state.roomName} isHost={this.state.isHost}/>
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App


