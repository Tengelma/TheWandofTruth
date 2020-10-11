import React, {Component} from 'react'
import { fabric } from 'fabric'
import { Container } from 'semantic-ui-react'

class Canvas extends Component {
    constructor(props){
        super(props)
        this.state = {
            color: this.props.color
        }
        this.canvas = null;
    }

    componentDidMount(){
        this.canvas = new fabric.Canvas('canvas')
        this.canvas.isDrawingMode = true
        this.canvas.selection = false
        this.canvas.setHeight(500)
        this.canvas.setWidth(500)
        this.canvas.on('path:created', function(e){
            var path = e.path;
            console.log(path)
        })
    }

    componentDidUpdate(){
        this.canvas.freeDrawingBrush.color = this.props.color
        this.canvas.isDrawingMode = this.props.isDrawing
    }

    render(){
        return (
            <Container>
                <canvas id='canvas'/>
            </Container>
        )
    }
}

export default Canvas;