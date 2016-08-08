import React from 'react';
import ProductList from '../../stores/product.model';


var menuTitleList = [{name:'女装',sort:1},{name:'汽车',sort:2},{name:'鞋包',sort:3},{name:'美妆',sort:4},{name:'男装',sort:5}];
var menuListAll = ['女装','汽车','鞋包','美妆','男装','汽车','鞋包','美妆','男装','汽车','鞋包','美妆','男装'];
class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'MenuBar';
        this.state = {menuDetailShow:false}
    }
    render() {
        return <div>
        	<div className="category-title">
                <div className="category-all" onClick={() => (this.sortProduct('all'))}><div className="hover">全部</div></div>
                <div className="flex-row"> 
                	{menuTitleList.map((item,index) => ( <div className="flex-item" key={index+'menuTitleList'} onClick={() => (this.sortProduct(item.sort))}><div >{item.name}</div></div>))}
                   
                </div>
                <i className={'iconfont category-icon' + (this.state.menuDetailShow ? ' icon-arrow-up':' icon-arrow-down')} onClick={::this.changeShow}></i>
            </div>
            
            <div className="category-list" style={{display: (this.state.menuDetailShow?'block':'none')}}>
                <div className="pure pure-g">
                {menuListAll.map((item,index) => (<div className="pure pure-u-1-4" key={index+'menuListAll'}><div >{item}</div></div>))}
                    
                </div>
            </div>
        </div>;
    }
    changeShow() {

    	this.setState({menuDetailShow : !this.state.menuDetailShow} );
    }
    
    sortProduct(sort){
    	ProductList.getProductBySort(sort);
    }
}




export default MenuBar;
