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


	}
	topBar = {
		@observable title : '大湿',
		@observable backBtn : false,
		@observable rightText : '',
		@observable showFlag : true
	}
	constructor(){
		this.menu.init();
	}


}


export default new AppState() ;
