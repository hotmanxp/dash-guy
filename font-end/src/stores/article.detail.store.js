import { observable } from 'mobx';

const aticleVokeData = {
	title:'如何通过仰卧起坐更有效实现六块腹肌？',
	avater:'./images/small-pic.png',
	author:'张嘉',
	publistTime:'30分钟前',
	content:'目前专业的笔记本评测网站NoteBookCheck首次公开了基于Kaby Lady架构的Intel移动处理器的性能，进行测试的是Intel i7-7500U处理器，为双核四线程处理器，睿频频率为3.0GHz，搭载的核心显卡为Intel HD Graphics 620。',
	picture:['./images/1.jpg'],
	commonts:[{
		avater:'',
		time:'',
		person:'',
		commont:''
	},{}]
}

class Article {
	@observable article = {};
	getArticle(id) {
		this.article = aticleVokeData;
	}
	constructor(id) {
		this.getArticle(id);
	}
}


export default Article;