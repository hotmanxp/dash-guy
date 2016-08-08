import React from 'react';
import products from '../../stores/product.model';

class SerchBar extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'SerchBar';
    }
    render() {
        return <div><div className="top-bar-container">
            <div className="flex-row search">
                <div className="back">
                    <a className=" iconfont icon-back" href="javascript:history.go(-1)"></a>
                </div>
                <div className="flex-item form">
                     <form className="iconfont icon-sousuo" action="#">
                        <input type="text" name="search" placeholder="搜索商品" ref='serchKey' onChange={::this.testSerch}/>
                    </form>
                </div>
                <div className="search-btn" onClick={::this.serchProduct}>
                    <i className="iconfont icon-icon-search"></i>
                </div>
            </div>
        </div></div>;
    }
    testSerch() {
        products.getProductBySerchKey(this.refs.serchKey.value);
       
    }
    serchProduct() {
        products.getProductBySerchKey(this.refs.serchKey.value);
    }
}

export default SerchBar;
