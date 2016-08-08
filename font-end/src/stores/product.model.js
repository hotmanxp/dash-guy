import { observable } from 'mobx';

var vorkProductData = [{imgSrc:'./images/product_1.jpg',title:'女妆aaxi晒化妆 水500毫升',price:58,marketPrice:79,sort:1},
                    {imgSrc:'./images/product_1.jpg',title:'女妆保湿防长裤子 水300毫升',price:58,marketPrice:79,sort:1},
                    {imgSrc:'./images/product_1.jpg',title:'丰田汽车用品 水500毫升',price:58,marketPrice:79,sort:2},
                    {imgSrc:'./images/product_1.jpg',title:'宝马真皮坐一啊的 水500毫升',price:58,marketPrice:79,sort:2},
                    {imgSrc:'./images/product_1.jpg',title:'漂亮高跟鞋 水500毫升',price:58,marketPrice:79,sort:3},
                    {imgSrc:'./images/product_1.jpg',title:'红色包包女包 水500毫升',price:58,marketPrice:79,sort:3},
                    {imgSrc:'./images/product_1.jpg',title:'美妆晒化妆 水500毫升',price:58,marketPrice:79,sort:4},
                    {imgSrc:'./images/product_1.jpg',title:'美妆用品 水300毫升',price:58,marketPrice:79,sort:4},
                    {imgSrc:'./images/product_1.jpg',title:'男士背心 水500毫升',price:58,marketPrice:79,sort:5},
                    {imgSrc:'./images/product_1.jpg',title:'男士裤子 水300毫升',price:58,marketPrice:79,sort:5}
]

class Products {
	productData = [];
	@observable productList = [];
	@observable serchKey = '';
	@observable sortKey = 'all';
	getAllProducts(){
		this.productList = this.productData = vorkProductData;
		
	}
	getProductBySort(sort){
		this.productList = this.productData.filter((item) => (sort == 'all' || item.sort == sort))
	}
	getProductBySerchKey(keyword){
		this.productList = this.productData.filter((item) => (keyword == '' || (item.title.indexOf(keyword)>-1)))
	}
}

export default new Products();