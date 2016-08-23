import React, {Component} from 'react';
import classnames from 'classnames';

const menuList = [
    {titel:'瘦腰',type:''},
    {titel:'增肌',type:''},
    {titel:'塑形',type:''},
    {titel:'健身计划',type:''},
    {titel:'饮食',type:''},
    {titel:'器材',type:''},
    {titel:'丰胸',type:''},
    {titel:'美臀',type:''},
    {titel:'瑜伽',type:''},
    {titel:'瘦腿',type:''},
];
class Menu extends Component {
    render() {
        return (
            <div className='menu-container cf'>
               {menuList.map((item,index) => (<div className={classnames('menu-item',{green:(index>=5)})} key={index+'menuKey'}>{item.titel}</div>))}
            </div>
        );
    }
}

export default Menu;