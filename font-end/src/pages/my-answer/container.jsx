import React from 'react';
import Question from '../../components/question';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Content';
    }
    render() {
    	let list = this.props.data || [];
    	let btn = this.props.typeName == 'waitingAnswer' ? (<div className='type-btn'><div className='btn'>待回答</div></div>) : null ;
        return <div className='section'>
        	{list.map((item,index) => (<div key={index+'questionKey'}><Question data={item}  />{btn}</div>
        		))}
        </div>;
    }
}

export default Content;
