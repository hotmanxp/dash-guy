import React, {Component} from 'react';
import Page from '../single.page';
import Serch from './serch.cmp';
import appState from '../../stores/app.state';
import Blank from './blank';
import Result from './result';

let questions = [
    {title:'如果通过仰卧起座更快实现六块腹肌？',
     answer:{name:'程建年',label:'五年教育 普拉提 蒋奖'}
},
{title:'如果通过仰卧起座更快实现六块腹肌？',
     answer:{name:'程建年',label:'五年教育 普拉提 蒋奖'}
},
{title:'如果通过仰卧起座更快实现六块腹肌？',
     answer:{name:'程建年',label:'五年教育 普拉提 蒋奖'}
},
{title:'如果通过仰卧起座更快实现六块腹肌？',
     answer:{name:'程建年',label:'五年教育 普拉提 蒋奖'}
},
{title:'如果通过仰卧起座更快实现六块腹肌？',
     answer:{name:'程建年',label:'五年教育 普拉提 蒋奖'}
},
{title:'如果通过仰卧起座更快实现六块腹肌？',
     answer:{name:'程建年',label:'五年教育 普拉提 蒋奖'}
}
];

let articles = [
    {title:'如果通过仰卧起座更快实现六块腹肌？',content:'仰卧七座是常见的健身运动，主要通过锻炼腹部肌肉来达到健身目的'},
    {title:'如果通过仰卧起座更快实现六块腹肌？',content:'仰卧七座是常见的健身运动，主要通过锻炼腹部肌肉来达到健身目的'},
    {title:'如果通过仰卧起座更快实现六块腹肌？',content:'仰卧七座是常见的健身运动，主要通过锻炼腹部肌肉来达到健身目的'},
    {title:'如果通过仰卧起座更快实现六块腹肌？',content:'仰卧七座是常见的健身运动，主要通过锻炼腹部肌肉来达到健身目的'},
    {title:'如果通过仰卧起座更快实现六块腹肌？',content:'仰卧七座是常见的健身运动，主要通过锻炼腹部肌肉来达到健身目的'}
];

let darens = [
    {avator:'./images/small-pic.png',name:'陈佳',label:'五年施教经验 普拉提 仰卧起坐',answerNum:7,guanzhuNum:20},
    {avator:'./images/small-pic.png',name:'陈佳',label:'五年施教经验 普拉提 仰卧起坐',answerNum:7,guanzhuNum:20},
    {avator:'./images/small-pic.png',name:'陈佳',label:'五年施教经验 普拉提 仰卧起坐',answerNum:7,guanzhuNum:20},
    {avator:'./images/small-pic.png',name:'陈佳',label:'五年施教经验 普拉提 仰卧起坐',answerNum:7,guanzhuNum:20}
]
class SerchPage extends Page {
    constructor(props) {
            super(props);
            this.state = {serchWord:'',blankResult:false,result:{questions:[],articles:[],darens:[]}};
        }
    render () {
        let content = !this.state.blankResult? (<Result questions={this.state.result.questions} articles={this.state.result.articles} darens={this.state.result.darens}/>):(<Blank actionHook={::this.blankAction} />);
        return (
            <div className='app-body no-menu no-header search-page'>
                <Serch handleSerch={::this.serch}/>
                
                {content}
            </div>
        )
    }
    componentDidMount() {
        appState.topBar.showFlag = false;
    }
    serch(keyword) {
        if(keyword == 'abc'){
             this.setState({result:{questions:questions,articles:articles,darens:darens},blankResult:false});
        }else{
             this.setState({blankResult:true});
        }
       
    }
    blankAction() {
        alert('错误了啊');
    }
}

export default SerchPage