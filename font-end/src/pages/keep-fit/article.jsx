import React, {Component} from 'react';

class Article extends Component {
    render() {
        let list = this.props.list || [];
        return (
            <div className='article-part'>
                <div className="title article-list-title">热门攻略</div>
                <div className="list-container">
                    {list.map((item,index) => (<Item data={item} key={index+'articleKey'} />))}
                </div>
            </div>
          
        );
    }
}

const Item = (props) => (<div className='item display-flex align-items-center'>
    <div className="flex-1 info">
        <div className="article-list-title">{props.data.title}</div>
        <div className="display-flex align-items-center info-part">
            <div className="avater"><img src={props.data.avator} /> </div>
            <div className="author flex-1">{props.data.author}</div>
            <div className="comments">
                <i className="iconfont icon-pinglun"></i>
                <span>{props.data.comments}</span>
            </div>
            <div className="zan">
                <i className="iconfont icon-fenxiang"></i>
                <span>{props.data.zan}</span>
            </div>
    </div>
    </div>
    
    <div className="thumb">
        <img src={props.data.thumb} className='pic' />
    </div>
</div>);
export default Article;