import React, {Component} from 'react';
import FindKeyword from '../../components/findKeyword';

class Result extends Component {
    constructor(props) {
        super(props);
}  
    render() {
        return (
            <div>
                {(this.props.questions)&&<QuestResult data={this.props.questions}/>}
                {(this.props.articles)&&<ArticleResult data={this.props.articles}/>}
                {(this.props.darens)&&<DarenResult data={this.props.darens}/>}
            </div>
        );
    }
}

const QuestResult = (props) => ((props.data.length>0)&&<div className="quest-list section">
    <div className="title">问题</div>
    {props.data.map((item,index) =>(<div className='list-item' key={index+'questKey'}>
        <div className="header">{<FindKeyword keyword='仰卧起座' strings={item.title} />}</div>
        <div className="answer">
            <span>答主：</span>
            <span className="name">{item.answer.name}</span>
            <span> | </span>
            <span className="label">{item.answer.label}</span>
        </div>
    </div>))}
    <div className="more">查看更多</div>
</div>);
const ArticleResult = (props) => ((props.data.length > 0)&&<div className="article-list section">
   <div className="title">文章</div>
   {props.data.map((item,index) => (<div className="list-item" key={index+'articleKey'}>
        <div className="header">{item.title}</div>
        <div className="brife">{item.content}</div>
   </div>))}
   <div className="more">查看更多</div>
</div>);
const DarenResult = (props) => ((props.data.length > 0)&&<div className="daren-list section">
    <div className="title">达人</div>
    {props.data.map((item,index) => ( <div className="list-item display-flex align-items-center" key={index+'darenKey'}>
        <div className="avator"><img src={item.avator} /></div>
        <div className="flex-1">
            <p className="name-part">
                <span className="name">{item.name}</span>
                <span> | </span>
                <span className="label">{item.label}</span>
            </p>
            <p className="info-part">
                <span className="answer-num">{item.answerNum}个回答</span>
                <span className="guanzhu-num">{item.guanzhuNum}个关注</span>
            </p>
        </div>
    </div>))}
    <div className="more">查看更多</div>
</div>);

export default Result;