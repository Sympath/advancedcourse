import React,{Component} from 'react';

const WithLogin = (Com)=>{
    const isLogin = true;
    class NewComponent extends Component {
        render(){
            if(!isLogin){
                return (
                    <button>需要登陸</button>
                )
            }
            return (
                <Com/>
            )
        }
    }
    NewComponent.displayName = `withLogin(${Com.displayName})`
    return NewComponent;
}

export default WithLogin