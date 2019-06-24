import React,{Component} from 'react';
import withLogin from "./WithLogin";

@withLogin
class ShopCart extends Component{
    render(){
        return(
           <ul>
               <li>你好舊時光</li>
               <li>最好的我們</li>
           </ul>
        )
    }
  
}
ShopCart.displayName = "ShopCart"

export default ShopCart