import React from 'react';
import Page from '../single.page';
import appState from '../../stores/app.state';

import { observer } from 'mobx-react';
import ListContent from './list.content';
import Darens from '../../stores/daRenList.model';

@observer
class DarenList extends Page {
    constructor(props) {
        super(props);
        this.displayName = 'Newhand';
        this.data = new Darens();
        
    }
    render() {
    	
        return <div className='app-body no-menu daren-list-page'>
        	<ListContent list={this.data.daRens} />
        </div>;
    }
    componentDidMount() {
    	appState.topBar.title = '达人列表';
    	appState.topBar.backBtn = true;
    }
}



export default DarenList;
