import React from 'react';



class DaRenList extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'DaRenList';
        this.data =  this.props.data;
        
    }
    render() {
        return <div className="list-container">
        	<img src={this.data.bigImgSrc} className="bigImg" />
        	<div className="tips">
        		<div>{this.data.title}</div>
        		<div>{'#'+this.data.keyword+'#'}</div>
        	</div>
        	<div className='smallBox-container display-flex' >
        		{this.data.smallBoxs&&this.data.smallBoxs.map((item,index) => (<SmallBox data={item} key={index+'smallBoxsKey'}/>))}
        	</div>

        </div>;
    }
}

const SmallBox = (props) => (<div className="smallBox flex-1">
	<img className="smallImg" src={props.data.imgSrc} />
	<p className='name'>{props.data.name}</p>
	<p className='detail'>{props.data.detail}</p>
</div>)

export default DaRenList;
