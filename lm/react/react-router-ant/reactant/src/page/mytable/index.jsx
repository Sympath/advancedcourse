import React,{Component} from 'react'
import { Table } from "antd";

export default class MyTable extends Component{
    state = {
        
    }
    render(){
        const data = [
            {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号',
            },
            {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
            },
        ];

        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
                render: text => <a href="#"> {text} </a>
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: '操作',
                key: 'key',
                render: (text,record)=>{
                    return (
                        <div>
                            <a href="#">+</a>
                            <a href="#">-</a>
                            正在操作的key： {record.key}
                        </div>
                    )
                }
            }
        ];

        const {match,location} = this.props;
        return(
            <div>
                {location.search}
                table
                <Table dataSource={data} columns={columns}></Table>    
            </div>
        )
    }
}