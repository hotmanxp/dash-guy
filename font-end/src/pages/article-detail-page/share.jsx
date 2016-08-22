import React from 'react';

class Share extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Share';
    }
    render() {
    	let article = this.props.data;
        return <div className='share-part'>
        	<div className='icon-block display-flex'>
        		<div className='flex-1 item'>
        			<i className='iconfont icon-bangzhu youyong'></i>
        			<div className='quantity'>
        				<span>有用</span>
        				<span>{'('+article.youyong+')'}</span>
        			</div>
        		</div>
        		<div className='flex-1 item'>
        			<i className='iconfont icon-bangzhu share'></i>
        			<div className='quantity'>
        				<span>分享</span>
        				<span>{'('+article.share+')'}</span>
        			</div>
        		</div>
        	</div>
        </div>;
    }
}

export default Share;
