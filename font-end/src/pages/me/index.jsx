import React from 'react';
import Page  from '../menu.page';
import { observer } from 'mobx-react';
import HomeData from '../../stores/home.model';
import Banner from '../../components/banner';
import  appState from '../../stores/app.state';



@observer
class Me extends Page {
    constructor(props) {
        super(props);
        this.displayName = 'Me';
       
    }
    render() {
        return <div className="home-page">
        	
        	<div className="app-body">
                
              
            </div>
       
        </div>;
    }
    componentDidMount() {
        appState.topBar.title = '我的';
        appState.menu.currentIndex = 3;
       
    }
}

export default Me;



