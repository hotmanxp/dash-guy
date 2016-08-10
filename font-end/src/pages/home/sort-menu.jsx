import React from 'react';
import { Link } from 'react-router';

var menuData = [{title:'瑜伽',cssName:'yujia',link:'',color:'#ee4b3d'},
{title:'器材',cssName:'qicai',link:'',color:'#16d173'},
{title:'动感单车',cssName:'danche',link:'',color:'#f4ca00'},
{title:'游泳',cssName:'youyong',link:'',color:'#42b5fe'},
{title:'全部',cssName:'quanbu',link:'',color:'#24d69a'}
];

class SortMenus extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'SortMenus';
    }
    render() {
        return (<div className='sort-menu display-flex align-items-center'>
        	{menuData.map(((item,index) => (<Menu data={item} key={index}/>)))}
        </div>)
    }
}

var Menu = (props) => (<div className="flex-1">
	<Link to={props.data.link}>
		<div className={"menu-item "+props.data.cssName} ></div>
		<div className="text" >{props.data.title}</div>
	</Link>
</div>);

export default SortMenus;
