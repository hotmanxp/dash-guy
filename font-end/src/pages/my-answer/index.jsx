import React from 'react';
import Page from '../single.page';
import appState from '../../stores/app.state';
import NewhandArticle from '../../stores/newHand.model';
import { observer } from 'mobx-react';
import Tab from './tab';
import Content from './container';
import MyAnswerList from '../../stores/myAnswer.model';
import DocumentTitle  from 'react-document-title';

let currentTabtype = 'waitingAnswer';

class MyAnswer extends Page {
    constructor(props) {
        super(props);
        this.displayName = 'MyAnswer';
        this.data = new MyAnswerList();
    }
    render() {
    	let contentList = [];
    	let typeName = '';
    	switch(currentTabtype) {
    		case ('waitingAnswer'):{contentList = this.data.waitingAnswerList;} break; 
    		case ('answered'):{contentList = this.data.answeredList;} break; 
    		case ('rejected'):{contentList = this.data.rejectedList} break; 
    	}
        return <div className='app-body no-menu has-tab my-answer-page'>
        	<Tab />
        	<Content data = {contentList} typeName={currentTabtype} />
        	<DocumentTitle title='我回答的问题' ></DocumentTitle>
        </div>;
        
       
    }
    componentDidMount() {
     appState.topBar.title = '我回答的问题';     
    }
}

export default MyAnswer;
