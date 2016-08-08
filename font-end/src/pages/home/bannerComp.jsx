import React from 'react';
import Slider from 'react-slick';

//import { Carousel } from 'antd';

var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true
}

class IndexBanner extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
        	<Slider className='index-banner-container' {...settings}>
            {this.props.bannerList.map((item,index) => (<div key={index+'indexbannerkey'}><img src={item.imgSrc} /></div>))}
        	</Slider>
        	)
    }
}

export default IndexBanner;
