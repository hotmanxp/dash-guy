import React from 'react';
import IconMenu from '../components/iconMenu';
import TopBar from '../components/topBar';

//require('../styles/css');


class LayoutCmp extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return <div>
        <TopBar />
        {this.props.children || 'loading'}
        <IconMenu />
        </div>;
    }
}

export default LayoutCmp;
