import { observable } from 'mobx';
import { daRenList} from './mockData';

class Darens {
	@observable daRens = [];
	
	
	

	getDaRens(){
		this.daRens = daRenList;
	}


   constructor(){
      this.getDaRens();
   }
}


export default Darens;