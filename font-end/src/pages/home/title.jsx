import React from 'react';

import { Icon } from 'antd';

class  Title9Clock extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return <div >
        	
            <div className='nine-clock display-flex align-items-center'>
                <div className="flower"><i className="iconfont icon-wubanhua" ></i></div>
                <div className='middle-line'></div>
                <div className='title flex-1'>每天九点，准时疯抢</div>
                <div className='middle-line'></div>
                <div className="flower"><i className="iconfont icon-wubanhua" ></i></div>
    </div>
        </div>;
    }
}

export default Title9Clock;
