import React from 'react';
import appState from '../../stores/app.state';
import Page from '../single.page';
import Question from './question';
import Open from './open';
import MasterInfo from './master.info';
import SimilarQuestion from './similar';

class QuestionDetail extends Page {
    constructor(props) {
        super(props);
        this.displayName = 'QuestionDetail';
    }
    render() {
        return <div className='app-body no-menu question-detail-page'>
            <Question />
            <Open />
            <MasterInfo />
            <SimilarQuestion />
        </div>;
    }
    componentDidMount() {
    	appState.topBar.title = '问题详情';
    }
}

export default QuestionDetail;
