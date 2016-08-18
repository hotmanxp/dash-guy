import React from 'react';

class SimilarQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'SimilarQuestion';
    }
    render() {
        return <div className='similar-part'>
        	<div className='title'>相似问题</div>
        	<div className='list-container' >
        		<Item />
        		<Item />
        	</div>
        </div>;
    }
}

const Item = (props) => (<div className='list-item'>
        			<span className='keyword'>#仰卧起坐#</span>
        			<span>您好，如何通过仰卧起坐更好的实现六块腹肌呢？</span>
        		</div>)

export default SimilarQuestion;
