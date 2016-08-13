import React from 'react';
import { observer } from 'mobx-react';
import appState from '../stores/app.state';

@observer
class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Dialog';
    }
    render() {
        return <div>
        	<div className="weui_dialog_alert"  style={{display:(appState.dialog.showFlag ? 'block' : 'none')}}>
    <div className="weui_mask"></div>
    <div className="weui_dialog">
        <div className="weui_dialog_hd"><strong className="weui_dialog_title">{appState.dialog.title}</strong></div>
        <div className="weui_dialog_bd">{appState.dialog.content}</div>
        <div className="weui_dialog_ft">
        	{this.props.cancelBtn&&<a href="javascript:;" className="weui_btn_dialog " onClick={()=>{this.handleBtn(false)}}>取消</a>}
            <a href="javascript:;" className="weui_btn_dialog primary" onClick={()=>{this.handleBtn(true)}}>确定</a>
        	
        </div>
    </div>
</div>
        </div>;
    }
    handleBtn(flag){
    	this.props.cb&&this.props.cb(flag);
    	appState.dialog.showFlag = false;

    }
}

export default Dialog;
