import React,{Component} from "react";
class Child extends Component {
    state = {
        inputVal: 'aaa'
    }
    handleAnotherFun = ()=>{
        console.log('an 你好舊時光');
        
    }
    handleClick = (e)=>{
        console.log(this);
        this.handleAnotherFun();
        console.log(e.target.innerHTML);
        
    }
    handleChange = (e) => {
        // this.state.inputVal = e.target.value
        this.setState({
            inputVal: e.target.value
        })
    }
    render (){
        
        return (
            <div onClick={this.handleClick}>
                {this.props.msg}
                <input type="text" onChange={this.handleChange} value={this.state.inputVal} placeholder="請輸入内容" />
            </div>
        )
    }
}
export default Child;