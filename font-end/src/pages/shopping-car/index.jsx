import React from 'react';
import { observer } from 'mobx-react';
import appState from '../../stores/app.state';
import OrderList from './orderList';
import Cal from './cal';

import userInfo from '../../stores/userInfo';


@observer
class ShoppingCar extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ProductList';

    }
    render() {
        return <div className="body-content two-menu">
           <OrderList goodList={userInfo.shoppingCarList} />
           <Cal />
         
        </div>;
    }
    componentDidMount() {
    	appState.topBar.title= '购物车';
        appState.topBar.rightText='编辑';
        appState.topBar.showFlag = true;
        userInfo.getShopingCarList();

    }
}





export default ShoppingCar;
