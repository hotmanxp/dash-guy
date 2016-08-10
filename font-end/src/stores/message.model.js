import { observable } from 'mobx';
import { messageListData} from './mockData';


class MessageList {
	@observable messageList = [];
	
	
	

	getMessageList(){
		this.messageList = messageListData;
	}


   constructor(){
      this.getMessageList();
   }
}


export default MessageList;