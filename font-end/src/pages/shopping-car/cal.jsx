import React from 'react';
import ReactDom from 'react-dom';
import { observer } from 'mobx-react';
import userInfo from '../../stores/userInfo';

@observer
class Cal extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'cal';
    }
    render() {
        return <div><div className="account">
        <div className="flex-row">
            <div className="flex-item">
                <div className="app-checkbox">
                    <input type="checkbox" id='set-default-all' ref='orderAllToggle' defaultChecked={false} onChange={::this.handleToggle}/>
                    <label className="iconfont " htmlFor="set-default-all"  ></label>
                    <span>全选</span>
                </div>
            </div>
            <div className="flex-item">
                <p className="text">合计：<span className="red">￥{userInfo.orderTotleMoney}</span>
                </p>
                <p>
                    <span className="text">共{userInfo.orderLength}件</span>
                </p>
            </div>
            <div className="flex-item">
                <a href="cart_submit.html" className="calc">去结算</a>
            </div>
        </div>
    </div></div>;
    }
    handleToggle(){
        let checkedFlag = ReactDom.findDOMNode(this.refs.orderAllToggle).checked;
        if(checkedFlag){
            userInfo.orderAll(true)}
            else{userInfo.orderAll(false)}
    }

}

export default Cal;
