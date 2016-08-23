import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import LayoutCmp from './pages/layout';
import Home from './pages/home';
import DaRen from './pages/daren';
import Discover from './pages/discover';
import Me from './pages/me';
import QuestionDetailPage from './pages/question-detail-page';
import ArticleDetail from './pages/article-detail-page';
import Newhand from './pages/new-hand';
import MyAnswer from './pages/my-answer';
//import Topic from './pages/topic';
//import SlickCmp from './pages/codePage';

require('./styles/index.less');


class AppRoutes  extends React.Component {
   
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={LayoutCmp}>
                	<IndexRoute component={Home} />
                    <Route path='home' component={Home} />
                	<Route path='daren' component={DaRen} />
                	<Route path='discover' component={Discover} />
                	<Route path='me' component={Me} />
                    <Route path='question-detail' component={QuestionDetailPage} />
                    <Route path='article-detail' component={ArticleDetail} />
                    <Route path='new-hand' component={Newhand} />
                    <Route path='my-answer' component={MyAnswer} />
                </Route>
            </Router>
            )
            
        
    }
}

export default AppRoutes;

