import React from 'react';
import Page  from '../menu.page';
import { observer } from 'mobx-react';
import MessageList from '../../stores/message.model';

import  appState from '../../stores/app.state';


@observer
class Discover extends Page {
    constructor(props) {
        super(props);
        this.displayName = 'Discover';
        this.message = new MessageList();
       
    }
    render() {
        return <div className="message-page">
        	
        	<div className="app-body">
               {this.message.messageList&&this.message.messageList.map((item,index) => (
                <Item data={item} key={index+'messageListKey'}/>))}
              
            </div>
       
        </div>;
    }
    componentDidMount() {
        appState.topBar.title = '消息';
        appState.menu.currentIndex = 2;
       
    }
}

const Item = (props) => (<div className='message-box'>
    <div className='time-part'>
        <div className='time'>{props.data.time}</div>
    </div>
    <div className='detail'>
        <div className='title'>
            <span>{props.data.title}</span>
        </div>
        <div className='question'>
            <span className='keyword'>{'#'+props.data.keyword+'#'}</span>
            <span>{props.data.question}</span>
        </div>
        { props.data.actionType == 3 ? (<div className='blank'>&nbsp;</div>) :(props.data.actionType==1?(<div className='action-btn'>查看所有</div>):(<div className='action-btn'>马上回答</div>))}

    </div>
    </div>)

export default Discover;



