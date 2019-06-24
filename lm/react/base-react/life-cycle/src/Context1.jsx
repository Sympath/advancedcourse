import React,{Component} from 'react';
import propTypes from 'prop-types';
class MyButton extends React.Component {
    render() {
        console.log(this.context);
        return (
           <ThemContext.Consumer>
               {
                   (value) => {
                       return (
                           <button style={{
                               backgroundColor: value.theme
                           }}>
                               {this.props.children}
                           </button>
                       )
                   }
               }
           </ThemContext.Consumer>
        )
    }
}
MyButton.contextTypes = {
    color: propTypes.string
}
class Message extends React.Component {
    render() {
        return (
            <div>
                {this.props.text}
                <MyButton>delete</MyButton>
            </div>
        )
    }
}
const ThemContext = React.createContext({
    theme: 'purple',
    toggleTheme: ()=>{

    }
});
export default class Context1 extends Component{
    state = {
        theme: 'purple',
        // toggleTheme:
    }
    render(){
        const msgs = ['你好旧时光', '耿耿于怀', '栀生淮南']
        return(
            <ThemContext.Provider value={this.state}>
                {this.props.children}
                {
                    msgs.map((msg,i)=>{
                        return <Message key={i} text={msg}>
                          
                        </Message>
                    })
                }
            </ThemContext.Provider>
        )
    }
}