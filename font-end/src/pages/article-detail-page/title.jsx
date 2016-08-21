import React from 'react';
import { observer } from 'mobx-react';

@observer
class Title extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Title';
    }
    render() {
    	let acticle = this.props.data;
        return <div>
        	<div className='title-part'>
        		<h3 className='title'>
        			{acticle.title}
        		</h3>
        		<div className='display-flex'>
        			<div className='avater'>
        				<img className='pic' src={acticle.avater} />
        			</div>
        			<div className=''>{acticle.author}</div>
        			<div>{acticle.publistTime}</div>
        		</div>
        	</div>
        </div>;
    }
}

export default Title;
