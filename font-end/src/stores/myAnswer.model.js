import { observable } from 'mobx';
import { messageListData} from './mockData';

const answereQuestion = [
{
	name:'程家家',avater:'./images/small-pic.png',time:'5小时前',price:'120',keyword:'仰卧起坐',
	content:'如何通过仰卧起坐更好的实现六块腹肌呢？'
},
{
	name:'程家家',avater:'./images/small-pic.png',time:'5小时前',price:'120',keyword:'仰卧起坐',
	content:'如何通过仰卧起坐更好的实现六块腹肌呢？'
},
{
	name:'程家家',avater:'./images/small-pic.png',time:'5小时前',price:'120',keyword:'仰卧起坐',
	content:'如何通过仰卧起坐更好的实现六块腹肌呢？'
},
{
	name:'程家家',avater:'./images/small-pic.png',time:'5小时前',price:'120',keyword:'仰卧起坐',
	content:'如何通过仰卧起坐更好的实现六块腹肌呢？'
},
{
	name:'程家家',avater:'./images/small-pic.png',time:'5小时前',price:'120',keyword:'仰卧起坐',
	content:'如何通过仰卧起坐更好的实现六块腹肌呢？'
},];

class MyAnswerList {
	@observable waitingAnswerList = [];
	@observable answeredList = [];
	@observable rejectedList = [];
	
	
	

	getwaitingAnswerList(){
		this.waitingAnswerList = answereQuestion;
	}
	getansweredList(){
		this.answeredList = answereQuestion;
	}
	getrejectedList(){
		this.rejectedList = answereQuestion;
	}


   constructor(){
      this.getwaitingAnswerList();
      this.getansweredList();
      this.getrejectedList();

   }
}


export default MyAnswerList;