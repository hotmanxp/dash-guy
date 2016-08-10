import React from 'react';
import Page  from '../menu.page';
import { observer } from 'mobx-react';

import Banner from '../../components/banner';

import  appState from '../../stores/app.state';



@observer
class Discover extends Page {
    constructor(props) {
        super(props);
        this.displayName = 'Discover';
       
    }
    render() {
        return <div className="home-page">
        	
        	<div className="app-body">
                <DarenData />
              
            </div>
       
        </div>;
    }
    componentDidMount() {
        appState.topBar.title = '发现';
        appState.menu.currentIndex = 2;
       
    }
}

export default Discover;



