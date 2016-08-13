import React from 'react';
import Page  from '../menu.page';
import { observer } from 'mobx-react';

import Dialog from '../../components/dialog';
import Loading from '../../components/loading';
import ToastDone from '../../components/toast.done';
import  appState from '../../stores/app.state';



@observer
class Me extends Page {
    constructor(props) {
        super(props);
        this.displayName = 'Me';
        this.state = {dialogOpt:{}};
       
    }
    render() {
        return <div className="home-page">
        	<Dialog cb={::this.handleDialog} cancelBtn={true} />
        	<div className="app-body">
            <button className='weui_btn weui_btn_default' onClick={::this.openToast}>show</button>    
            <i className="weui_icon_success_circle" style={{color:'red'}} ></i>
            <Loading  />
            <ToastDone />
            </div>
       
        </div>;
    }
    componentDidMount() {
        appState.topBar.title = '我的';
        appState.menu.currentIndex = 3;
       
    }
   
    handleDialog(flag) {
       console.log(flag?'ok':'cancel');
    }
    openToast() {
        appState.dialog.showFlag = true;
        setTimeout( () => { appState.loading.showFlag = false} ,3000)
    }
}

export default Me;



