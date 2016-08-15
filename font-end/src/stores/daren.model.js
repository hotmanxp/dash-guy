import { observable } from 'mobx';
import { darenBannerList, darenListData} from './mockData';


class DaRenData {
	@observable BannerList = [];
	@observable darenListData =[];
	
	

	getBannerData(){
		this.BannerList = darenBannerList;
	}

	getDarenListData(){
		this.darenListData = darenListData;
	}
	
   constructor(){
      this.getBannerData();
      this.getDarenListData();
     
   }
}


export default DaRenData;