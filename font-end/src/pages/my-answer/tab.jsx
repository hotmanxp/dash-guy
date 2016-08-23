import React from 'react';
import classnames from 'classnames';


const menus = [
{text:'待回答',type:'waitingAnswer'},
{text:'已回答',type:'answered'},
{text:'已拒绝',type:'rejected'}

]
class Tab extends React.Component {
    constructor(props) {
        super(props);

        this.displayName = 'Tab';
        this.state = {currentIndex: 0};
    }
    render() {

        return <div className='display-flex tab-part'>
        	{menus.map((item,index) => (<div className={classnames('item','flex-1',{active:(index==this.state.currentIndex)})} key={index+'tabKey'} onClick={() =>{this.changeTab(index)}} >{item.text}</div>))}
        </div>;
    }
    changeTab(index) {
    	this.setState({currentIndex: index});
    	this.props.handleTapchange(menus[index].type);
    }
}


export default Tab;
