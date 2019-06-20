import React from 'react';
import logo from './logo.svg';
import Child from "./Child";
import Child1 from "./Child1";
import './App.css';

class App extends React.Component {
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
  render(){
    return (
      <div>
        <button onClick={this.handleChildPropsChange}>修改count</button>
        <button onClick={this.handleChildShow}>切换显示</button>
        {
          this.state.showChild ? <Child count={this.state.count}></Child> : <Child1 count={this.state.count}></Child1>
        }
      </div>
    )
  }
}

export default App;
