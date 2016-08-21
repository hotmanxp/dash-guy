import React from 'react';
import Page from '../single.page';
import Title from './title';
import appState from '../../stores/app.state';
import Article from '../../stores/article.detail.store';
import { observer } from 'mobx-react';

@observer
class ArticleDetail extends Page {
    constructor(props) {
        super(props);
        this.displayName = 'ArticleDetail';
        this.article = new Article();
    }
    render() {
    	
        return <div className='app-body article-detail-page'>
        	<Title data={this.article.article} />
        </div>;
    }
    componentDidMount() {
     appState.topBar.title = '文章详情';     
    }
}

export default ArticleDetail;
