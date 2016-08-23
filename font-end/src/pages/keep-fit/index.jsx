import React from 'react';
import Page from '../single.page';
import appState from '../../stores/app.state';
import NewhandArticle from '../../stores/newHand.model';
import { observer } from 'mobx-react';
import Menu from './menu';
import Article from './article';
import Articles from '../../stores/keepFit.article.model';

@observer
class KeepFit extends Page {
    constructor(props) {
        super(props);
        this.displayName = 'Newhand';
        this.data = new Articles();
        
    }
    render() {
    	
        return <div className='app-body no-menu keep-fit-page'>
        	<Menu />
            <Article list={this.data.articleList} />
        </div>;
    }
    componentDidMount() {
    	appState.topBar.title = '健身功略';
    	appState.topBar.backBtn = true;
    }
}



export default KeepFit;
