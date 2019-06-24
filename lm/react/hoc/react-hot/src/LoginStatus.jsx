import React,{Component} from 'react';
import withLogin from "./WithLogin";

@withLogin
class LoginStatus extends Component{
    render(){
        return(
            <div></div>
        )
    }
}
LoginStatus.displayName = "LoginStatus";
export default LoginStatus