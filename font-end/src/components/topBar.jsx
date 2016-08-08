import React from 'react';
import {observer} from 'mobx-react';
import appState from '../stores/app.state';

@observer
class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'TopBar';
    }
    render() {
    	if(appState.topBar.showFlag){
    		return <div>
        	 <div className="top-bar-container">
    {appState.topBar.backBtn&&<a className=" iconfont icon-back top-bar-back" href="javascript:history.go(-1)"></a>}
    <div className="title">{appState.topBar.title}</div>
    <div className="right-text">{appState.topBar.rightText}</div>
  </div>
        </div>
    	}else{
    		return <div></div>
    	}
        
    }
}

export default TopBar;
