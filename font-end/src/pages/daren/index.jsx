import React from 'react';
import Page  from '../menu.page';
import { observer } from 'mobx-react';
import DarenData from '../../stores/daren.model';
import Banner from '../../components/banner';
import DaRenList from './daren.list';
import  appState from '../../stores/app.state';



@observer
class DaRen extends Page {
    constructor(props) {
        super(props);
        this.displayName = 'DaRen';
        this.darenData = new DarenData();
      
       
    }
    render() {
        return <div className="daren-page">
        	
        	<div className="app-body">
               <Banner  data={this.darenData.BannerList} />
               {this.darenData.darenListData &&this.darenData.darenListData.map((item,index)=>(
               	<DaRenList data={item} key={index+'darenglistKey'}/>)) }
            </div>
       
        </div>;
    }
    componentDidMount() {
        appState.topBar.title = '达人';
        appState.menu.currentIndex = 1;
       
    }
}

export default DaRen;



