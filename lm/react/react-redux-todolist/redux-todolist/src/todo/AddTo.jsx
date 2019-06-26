import React,{Component} from 'react';
import { connect } from "react-redux";

let generateID = -1;
class AddTo extends Component{
    state = {

    }
    render(){
        console.log(this.props);
        const {dispatch} = this.props;
        return(
            <div>
                <form onSubmit={e=>{
                    e.preventDefault();
                    if(this.inputNode.value.trim()){
                        //添加
                        generateID++;
                        dispatch({
                            type: 'ADD_TODO',
                            id: generateID,
                            text: this.inputNode.value.trim()
                        })
                    }
                }}>
                    <input type="text" ref={node=> this.inputNode = node}/>
                    <button type="submit">
                        addToDo
                    </button>
                </form>
            </div>
        )
    }
}
// export default connect((state)=>{
//     console.log('connect',state);
    
//     return {
//         a: 1
//     }
// },(dispatch)=>{
//     return {
//         b: ()=>{
//             console.log('b');
//         }
//     }
// })(AddTo);

export default connect()(AddTo);