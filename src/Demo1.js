import React, { Component, Fragment } from "react";
import Demo2 from "./Demo2";
import './style.css'
// import axios from 'axios';
import Rcss from "./Rcss";
class Demo1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ['学习java', '学习python']
        }
    }
    componentDidMount() {
        // axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
        //     .then((res) => { console.log('axios 获取数据成功:' + JSON.stringify(res)) })
        //     .catch((error) => { console.log('axios 获取数据失败' + error) })
    }
    //优化组件性能
    // shouldComponentUpdate() {
    //     console.log('shouldComponentUpdate组件发生改变前执行')
    //     return true
    // }
    // componentDidUpdate() {
    //     console.log('componentDidUpdate')
    // }
    render() {
        // console.log('render组件')
        return (
            <Fragment>
                <input
                    value={this.state.inputValue}
                    onChange={this.inputChange}
                    ref={(input) => { this.input = input }}
                /><button onClick={this.addList}>增加服务</button>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <div>
                                    <Demo2 key={index + item} content={item} index={index} deleteItem={this.deleteItem} />
                                </div>
                                // <li key={index + item}
                                //     onClick={() => this.deleteItem(index)}
                                // >{item}</li>
                            )
                        })
                    }
                </ul>
                <Rcss />
            </Fragment>

        )
    }
    inputChange = (input) => {
        this.setState({
            inputValue: this.input.value
        })
    }
    addList = () => {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    deleteItem = (index) => {
        let newList = this.state.list
        newList.splice(index, 1)
        this.setState({
            list: newList
        })

    }
}

export default Demo1
