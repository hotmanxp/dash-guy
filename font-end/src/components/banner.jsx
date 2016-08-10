import React from 'react';
import Slider from 'react-slick';


var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true
}

class Banner extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
        	<Slider className='banner-container' {...settings}>
            {this.props.data&&this.props.data.map((item,index) => (<div key={index+'indexbannerkey'}><img src={item.imgSrc} /></div>))}
        	</Slider>
        	)
    }
}

export default Banner;
