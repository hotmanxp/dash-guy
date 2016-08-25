import React, {Component} from 'react';
import Page from '../single.page';
import { RefreshControl, Icon } from 'antd-mobile';

class Refresh extends Page {
    constructor(props) {
        super(props);
        this.state = {list:[1,2,3,4]};
    }
    render() {
        return (
            <div className='app-body no-menu' >
                <RefreshControl
                    loadingFunction={::this.loadingFunction}
                    distanceToRefresh={60}
                    resistance={1}
                    icon={<Icon name='loading' primary />}
                    style={{
                    position: 'relative',
                    paddingTop: 0,
                    textAlign: 'center',
                    }}
                    hammerOptions={{
                    touchAction: 'auto',
                    recognizers: {
                        pan: {
                        threshold: 10,
                        },
                    },
                    }}
                >
                    <h3>下拉刷新</h3>
                    <div style={{ minHeight: 300 }}>
                    {this.state.list.map((item,index) => (<div key={index+'items'}>{item}</div>))}
                    </div>
      </RefreshControl>
            </div>
        );
    }
loadingFunction() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {for(let i =10;i<100;i++){this.state.list.push(i)};this.forceUpdate();resolve('done')},2000);
    })
}
}

export default Refresh;