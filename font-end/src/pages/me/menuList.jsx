import React from 'react';
import { Link } from 'react-router';

var menus = [
{icon:'wen',color:'#a05aba',title:'我问的问题',size:30,link:''},
{icon:'chakan1zhuanhuan',color:'#67b3e7',title:'我揭开的答案',link:''},
{icon:'bangzhu',color:'#eb523c',title:'我回答的问题',link:'my-answer'},
{icon:'yqfhuida',color:'#f4c600',title:'帮助',link:''},
{icon:'zaixiankefu',color:'#11cd6e',title:'在线客服',link:''},
{icon:'kefu',color:'#00bb9c',title:'投书建议',size:22,link:''}
]

class MenuList extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'MenuList';
    }
    render() {
        return <div className='menuList-container'>{
        	menus.map((item,index)=>(<Item data={item} key={index}/>))
        }</div>;
    }
}

const Item = (props) => (<Link to={props.data.link} className='item display-flex align-items-center'>
	<div className='icon'>
		<i className={'iconfont icon-'+props.data.icon} style={{color:props.data.color,fontSize:props.data.size?(props.data.size+'px'):''}}></i>
	</div>
	<div className='text flex-1'>{props.data.title}</div>
	<div className='right-arrow'>
		<i className='iconfont icon-xiangxia'></i>
	</div>
</Link>)

export default MenuList;
