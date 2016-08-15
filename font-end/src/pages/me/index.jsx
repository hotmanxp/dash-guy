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
        return <div className="me-page app-body">
        	<div className="weui_cells_title">带图标、说明、跳转的列表项</div>
<div className="weui_cells weui_cells_access">

    <a className="weui_cell" href="javascript:;">
        <div className="weui_cell_hd">
            <i className='iconfont icon-wen'  ></i>
        </div>
        <div className="weui_cell_bd weui_cell_primary text">
            <p>我问的问题</p>
        </div>
        <div className="weui_cell_ft">
         
        </div>
    </a>
    <a className="weui_cell" href="javascript:;">
        <div className="weui_cell_hd">
             <i className='iconfont icon-chakan1zhuanhuan'  ></i>
        </div>
        <div className="weui_cell_bd weui_cell_primary text">
            <p>我揭开的答案</p>
        </div>
        <div className="weui_cell_ft">
            
        </div>
    </a>
     <a className="weui_cell" href="javascript:;">
        <div className="weui_cell_hd">
             <i className='iconfont icon-zaixiankefu'  ></i>
        </div>
        <div className="weui_cell_bd weui_cell_primary text">
            <p>在线客服</p>
        </div>
        <div className="weui_cell_ft">
            
        </div>
    </a>
     <a className="weui_cell" href="javascript:;">
        <div className="weui_cell_hd">
             <i className='iconfont icon-chakan1zhuanhuan'  ></i>
        </div>
        <div className="weui_cell_bd weui_cell_primary text" >
            <p>投诉建议</p>
        </div>
        <div className="weui_cell_ft">
            
        </div>
    </a>
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



