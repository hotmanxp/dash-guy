import React from 'react';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Comment';
    }
    render() {
    	let article = this.props.data;
        return <div className='comment-part'>
        	<div className='header cf'>
        		<div className='left'>{'共有('+article.comments.length+')条评论'}</div>
        		<div className='right'>评论</div>
        	</div>
        	<div className='list-container'>
        		{article.comments&&article.comments.map((item,index) => (<Item data={item} reffer={item.ref !=undefined ? article.comments[item.ref] : null} key={index+'commentsKey'} />))}
        	</div>
        </div>;
    }
}

const Item = (props) => (<div className='comment-item'>
	<div className='info display-flex align-items-center'>
		<div className='avater'>
			<img className='pic' src={props.data.avater} />
		</div>
		<div className='detail flex-1'>
			<p className='user-name'>{props.data.username}</p>
			<p className='time'>{props.data.time}</p>
		</div>
		<div className='answer'>回复</div>

	</div>
	<div>
		<p className='comment-text'>{props.data.text}</p>
		{props.reffer&&<div className='ref'>
			<p className='username'>{props.reffer.username}</p>
			<p className='text'>{props.reffer.text}</p>
		</div>}
	</div>
	
</div>)
export default Comment;
