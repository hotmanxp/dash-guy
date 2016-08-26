import React from 'react';
import Page from '../single.page';
import appState from '../../stores/app.state';
import NewhandArticle from '../../stores/newHand.model';
import { observer } from 'mobx-react';
import { Link } from 'react-router';

class Newhand extends Page {
    constructor(props) {
        super(props);
        this.displayName = 'Newhand';
        this.data = new NewhandArticle();
    }
    render() {
    	let {articleList} = this.data;
        return <div className='app-body no-menu new-hand-page'>
        	<div className='banner-pic'>
        		<img  src='./images/banner1.jpg'/>
        	</div>
        	<div className='list-container section' >
        		{articleList&&articleList.map((item,index) => (<Item data={item} key={index+'articleListKey'} />))}
        	</div>
        </div>;
    }
    componentDidMount() {
    	appState.topBar.title = '新手入门';
    	appState.topBar.backBtn = true;
    }
}

const Item = (props) => (<Link to={props.data.link} className='list display-flex align-items-center'>
	<div className='flex-1 article-list-title'>{props.data.title}</div>
	<div className='avater'>
		<img src={props.data.imgSrc} />
	</div>
</Link>)

export default Newhand;
