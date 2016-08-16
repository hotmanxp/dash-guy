import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import LayoutCmp from './pages/layout';
import Home from './pages/home';
import DaRen from './pages/daren';
import Discover from './pages/discover';
import Me from './pages/me';
import QuestionDetailPage from './pages/question-detail-page';
//import Topic from './pages/topic';
//import SlickCmp from './pages/codePage';

require('./styles/index.less');


class AppRoutes  extends React.Component {
   
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={LayoutCmp}>
                	<IndexRoute component={QuestionDetailPage} />
                    <Route path='home' component={Home} />
                	<Route path='daren' component={DaRen} />
                	<Route path='discover' component={Discover} />
                	<Route path='me' component={Me} />
                </Route>
            </Router>
            )
            
        
    }
}

export default AppRoutes;

