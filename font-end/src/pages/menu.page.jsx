import React from 'react';
import appState from '../stores/app.state';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'MenuPage';
    }
    componentWillMount() {
    	appState.menu.showFlag = true;
    	appState.topBar.showFlag = true;
    	appState.topBar.backBtn = false;
    	appState.topBar.rightText = '';
    }
}

export default Page;
