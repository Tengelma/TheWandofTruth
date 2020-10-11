import React, {Component} from 'react'
import { CirclePicker } from 'react-color'

class WhiteboardToolbar extends Component {
    render() {
        return (
            <CirclePicker
                color={ this.props.color}
                onChangeComplete={this.props.colorChange}
                width="100px"
            />
        )
    }
}

export default WhiteboardToolbar;