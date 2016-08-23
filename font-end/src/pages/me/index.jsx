import React from 'react';
import Page  from '../menu.page';
import { observer } from 'mobx-react';

import Dialog from '../../components/dialog';
import Loading from '../../components/loading';
import ToastDone from '../../components/toast.done';
import  appState from '../../stores/app.state';
import HeaderMaster from './header.master';
import MenuList from './menuList';
import DocumentTitle from 'react-document-title';

@observer
class Me extends Page {
    constructor(props) {
        super(props);
        this.displayName = 'Me';
        this.state = {dialogOpt:{}};
       
    }
    render() {
        return <div className="me-page app-body">
            <DocumentTitle title='个人资料' ></DocumentTitle>
        	<HeaderMaster />
            <MenuList />
       
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



