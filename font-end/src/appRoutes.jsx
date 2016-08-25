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
import KeepFit from './pages/keep-fit';
import DarenList from './pages/daren-list';
import Refresh from './pages/codePage/refresh';


require('./styles/index.less');


const DaRenForm = (nextState, callback) =>{
                   
                    require.ensure( [ ], (require) => {
                        callback(null, require('./pages/becomeDaren-form').default)
                    }) };


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
                    <Route path='question-detail/:id' component={QuestionDetailPage} />
                    <Route path='article-detail/:id' component={ArticleDetail} />
                    <Route path='new-hand' component={Newhand} />
                    <Route path='my-answer' component={MyAnswer} />
                    <Route path='keep-fit' component={KeepFit} />
                    <Route path='daren-list' component={DarenList} />
                    <Route path='daren-form' getComponent={DaRenForm} />
                </Route>
            </Router>
            )
            
        
    }
}

export default AppRoutes;

