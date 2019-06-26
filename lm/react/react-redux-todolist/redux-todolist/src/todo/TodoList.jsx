import React,{Component} from 'react';
import { connect } from "react-redux";
class TodoList extends Component{
    render(){
        const { todos, toggleTo} = this.props;
        return(
            <div>
                {
                    todos.map((todo, i) => <li onClick={() => {
                        toggleTo(todo.id)
                        console.log(todo);
                        
                    }} style={{
                        textDecoration: todo.completed ? 'line-through': ''
                    }} key={i}>todo.text</li>)
                }
            </div>
        )
    }
}

export default connect((state)=>{
    return {
        todos: state.todos
    }
},(dispatch)=>{
    return {
        toggleTo : id => dispatch({
                type: 'TOGGLE_TODO',
                id:id
            })
        
    }
})(TodoList)