import React from 'react';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Content';
    }
    render() {
    	console.log(this.props.data);
    	let article = this.props.data;
        return <div className='content-part'>
        	<p>{article.content}</p>
        	{article.picture&&article.picture.map((item,index) => (
        		<img src={item} key={index+'articleKey'} />))}
        </div>;
    }
}

export default Content;
