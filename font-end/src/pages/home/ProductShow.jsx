import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import { autorun } from 'mobx';
import { Link } from 'react-router';


@observer
class ProductShowComp extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return <div className='index-product-show-container'>
        	<div className='big-img-container'>
        		<Link to={'/topic/'+this.props.zhuanti.topicId} > <img src={this.props.zhuanti.bigBox.imgSrc} className='big-img' /></Link>
               
        	
        	</div>
        	<div className='slide-img-container ' ref='smallContainer'>
        		<div className="product-box">
        			{this.props.zhuanti.smallBox&&this.props.zhuanti.smallBox.map((item,index) => (<SmallBoxInfo  productInfo={item} key={index+'smallbox'+item.price}/>))}
        		</div>
        		
        	</div>
        </div>;
    }
    componentDidMount() {
        let container = ReactDOM.findDOMNode(this.refs.smallContainer);
        let length = container.firstChild.childNodes.length;
        let singleWidth = container.firstChild.firstChild.offsetWidth;
        //let maginValue = parseInt(container.firstChild.firstChild.style.marginLeft);
        
        let containerWidht = length*(singleWidth+2);
        container.firstChild.style.width = containerWidht+'px';
            }
}

var SmallBoxInfo = observer((props) => (
        <div className='product-info-box'>
            <img src={props.productInfo.imgSrc} className='pic' />
            <div className='title'>{props.productInfo.title}</div>
            <div className='price'>
                <span className='market-price'>{props.productInfo.price}</span>
                <span className='discount-price'>{props.productInfo.marketPrice}</span>
            </div>
        </div>
    )) ;
export default ProductShowComp;
