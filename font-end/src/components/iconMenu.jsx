import React from 'react';
import  {Link} from 'react-router';
import {observer} from 'mobx-react';
import appState from '../stores/app.state';


function setCurrentIndex(index){
    appState.menu.currentIndex = index ;
}

var appMenu = [
{
	url:'/home',icon:'icon-youhui',text:'优品'
},{
	url:'/product-list',icon:'icon-shangpin',text:'商品'
},{
	url:'/shopping-cart',icon:'icon-gouwuche',text:'购物车'
},{
	url:'/me',icon:'icon-youhui',text:'我'
}
]

@observer
class IconMenu extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'IconMenu';
    }
    render() {
        if(appState.menu.showFlag){
             return <div>
            <div className='bottom-menu'>
        <ul className='display-flex align-items-center'>
            {appMenu.map((item,index) =>(<MenuItem item={item} active={index==appState.menu.currentIndex} key={index+'menukey'} menuIndex={index} />))}
        </ul>
        </div>
        </div>;
        }
        else{
            return <div></div>
        }
       
    }
    
}

var MenuItem = (props) => (<li className={'flex-1 menu-item' + (props.active?' active':'') } onClick={() =>{setCurrentIndex(props.menuIndex)}}>
	<Link to={props.item.url} >
		<i className={'menu-icon iconfont '+props.item.icon} ></i>
		<div className='text' >{props.item.text}</div>
	</Link>
</li>)

export default IconMenu;
