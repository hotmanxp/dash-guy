import React, {Component} from 'react';
import Page from '../single.page';
import Serch from './serch.cmp';
import appState from '../../stores/app.state';
import Blank from './blank';

class SerchPage extends Page {
    constructor(props) {
            super(props);
            this.state = {serchWord:'',blankResult:false};
        }
    render () {
        let content = !this.state.blankResult? (<div>{this.state.serchWord}</div>):(<Blank actionHook={::this.blankAction} />);
        return (
            <div className='app-body no-menu no-header'>
                <Serch handleSerch={::this.serch}/>
                
                {content}
            </div>
        )
    }
    componentDidMount() {
        appState.topBar.showFlag = false;
    }
    serch(keyword) {
        if(keyword == 'abc'){
             this.setState({serchWord:keyword,blankResult:false});
        }else{
             this.setState({blankResult:true});
        }
       
    }
    blankAction() {
        alert('错误了啊');
    }
}

export default SerchPage