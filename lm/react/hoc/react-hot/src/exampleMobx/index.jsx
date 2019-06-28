import React,{Component} from 'react';
import { observable,action, computed , autorun} from "mobx";
import { observe } from "react-mobx";
// 任何可以从应用状态中推导出来的东西，都应可以自动的推导出来
let id = 0;
class Store {
    @observable todos = [];
    @action
    addTodo(text){
        this.todos.push({
            text,
            completed:false,
            id: id++
        })
    }
    @action
    toggleTodo(id){
        this.todos = this.todos.map((item,i)=>{
            if(item.id = id) item.completed = !item.completed;
            return item
        })
    }
    @computed
    get totalNnumber(){
        return this.todos.length
    }
    @computed
    get completeNumber(){
        return this.todos.filter(todo => todo.completed).length
    }
}

const store = new Store();
autorun(()=>{
    console.log('auto');
    localStorage.setItem('todos',JSON.stringify(this.todos))
})
@observe
class TodoList extends Component{
    state = {

    }
   handleSubmit = ()=>{
       const val = this.inputNode.value.trim();
       if (val) {
           store.addTodo(val);
       }
   }
    render(){
        return(
            <div>
                <input type="text" ref={item=>{
                    this.inputNode = item
                }}/>
                <button onClick={this.handleSubmit}>提交</button>
                <ul>
                    {
                        store.todos.map((item,i)=><li
                        onClick={()=>{
                            store.toggleTodo(item.id)
                        }}
                        style = {
                            {
                                textDecoration: item.completed ? 'line-through' : ''
                            }
                        }
                        key={i}>item.text</li>)
                    }
                </ul>
                {
                    store.completeNumber
                }/{
                    store.totalNumber
                }
            </div>
        )
    }
}
export default  TodoList