import React from 'react';
import Page  from '../menu.page';
import { observer } from 'mobx-react';
import HomeData from '../../stores/home.model';
import Banner from '../../components/banner';
import SortMenus from './sort-menu';
import BlockMenus from './block-menu';
import Recommond from './recommond';
import DocumentTitle  from 'react-document-title';




import  appState from '../../stores/app.state';



@observer
class Home extends Page {
    constructor(props) {
        super(props);
        this.displayName = 'Home';
        this.homeData = new HomeData();
    }
    render() {
        return <div className="home-page">
        	<DocumentTitle title='大师' ></DocumentTitle>
        	<div className="app-body">
                <Banner data={this.homeData.indexBannerList} />
               <SortMenus />
               <BlockMenus />
               <Recommond questionList={this.homeData.indexQuestionList} />
                
               
            </div>
       
        </div>;
    }
    componentDidMount() {
        appState.topBar.title = '登陆';
        appState.menu.currentIndex = 0;
       
    }
}

export default Home;



