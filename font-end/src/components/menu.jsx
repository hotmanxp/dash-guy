import React from 'react';
import { Link } from 'react-router';


import { Icon } from 'antd';

var menus = [
{link:'/home',icon:'tags',text:'优品'},
{link:'/form',icon:'tablet',text:'商品'},
{link:'/home',icon:'home',text:'购物车'},
{link:'/home',icon:'star',text:'我'}
];


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Menu';
        
        
    }
    render() {
        return <div className='bottom-menu'>
        <ul className='display-flex align-items-center'>
        	{menus.map((menu,index) => (<MenuItem menu={menu} active={index==this.props.menuIndex} key={index+'menuitemkey'}/>))}
        </ul>
        </div>;
    }
}

var MenuItem = (props) => (<li className={'flex-1 menu-item'+(props.active ? 'active' : '')}>
    <Link to={props.menu.link} >
        <Icon type={props.menu.icon} className='menu-icon'></Icon>
        <div className='text'>{props.menu.text}</div>
    </Link>
</li>)

export default Menu;


