import React from 'react';

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Details';
    }
    render() {
        return <div className='question-part'>
        	<div className='asker-info display-flex align-items-center' >
        		<div className='avater'>
        			<img className='pic' src='./images/small-pic.png' />
        		</div>
        		<div className='text flex-1'>
        			<p className='name'>程家家</p>
        			<p className='time'>5小时前</p>
        		</div>
        		<div className='price'>￥120</div>
        	</div>
        	<div className='question-text'>
        		<span className='keyword'>＃仰卧起坐＃</span>
        		<span>如何通过仰卧起坐更好的实现六块腹肌呢？</span>
        	</div>
        </div>;
    }
}

export default Question;
