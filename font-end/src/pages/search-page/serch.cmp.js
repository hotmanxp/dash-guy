import React, {Component} from 'react';
import { SearchBar } from 'antd-mobile';
import { createForm } from 'rc-form';

class Serch extends Component {
    constructor(props) {
        super(props);
}  
    render() {
        return (
            <div>
                <SearchBar
                    value=""
                    placeholder="搜索内容"
                    onSubmit={(value) => { this.handleSubmit(value) }}
                    onClear={() => { this.handleClear(); }}
                    onCancel={() => { this.handleCancel(); }}
                    showCancelButton
                />
            </div>
        );
    }
    handleSubmit(value) {
        this.props.handleSerch(value);
    }
    handleClear() {

    }
    handleCancel() {

    }
}

export default createForm()(Serch);