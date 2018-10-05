import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

export class TextButton extends React.Component {

    constructor(props) {
        super(props);

        this.buttonStyle = Object.assign({
            backgroundColor: this.props.backgroundColor,
            padding: 10
        }, this.props.style);
    }

    render() {
        return <TouchableHighlight
            underlayColor={this.props.buttonTouchColor}
            style={this.buttonStyle}
            {...this.props}>
            <Text style={{ color: this.props.color }}> {this.props.children} </Text>
        </TouchableHighlight >
    }
}

TextButton.defaultProps = {
    backgroundColor: "red",
    buttonTouchColor: "green",
    color: "white"
}