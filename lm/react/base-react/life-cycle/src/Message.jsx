import React,{Component} from 'react';
import MyButton from "./MyButton";
import propTypes from "prop-types";
class Message extends Component{
    render(){
        return(
            <div>
                {this.props.text}
                <MyButton>delete</MyButton>
            </div>
        )
    }
}

export default Message;