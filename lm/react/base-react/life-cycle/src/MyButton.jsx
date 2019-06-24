import React,{Component} from 'react';
import propTypes from "prop-types";
class MyButton extends Component{
    render(){
        console.log(this.context);
        
        return(
            <button style={{backgroundColor: this.context.color}}>
                {this.props.children}
            </button>
        )
    }
}
MyButton.contentTypes = {
    color: propTypes.string
}
export default MyButton;