import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import LayoutCmp from './pages/layout';
//import Home from './pages/home';
//import ProductList from './pages/product-list';
//import  ShoppingCar from './pages/shopping-car';
//import Me from './pages/me';
//import Topic from './pages/topic';
//import SlickCmp from './pages/codePage';

require('./styles/index.less');


class AppRoutes  extends React.Component {
   
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={AppComp}>
                    <IndexRoute component={Home} />
                    //<Route path='home' component={Home} />
                    //<Route path='product-list' component={ProductList} />
                    //<Route path='shopping-cart' component={ShoppingCar} />
                    //<Route path='me' component={Me} />
                    //<Route path='topic/:topicId' component={Topic} />
                    //<Route path='slick' component={SlickCmp} />

                </Route>
            </Router>
            )
            
        
    }
}

export default AppRoutes;

