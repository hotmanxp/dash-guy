import React from 'react';
import  {Link} from 'react-router';
import {observer} from 'mobx-react';
import { appMenu } from '../stores/app.static.data';
import appState from '../stores/app.state';


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
            {appMenu.map((item,index) =>(<MenuItem item={item} hasNew={appState.menu.hasNew[index]} active={index==appState.menu.currentIndex} key={index+'menukey'} menuIndex={index} />))}
        </ul>
        </div>
        </div>;
        }
        else{
            return <div></div>
        }
       
    }
    componentDidMount() {
        appState.menu.hasNew[2] = 1;
        
    }
    
}

var MenuItem = (props) => (<li className={'flex-1 menu-item' + (props.active?' active':'')+(props.hasNew?' new':'') } >
	<Link to={props.item.url} >
		<i className={'menu-icon iconfont '+props.item.icon} ></i>
		<div className='text' >{props.item.text}</div>
	</Link>
</li>)

export default IconMenu;
