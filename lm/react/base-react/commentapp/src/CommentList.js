import React from 'react';

class CommentList extends React.Component {
    render(){
        const list = this.props.list.map((item,index) => <li key={index}>{item.comment}</li>)
         return ( 
            <ul>
                {
                    list
                }
            </ul>
         )
    }
}

export default CommentList;