import React from 'react';

class CommentInput extends React.Component {
    state = {
        userName: '',
        comment: ''
    }
    handleUsernameChange=(e)=>{
        this.setState({
            userName:e.target.value
        })
        
    }
    handleCommentChange=(e)=> {
        this.setState({
            comment: e.target.value
        })
    }
    handleSubmit=(e)=>{
        const {userName,comment} = this.state;
        // console.log(userName, comment);
        const {onSubmit} = this.props;
        onSubmit({
            userName,comment
        })
    } 
  render() {
    return (
      <div>
        <div>
          用户名：
          <input type="text" value={this.state.userName} onChange={this.handleUsernameChange} placeholder="请输入用户名"/>
        </div>
        <div>
          评论：
          <textarea name="" value={this.state.comment} onChange={this.handleCommentChange} id="" cols="30" rows="10"></textarea>
        </div>
        <div>
          <button onClick={this.handleSubmit}>评论</button>
        </div>
      </div>
    )
  }
}

export default CommentInput;
