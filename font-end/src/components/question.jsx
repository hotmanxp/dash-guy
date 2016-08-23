import React from 'react';

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Details';
    }
    render() {
        let question = this.props.data;
        return <div className='question-part'>
        	<div className='asker-info display-flex align-items-center' >
        		<div className='avater'>
        			<img className='pic' src={question.avater} />
        		</div>
        		<div className='text flex-1'>
        			<p className='name'>{question.name}</p>
        			<p className='time'>{question.time}</p>
        		</div>
        		<div className='price'>￥{question.price}</div>
        	</div>
        	<div className='question-text'>
        		<span className='keyword'>＃{question.keyword}＃</span>
        		<span>{question.content}</span>
        	</div>
        </div>;
    }
}

export default Question;
