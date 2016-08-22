import { observable } from 'mobx';
import { newhandListData} from './mockData';

console.log(newhandListData);
class NewhandArticle {
	@observable articleList = [];
	
	
	

	getArticleList(){
		this.articleList = newhandListData;
	}


   constructor(){
      this.getArticleList();
   }
}


export default NewhandArticle;