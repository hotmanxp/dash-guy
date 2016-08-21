import React from 'react';

class NotAnswer extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'NotAnswer';
    }
    render() {
    	let text = this.props.btnType == 'wait' ? {p1:'耐心等待哟',p2:'达人还没有回答问题',btnText:'查看其它问题',link:''} : {p1:'sorry',p2:'达人暂不方便回答',btnText:'查看退款情况',link:''} ;
        return <div className='section not-answer-part'>
        	<p className='tips'>{text.p1}</p>
        	<p className='tips'>{text.p2}</p>
        	<a className='btn'>{text.btnText}</a>
        </div>;
    }
}

export default NotAnswer;
