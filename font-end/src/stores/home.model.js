import { observable } from 'mobx';
import { indexBannerList, indexQuestionList} from './mockData';


class HomeData {
	@observable indexBannerList = [];
	@observable indexQuestionList = [];
	

	getIndexBannerData(){
		this.indexBannerList = indexBannerList;
	}
	getQuestionList(){
		this.indexQuestionList = indexQuestionList;
	}
   constructor(){
      this.getIndexBannerData();
      this.getQuestionList();
   }
}


export default HomeData;