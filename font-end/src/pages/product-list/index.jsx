import React from 'react';
import { observer } from 'mobx-react';
import appState from '../../stores/app.state';

import SerchBar from './serchBar.cmp';
import MenuBar from './menuBar';
import ProductsBox from './productList';
import  productsList from '../../stores/product.model';



@observer
class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ProductList';
    }
    render() {
        return <div><SerchBar />
        <div className='body-content'>
        <div className="category">
             <MenuBar />
             <ProductsBox productList = {productsList.productList} />
        </div>
            
        </div>
       
        </div>;
    }
    componentDidMount() {
    	appState.topBar.title= '选择商品';
    	appState.topBar.rightText= '';
    	appState.topBar.showFlag = false;
        productsList.getAllProducts();

    }
}

export default ProductList;
