import React, { Component } from 'react';
import './style.css'
import { CSSTransition } from 'react-transition-group'

class Rcss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }
    }
    render() {
        return (
            <div>
                <CSSTransition>
                    <div>显示隐藏变化</div>
                </CSSTransition>

                <div><button onClick={this.toChange}>点击</button></div>
            </div>
        );
    }
    toChange = () => {
        this.setState({
            isShow: this.state.isShow ? false : true
        })
    }
}

export default Rcss;
