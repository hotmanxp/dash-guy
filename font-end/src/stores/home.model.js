import { observable } from 'mobx';


var BannerList = [{imgSrc:'./images/index-banner1.jpg',link:''},
{imgSrc:'./images/index-banner1.jpg',link:''},
{imgSrc:'./images/index-banner1.jpg',link:''}]

var zhuantiData = [
  {bigBox:{imgSrc:'./images/big_product01.png'},
   smallBox:[{imgSrc:'./images/product-s-01.png',title:'川岛屋陶瓷框啊都发生的',price:54,marketPrice:73},
   {imgSrc:'./images/product-s-01.png',title:'川岛屋陶瓷框啊都发生的',price:55,marketPrice:73},
   {imgSrc:'./images/product-s-01.png',title:'川岛屋陶瓷框啊都发生的',price:34,marketPrice:73},
   {imgSrc:'./images/product-s-01.png',title:'川岛屋陶瓷框啊都发生的',price:43,marketPrice:73},
   {imgSrc:'./images/product-s-01.png',title:'川岛屋陶瓷框啊都发生的',price:43,marketPrice:73},
   {imgSrc:'./images/product-s-01.png',title:'川岛屋陶瓷框啊都发生的',price:44,marketPrice:73},
   {imgSrc:'./images/product-s-01.png',title:'川岛屋陶瓷框啊都发生的',price:23,marketPrice:73},
   {imgSrc:'./images/product-s-01.png',title:'川岛屋陶瓷框啊都发生的',price:44,marketPrice:73},
   {imgSrc:'./images/product-s-01.png',title:'川岛屋陶瓷框啊都发生的',price:32,marketPrice:73}],
   topicId:'topic0001'
},
{bigBox:{imgSrc:'./images/big_product01.png'},
   smallBox:[{imgSrc:'./images/product-s-01.png',title:'川岛屋陶瓷框啊都发生的',price:54,marketPrice:73},
   {imgSrc:'./images/product-s-01.png',title:'川岛屋陶瓷框啊都发生的',price:55,marketPrice:73},
   {imgSrc:'./images/product-s-01.png',title:'川岛屋陶瓷框啊都发生的',price:34,marketPrice:73},
   {imgSrc:'./images/product-s-01.png',title:'川岛屋陶瓷框啊都发生的',price:43,marketPrice:73},
   {imgSrc:'./images/product-s-01.png',title:'川岛屋陶瓷框啊都发生的',price:43,marketPrice:73},
   {imgSrc:'./images/product-s-01.png',title:'川岛屋陶瓷框啊都发生的',price:44,marketPrice:73},
   {imgSrc:'./images/product-s-01.png',title:'川岛屋陶瓷框啊都发生的',price:23,marketPrice:73},
   {imgSrc:'./images/product-s-01.png',title:'川岛屋陶瓷框啊都发生的',price:44,marketPrice:73},
   {imgSrc:'./images/product-s-01.png',title:'川岛屋陶瓷框啊都发生的',price:32,marketPrice:73}],
   topicId:'topic0001',
}

]
class HomeData {
	@observable indexBannerList = [];
	@observable zhuantiList = [];
	zhuantiListData = [];

	getIndexBannerData(){
		this.indexBannerList = BannerList;
	}
	getzhuantiData(){
		this.zhuantiList = zhuantiData;
	}
}


export default new HomeData();