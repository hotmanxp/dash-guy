import React, {Component} from 'react';

class FindKeyword extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.strings);
        this.strings= this.props.strings || '';
        this.keyword = this.props.keyword || '';
        this.replaceSring = '';
}  
    render() {
        return (
            <span dangerouslySetInnerHTML={{__html:this.replaceSring}}>
                
            </span>
        );
    }
    
    componentWillMount() {
        let Reg = new RegExp('('+this.keyword+')','g');
        this.replaceSring = this.strings.replace(Reg,'<span class="keywords" >$1</span>')
       
    }
    
}

export default FindKeyword;