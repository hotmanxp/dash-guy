import React from 'react';
import appState from '../../stores/app.state';
import Page from '../single.page';

class QuestionDetail extends Page {
    constructor(props) {
        super(props);
        this.displayName = 'QuestionDetail';
    }
    render() {
        return <div>QuestionDetail</div>;
    }
    componentDidMount() {
    	appState.topBar.title = '问题详情';
    }
}

export default QuestionDetail;
