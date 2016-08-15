import React from 'react';
import appState from '../../stores/app.state';
import { observer } from 'mobx-react';
import Banner from './topicBanner';
import TopicModel from '../../stores/topic.model';
import Products from './products';

@observer
class Topic extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Topic';
        this.topic = new TopicModel(this.props.params.topicId);
    }
    render() {
    	const { Data } = this.topic;
    	if(Data){
    		return <div className='app-body'>
        	<div className="topic-part" >
        		{Data.bannerPicImg&& <Banner bannerList={Data.bannerPicImg} />}
        		<div className="title" >{Data.title}</div>
        		<div className="content">{Data.content}</div>
        		<Products products={Data.products} />
        	</div>
        	
        </div>;
    	}
        
    }

    componentDidMount() {
      appState.topBar.title = this.topic.Data.titleMain;
        appState.topBar.rightText = '';
        appState.topBar.showFlag = true;
        appState.topBar.backBtn = true;
        appState.menu.showFlag = false;
       
    }
}

export default Topic;
