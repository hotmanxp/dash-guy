import React from 'react';

class Open extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Open';
    }
    render() {
        return <div className='open-part' style={{backgroundImage:'url("./images/2.jpg")'}}>
        	<div className='info' >
        		<div className='info-text'>
        			<span>揭开（1245）</span>
	        		<span className='space'></span>
	        		<span>有用（1000）</span>
        		</div>
        		
        		<div className='btn-base one-btn'>一元揭开</div>
        	</div>
        </div>;
    }
}

export default Open;
