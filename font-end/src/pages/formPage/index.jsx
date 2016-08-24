import React from 'react';

import TopBar from '../../components/topBar';
import  Menu from '../../components/menu';


class FormPage extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'FormPage';
    }
    render() {
        return <div>
        	<TopBar title='表单' />
            <div className="app-body">ccc</div>
            <Menu menuIndex={1}/>
            
        </div>;
    }
}

export default FormPage;
