import React from 'react';
import logo from './logo.svg';
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
import './App.css';

class App extends React.Component {
  state = {
    commentLists: [

    ]
  }
  handleSumbit=(e)=>{
    console.log(e.userName);
    let list = this.state.commentLists;
    list.push(e);
    this.setState({
      commentLists: list
    })
    
  }
  render(){
    return (
      <div>
        <CommentInput onSubmit={this.handleSumbit}></CommentInput>
        <CommentList list={this.state.commentLists}/>
      </div>
    )
  }
}

export default App;
