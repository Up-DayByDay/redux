import React, { Component } from 'react'

class Counter extends Component{
    constructor(props){
        super(props);
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
                </button> 
            </p>
        )
    }

}
export default Counter