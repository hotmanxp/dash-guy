import {observable} from 'mobx';
import { appMenu } from './app.static.data';


class AppState {
	menu = {
		@observable currentIndex : 0,
		@observable showFlag : true,
		@observable hasNew : [],
		init(){
			let menuLength = appMenu.length;
			for(let i =0 ;i<menuLength;i++){
				this.hasNew.push(0);
			};
		}


	};
	topBar = {
		@observable title : '大湿',
		@observable backBtn : false,
		@observable rightText : '',
		@observable showFlag : true
	};
		toast = {
		@observable showFlag: false,
		text: '已完成',
		triger(){
			this.showFlag = true;
			setTimeout(() =>{this.showFlag = false},1000)
		}
	};
	loading = {
		@observable showFlag: false,
		text: '数据正在加载中...'
	};
	dialog = {
		@observable showFlag: false,
		title: '对话标题',
		content: '测试对话框的内容',
	}

	constructor(){
		this.menu.init();
	}


}


export default new AppState() ;
