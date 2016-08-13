import React from 'react';
import appState from '../stores/app.state';
import { observer } from 'mobx-react';

@observer
class ToastDone extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ToastDone';
    }
    render() {
        return <div>
        	<div style={{display:appState.toast.showFlag?'block':'none'}} >
    <div className="weui_mask_transparent"></div>
    <div className="weui_toast">
        <i className="weui_icon_toast"></i>
        <p className="weui_toast_content">{appState.toast.text}</p>
    </div>
</div>
        </div>;
    }
}

export default ToastDone;
