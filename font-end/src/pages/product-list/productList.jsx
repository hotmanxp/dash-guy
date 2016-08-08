import React from 'react';



class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ProductList';
    }
    render() {
        return <div className="products"><div className='pure pure-g'>
        	{this.props.productList.map((item,index) => (<ProductItem product={item} key={index+'productsItemkey'} />))}
        </div></div>;
    }
}


var ProductItem = (props) => (
	 <div className="pure pure-u-1-2">
                        <div className="products-wrap">
                            <img src={props.product.imgSrc} />
                            <p className="title">{props.product.title}</p>
                            <p><span className="price">￥{props.product.price}</span><span className="promotion">￥7{props.product.marketPrice}</span></p>
                        </div>
                    </div>
	)
export default ProductList;
