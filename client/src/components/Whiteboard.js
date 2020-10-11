import React, {Component} from 'react'
import WhiteboardToolbar from './WhiteboardToolbar'
import Canvas from './Canvas'
import { Segment, Reveal, Container } from 'semantic-ui-react'

class Whiteboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            strokeColor: '#fff',

        }
    }

    handleColorChangeComplete = (color) => {
        console.log(color)
        this.setState(prevState => ({
            ...prevState, 
            strokeColor: color.hex
        }))
    }

    render(){
        return (
            <Segment.Group horizontal>
                <Segment style={{minWidth: 100}}>
  {/*            <Reveal animated='move'>
                        <Reveal.Content visible>
                            <Container></Container>
                        </Reveal.Content>  
        <Reveal.Content hidden> */}                
                            <WhiteboardToolbar 
                                color={this.state.strokeColor} 
                                colorChange={this.handleColorChangeComplete}
                            />
 {/*                       </Reveal.Content>
                    </Reveal> */} 
                </Segment>
                <Segment style={{minWidth: 500, minHeight: 500}}>
                    <Canvas isDrawing={true} color={this.state.strokeColor}/>
                </Segment>
            </Segment.Group>
        )
    }
}

export default Whiteboard;