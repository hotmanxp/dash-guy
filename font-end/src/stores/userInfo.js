import { observable, computed } from 'mobx';
import _ from 'lodash/core';


var shoppingCarListMoke =[
{imgSrc:'./images/cart_1.jpg',title:'[极速免税]AHC保湿玻尿酸精华AHC保湿玻尿酸精华',properties:'容量：30ml',price:27,marketPrice:56,quantity:2,uid:'0001',orderFlag:false},
{imgSrc:'./images/cart_1.jpg',title:'[极速免税]AHC保湿玻尿酸精华AHC保湿玻尿酸精华',properties:'容量：30ml',price:27,marketPrice:56,quantity:2,uid:'0002',orderFlag:false},
{imgSrc:'./images/cart_1.jpg',title:'[极速免税]AHC保湿玻尿酸精华AHC保湿玻尿酸精华',properties:'容量：30ml',price:27,marketPrice:56,quantity:5,uid:'0003',orderFlag:false}
];


class User{
	@observable testData = 'liang';
	@observable shoppingCarList = [];
	shoppingCarListData =[];
	getShopingCarList(){
		this.shoppingCarList=shoppingCarListMoke;
	}
	change(uid,type){
		//let index = this.shoppingCarList.findIndex((item) =>(item.uid == uid));
		let item = _.find(this.shoppingCarList,(item) => (item.uid == uid));
			if(type=='add'){item.quantity += 1}else{
				if(item.quantity > 1){
					item.quantity -= 1;
				}
				
			}


			
	}
	changeOrderFlage(uid){
		
		let item = _.find(this.shoppingCarList,(item) =>(item.uid == uid));

		item.orderFlag = !item.orderFlag;
		
	}
	orderAll(flag){

		let length = this.shoppingCarList.length;
		
		for(let i=0;i<length;i++){
			this.shoppingCarList[i].orderFlag = flag;
		}

	}

	@computed get orderLength(){
		return _.filter(this.shoppingCarList,(item) => (item.orderFlag)).length
	}

	@computed get orderTotleMoney(){
		let totle = 0;
		_.each(this.shoppingCarList,(item) => {if(item.orderFlag){totle += item.price * item.quantity}});
		return totle;
	}
}


export default new User();