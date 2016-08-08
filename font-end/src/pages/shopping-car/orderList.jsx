import React from 'react';

import userInfo from '../../stores/userInfo';
import { observer } from 'mobx-react';

@observer
class OrderList extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Order';
    }
    render() {
        return <div> {this.props.goodList&&this.props.goodList.map((item,index) => (<OrderItem good={item} key={index+'goodListkey'+item.uid} />))}</div>;
    }
}



var OrderItem = observer((props) =>(<div>
        
    <div className="display-flex shopping-car align-items-center">
        <div className="app-checkbox checkbox">
            <input type="checkbox" id={props.good.uid} checked={props.good.orderFlag} onChange={() => {userInfo.changeOrderFlage(props.good.uid)}} />
            <label className="iconfont " htmlFor={props.good.uid}></label>
        </div>
        <div className="pic">
            <img src={props.good.imgSrc} />
        </div>
        <div className="flex-1 details has-product">
            <div className="no-product">
                <div className="sell-out">
                    <p className="title">{props.good.title}</p>
                    <p className="sell-out-title">对不起，宝贝已下架</p>
                </div>
            </div>
            <div className="flex-1 has-product">
                <div className="title">{props.good.title}</div>
                <p className="capacity">{props.good.properties}</p>
                <div className="display-flex align-items-center price">
                    <div className="discount-price">￥{props.good.price}</div>
                    <div className="market-price flex-1">￥{props.good.marketPrice}</div>
                    <div className="calc" >
                        <span className="btn " onClick={() => {userInfo.change(props.good.uid,'sub')}}>-</span>
                        <input className="" type="number" value={props.good.quantity} />
                        <span className="btn " onClick={() =>{userInfo.change(props.good.uid,'add')}}>+</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>));

export default OrderList;
