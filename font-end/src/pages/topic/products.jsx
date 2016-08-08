import React from 'react';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Products';
    }
    render() {
    	if(this.props.products){
    		 return <div><div >
 
        <div className="product-box-row cl">
            {this.props.products.map((item,index) =>(<ProductBox product={item} key={index+'productkey'}/>))}
        </div>

        
    </div>
    </div>;
    	}
       
    }
}

var ProductBox = (props) => (<div className="product-box">
                 <img src={props.product.imgSrc} />
                <p className="title-p">{props.product.title}</p>
                <p className="price-part">
                    <span className="price">{props.product.price}</span>
                    <span className="market-price">{props.product.marketPrice}</span>
                </p>
            </div>)

export default Products;
