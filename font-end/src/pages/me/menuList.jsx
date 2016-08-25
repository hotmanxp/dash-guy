import React from 'react';

var menus = [
{icon:'wen',color:'#a05aba',title:'我问的问题',size:30},
{icon:'chakan1zhuanhuan',color:'#67b3e7',title:'我揭开的答案'},
{icon:'bangzhu',color:'#eb523c',title:'我回答的问题'},
{icon:'yqfhuida',color:'#f4c600',title:'帮助'},
{icon:'zaixiankefu',color:'#11cd6e',title:'在线客服'},
{icon:'kefu',color:'#00bb9c',title:'投书建议',size:22}
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

const Item = (props) => (<div className='item display-flex align-items-center'>
	<div className='icon'>
		<i className={'iconfont icon-'+props.data.icon} style={{color:props.data.color,fontSize:props.data.size?(props.data.size+'px'):''}}></i>
	</div>
	<div className='text flex-1'>{props.data.title}</div>
	<div className='right-arrow'>
		<i className='iconfont icon-xiangxia'></i>
	</div>
</div>)

export default MenuList;
