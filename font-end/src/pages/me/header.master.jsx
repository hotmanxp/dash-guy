import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Header';
    }
    render() {
    	let infoPart = (() => {
    		
    			if(this.props.type=='daren') {return <div>
		    		<div className='brife'>家康就是我的生活</div>
		        	<div className='earning-info'>
		        		<span>已回答</span>
		        		<span className='quest-quantity'>20</span>
		        		<span>个问题，总收入</span>
		        		<span className='earning-quantity'>2000</span>
		        		<span>元</span>
		        	</div>
    			</div>} 
    			else {return <div><button className='btn'>成为达人</button></div> 
    		} 
    	
    })();
        return <div className='header'>
        	<img src='./images/small-pic.png' className='avater' />
        	<div className='username'>程家</div>
        	{infoPart}
        </div>;
    }
}

export default Header;
