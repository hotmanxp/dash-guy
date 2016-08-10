import React from 'react';
import { Link } from 'react-router';

var menuData = [{
	text:'新手入门',color:'#fd5b63',link:''},
	{text:'健身攻略',color:'#56ace4',link:''},
	{text:'成为达人',color:'#2bd798',link:''}]
class BlockMenu extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'BlockMenu';
    }
    render() {
        return <div className="block-menu">
        	<div className="display-flex">
        		{menuData.map((item,index) => (<CellItem data={item} key={index} />))}
        	</div>
        </div>;
    }
}

var CellItem = (props) => (<div className="cell flex-1" style={{backgroundColor:props.data.color}}><Link to={props.data.link} >{props.data.text}</Link></div>)


export default BlockMenu;
