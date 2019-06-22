import React,{Component} from 'react'
export default class Counter extends Component{
    render(){
        const {value , onIncrement,onDecrement} = this.props
        return(
            <div>
                {value}
                <div><button onClick={onIncrement}>+</button></div>
                <div><button onClick={onDecrement}>-</button></div>
            </div>
        )
    }
}
