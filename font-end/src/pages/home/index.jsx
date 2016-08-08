import React from 'react';

import TopBar from '../../components/topBar';
import  Menu from '../../components/menu';
import { observer } from 'mobx-react';
 import indexData from '../../stores/home.model';
import IndexBanner from './bannerComp';
import Title from './title';
import ProductShowComp from './ProductShow';
import  appState from '../../stores/app.state';



@observer
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Home';
    }
    render() {
        return <div>
        	
        	<div className="app-body">
                <IndexBanner bannerList={indexData.indexBannerList} />
                <Title />
                {indexData.zhuantiList&&indexData.zhuantiList.map((item,index) => (<ProductShowComp zhuanti={item} key={index+'zhuantikey'}/>))}
            </div>
       
        </div>;
    }
    componentDidMount() {
        appState.topBar.title = '云天商城';
        appState.topBar.rightText = '';
        appState.topBar.showFlag = true;
        indexData.getIndexBannerData();
        indexData.getzhuantiData();
        
    }
}

export default Home;



