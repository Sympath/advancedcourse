import React from 'react';
import logo from './logo.svg';
import Child from "./Child";
import Child1 from "./Child1";
import Context from "./Context";
import Context1 from "./Context1";
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.objRef = React.createRef();
  }
  state = {
    count : 0 ,
    showChild: true 
  }
  handleChildPropsChange=()=>{
    let count= this.state.count + 1
    this.setState({
      count
    })
  }
  handleChildShow = ()=>{
    const {showChild} = this.state;
    this.setState({
      showChild: !showChild
    })
  }
  componentDidMount(){
    this.refs.stringRef.innerHTML = '你好旧时光';
    this.methodRef.innerHTML = '最好的我们';
    this.objRef.current.innerHTML = '火之晨曦'
  }
  render(){
    return (
      <div>
        <span ref="stringRef">react ref</span>
        <span ref={ref=>this.methodRef = ref}>react ref</span>
        <span ref={this.objRef}>react ref</span>
        <div dangerouslySetInnerHTML={{
          __html: '<strong>栀生淮南</strong>'
        }}></div>
        <button onClick={this.handleChildPropsChange}>修改count</button>
        <button onClick={this.handleChildShow}>切换显示</button>
        {
          this.state.showChild ? <Child count={this.state.count}></Child> : <Child1 count={this.state.count}></Child1>
        }
        <Context1>
          生命不能承受之轻
        </Context1>
      </div>
    )
  }
}

export default App;
