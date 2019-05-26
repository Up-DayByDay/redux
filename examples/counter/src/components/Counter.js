import React, { Component } from 'react'

class Counter extends Component{
    constructor(props){
        super(props);
        this.state ={
            proCount:0,
            count:0
        }
    }

    componentDidMount() {

        this.setState({
            count:1,
            proCount:10
        });
        this.setState({
            count:2,
            proCount:101
        })
        this.setState({
            count:3
        })
    }

    render(){
        const { value,onIncrement,onDecrement} = this.props;
        console.log(this.props);
        return(
            <p>   
                <button onClick={onDecrement}>
                -
                </button>
                Clicked: {value} times
                <button onClick={onIncrement}>
                +
                </button> {this.state.proCount} + {this.state.count}
            </p>
        )
    }

}
export default Counter