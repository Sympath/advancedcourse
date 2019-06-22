import React,{Component} from 'react';
import { Input,Button,Divider } from "antd";
function Field(props) {
    const {value,index} = props;
    
    return (
        <div>
            <Divider></Divider>
           <div>
                姓名：<Input onChange={e=>{
                    props.change(e.target.value, 'name', index)
                }} value={value.name} placeholder="姓名"></Input>
           </div>
            <div>
                地址：<Input onChange={e => {
                    props.change(e.target.value, 'address', index)
                }} value={value.address} placeholder="地址"></Input>
            </div>
           <Button onClick={()=>{
               props.delete(index)
           }} type="primary">刪除</Button>
        </div>
    )
}

export default class DynamicField extends Component{
    state = {
        lists: [
            {
                name: '',
                address: ''
            }
        ]
    }
    handleChange=(val,key,index)=>{
        let lists = this.state.lists;
        lists[index][key] = val;
        this.setState({
            lists
        })
    }
    handleDelete=(index)=>{
        let lists = this.state.lists;
        lists.splice(index,1);
        this.setState({
            lists
        })
    }
    handleAddField=()=>{
        let lists = this.state.lists;
        lists.push(
            {
                name: '',
                address: ''
            }
        );
        this.setState({
            lists
        })
    }
    render(){
        const { lists} = this.state;
        return(
            <div>
                {lists.map((item, i) => <Field key={i} index={i} delete={this.handleDelete} change={this.handleChange} value={item}></Field>)}
                <Button style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0
                }} type="primary" onClick={this.handleAddField}>添加</Button>
            </div>
        )
    }
}