import {observable} from 'mobx';

class AppState {
	menu = {
		@observable currentIndex : 0,
		@observable showFlag : true
	}
	topBar = {
		@observable title : '云天商城',
		@observable backBtn : false,
		@observable rightText : '',
		@observable showFlag : true
	}

}


export default new AppState() ;
