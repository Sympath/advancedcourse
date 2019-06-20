import React from "react";

class Child extends React.Component {
    state = {
        childCount: 0    
    }

    handleChildCountChange = ()=>{
        this.setState({
            childCount: ++this.state.childCount
        })
    }

    componentWillMount(){

    }
    componentDidMount(){
        
    }
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.count !== this.props.count){
            return true;
        }
        if (nextState.count !== this.state.count) {
            return true;
        }
        return false;
    }
    // componentWillReceiveProps(){
    //     console.log("props");
        
    // }
    componentWillUpdate(){
        console.log('update',this.props.count);
        
    }
    componentDidUpdate(){
        console.log('updated',this.props.count);
    }
    render(){
        return (
            <div>
                <button onClick={this.handleChildCountChange}>修改count</button>
                child Commponent:  {this.props.count}
                child count: {this.state.childCount}    
            </div>
        )
    }

}
export default Child;