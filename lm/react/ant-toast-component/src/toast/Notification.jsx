import React,{Component} from 'react';
import ReactDOM from "react-dom";
import Notice from "./Notice";
class Notification extends Component{
    state = {
        notices : []
    }
    removeNotice = (key)=>{
        const { notices } = this.state;
        notices = notices.filter(item => {
            if(item.onClose) item.onClose();
            return notices.filter(item => item.key != key);
        })
        this.setState({
            notices
        })
    }
    getNoticeKey=()=>{
        return `notice-${Date.now()}`
    }
    addNotice=(notice)=>{
        console.log(notice);
        
        const {notices} = this.state;
        let {
            type,
            content,
            duration,
            onClose
        } = notice;
        notice.key = this.getNoticeKey();
        notices.push(notice);
        this.setState({
            notices
        })
        setTimeout(() => {
            this.removeNotice(notice.key)
        }, notice.duration);
    }
    render(){
        return(
            <div>
                {
                    this.state.notices.map(item=>{
                        return <Notice {...item} key={item.key}/>
                    })
                }
            </div>
        )
    }
}
function createNotification(params) {
    const div = document.createElement('div');
    const ref = React.createRef();
    document.body.appendChild(div);
    // ref放置在组件上，可以拿到组件的实例
    ReactDOM.render(<Notification ref={ref}/>,div);
    return {
        addNotice(notice){
            return ref.current.addNotice(notice)
        }
    }
}

export default createNotification();