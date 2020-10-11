import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class HomePage extends Component {
    render(){
        return (
            <div>
                <Button>
                    <Link to="/create">Create</Link>
                </Button>
                <Button>
                    <Link to="/join">Join</Link>
                </Button>
            </div>
        )
    }
}

export default HomePage;

