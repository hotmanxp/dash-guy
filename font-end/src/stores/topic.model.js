import { observable } from 'mobx';

var topicDataMoke = {
	id:'topic0001',
	titleMain:'全球人气美妆',
	bannerPicImg:['./images/index-banner1.jpg','./images/index-banner1.jpg','./images/index-banner1.jpg'],
	title:'【韩系彩妆铁皮记】专场',
	content:'打造清爽持久妆容，小脸自带美颜神器',
	products:[
	{imgSrc:'./images/product_2.jpg',
	 price:71,
	 marketPrice:98,
	 title:'薏仁美白保湿防晒化妆水500毫升'
},
	{imgSrc:'./images/product_2.jpg',
	 price:71,
	 marketPrice:98,
	 title:'薏仁美白保湿防晒化妆水500毫升'
},
{imgSrc:'./images/product_2.jpg',
	 price:71,
	 marketPrice:98,
	 title:'薏仁美白保湿防晒化妆水500毫升'
},
{imgSrc:'./images/product_2.jpg',
	 price:71,
	 marketPrice:98,
	 title:'薏仁美白保湿防晒化妆水500毫升'
}
	
	]

}
export default class Topic {
	constructor(topicID){
		this.topicID = topicID || '';
		this.getDataFromHttp(this.topicID);
	}
	id = '';
	@observable Data = {};
	getDataFromHttp(id){
		console.log(id);
		this.Data = topicDataMoke;
	}
}