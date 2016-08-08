import React from 'react';
import { Link } from 'react-router';
import {observer} from 'mobx-react';
import appState from '../../stores/app.state';
import _ from 'lodash/core';
import _times from 'lodash/times';



@observer
class Me extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Me';
    }
    render() {
        return <div className='app-body no-header'>
        	<div className="personal-center">
		<div className="head-portrait"></div>
		<div className="name">马小哈</div>
		<div className="member-grade" onClick={this.testEvent}>铜牌会员</div>
		<ul>
			<li>
				<a href="">
					<p className="money">0.00</p>
					<p className="types-of">总收入(元)</p>
				</a>
			</li>
			<li>
				<a href="">
					<p className="money">100.00</p>
					<p className="types-of">贡献值(点)</p>
				</a>
			</li>
			<li>
				<a href="">
					<p className="money">100.00</p>
					<p className="types-of">月收入</p>
				</a>
			</li>
		
		</ul>
		</div>
		<div className="withdraw">
	<dl>
		<dd className="iconfont icon-jiage"></dd>
		<dt><Link to="/slick">去提现，还有0.00元未提现<i className="iconfont icon-right"></i></Link></dt>
	</dl>
</div>
<div className="personal-menu">
	<ul>
		<li><a href="order_me.html"><i className="iconfont icon-wodedingdan"></i><span>我的订单</span><i className="iconfont icon-right"></i></a></li>
		<li><a href="order_list.html"><i className="iconfont icon-dingdan"></i><span>销售订单</span><i className="iconfont icon-right"></i></a></li>
	</ul>
</div>
<div className="personal-menu">
	<ul>
		<li><a href="#" id="confirmBtn"><i className="iconfont icon-dianpu"></i><span>我的店铺</span><i className="iconfont icon-right"></i></a></li>
	</ul>
</div>
<div className="personal-menu">
	<ul>
		<li><a href="#"><i className="iconfont icon-tuiguang"></i><span>我的推广</span><i className="iconfont icon-right"></i></a></li>
		<li><a href="withdrawals-record.html"><i className="iconfont icon-jilu-copy"></i><span>提现记录</span><i className="iconfont icon-right"></i></a></li>
		<li><a href="allowance-details.html"><i className="iconfont icon-shouruxiangqing"></i><span>津贴明细</span><i className="iconfont icon-right"></i></a></li>
	</ul>
</div>
		</div>;
    }
    componentDidMount() {
          appState.topBar.showFlag = false ;
    }
    testEvent(){
    	let a = ['a','b','c','d'];
    	let e = [1,2,3,4,5,6];
    	let c = [{name:'liang',age:33},{name:'min',age:28}];
    	let b = _.map(a,(item)=>(item+';'));
    	_.find(c,(item) => (item.age == 28)).name = "change";
    	//_times(10,(i)=>{console.log('lodashtime:'+i)});
    	_.map(c,(item) => {console.log(item.name)});
    }
}


export default Me;
