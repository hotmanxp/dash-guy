import React, {Component} from 'react';

class ListContent extends Component {
    render() {
        let list = this.props.list || [];
        return (
            <div className='section'>
                {list.map((item,index) => (<Item data={item} key={index+'darenKey'}/>))}
            </div>
        );
    }
}

const  Item = (props) => (<div className="item display-flex">
    <div className="avater">
        <img className='pic' src={props.data.avater} />
    </div>
    <div className="flex-1 info">
        <p className="article-list-title">
            <span className="name">{props.data.name}</span>
            <span> | </span>
            
            <span>{props.data.lable} </span>
            <span> 机械</span>
            <span>/ </span>
            <span>{props.data.machine}</span>
        </p>
        <p className="skill">
            <span>擅长：</span>
            {props.data.skill&&props.data.skill.map((item,index) => (<span className="lable" key={index+'skillkey'}>{item}</span>))}
            
        </p>
        <p className="brive">{props.data.brive}</p>
    </div>
</div>);
export default ListContent;