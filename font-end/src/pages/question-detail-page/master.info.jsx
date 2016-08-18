import React from 'react';

class MasterInfo extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'MasterInfo';
    }
    render() {
        return <div className='master-info-part display-flex'>
        	<div className='avater'>
        		<img src='./images/small-pic.png' className='pic' />
        		<div className='vip' >v</div>
        	</div>
        	<div className='text flex-1'>
        		<p className='name'>家成</p>
        		<p className='info'><span>五年施教经验</span><span>擅长器械／</span><span>普拉提</span> </p>
        	</div>
        </div>;
    }
}

export default MasterInfo;
