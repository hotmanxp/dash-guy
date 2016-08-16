import React from 'react';



class Recommond extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Recommond';
    }
    render() {
        return <div className="recommond-part">
        	<h1 className="title" >热门推荐</h1>
        	{this.props.questionList&&this.props.questionList.map((item,index) => (<QList question={item} key={index+'indexquestionlist'} />))}
        </div>;
    }
}

const QList =(props) => (<div className="list-item">
	<div className='text-container'>
	<div className='touming'>
	<div className="question">
		<span className="keyword">{'#'+props.question.keyword+'#'}</span>
		
		<span>{props.question.question}</span>

	</div>
	<div className="info">
		<span>{props.question.answer}</span>
		<span>|</span>
		<span className="label">{props.question.answerLabel}</span>
		<span>/</span>
		<span>{props.question.asker}</span>
	</div>
	</div>
	<div className="one-btn btn-base">一元揭开</div>
	</div>

	<div className="pic-part">
		<img  src={props.question.imgSrc} className="pic" />
		
	</div>
</div>)

export default Recommond;
