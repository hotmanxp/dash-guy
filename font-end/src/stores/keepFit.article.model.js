import { observable } from 'mobx';
import { keepFitArticleList} from './mockData';

class Articles {
	@observable articleList = [];
	
	
	

	getArticleList(){
		this.articleList = keepFitArticleList;
	}


   constructor(){
      this.getArticleList();
   }
}


export default Articles;