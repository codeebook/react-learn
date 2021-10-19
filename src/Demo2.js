import React, { Component } from 'react';
import propTypes from 'prop-types'
class Demo2 extends Component {
    shouldComponentUpdate(nextProps, nextStates) {
        if (nextProps.content !== this.props.content) {
            return true
        } else {
            return false
        }

    }
    render() {
        console.log('child-')
        return (
            <li onClick={this.handleClick}>{this.props.content}</li>
        );
    }
    handleClick = () => {
        this.props.deleteItem(this.props.index)
    }
}

Demo2.propTypes = {
    content: propTypes.string,
    index: propTypes.number,
    deleteItem: propTypes.func
}
// Demo2.defaultProps = {
//     itemName: "react"
// }

export default Demo2;
