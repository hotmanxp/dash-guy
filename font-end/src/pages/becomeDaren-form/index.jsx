import React, {Component} from 'react';
import Page from '../single.page.jsx'


const skillList =[
    '仰卧起坐','普拉提','器械','瑜伽','增肌','丰胸','美臀','仰卧AA','仰卧BB','仰卧尺寸'
];

class DaRenForm extends Page {
    
    constructor(props) {
        super(props);
        this.remainCheck = 3;
        this.state = {checkboxState:this.initCheckboxState()};
    }
    render() {
        return (
            <div className='app-body no-menu daren-form-page'>
                <form onSubmit={::this.handleSubmit} id='daren-form' >
                    <div className="form-group section">
                        <label htmlFor="name">姓名</label>
                        <input type="text" id='name' name='name' placeholder='输入姓名'/>
                    </div>
                    <div className="form-group section">
                        <label htmlFor="sex">性别</label>
                        <select name='sex' id='sex'>
                            <option value="女">女</option>
                            <option value="男">男</option>
                        </select>
                    </div>
                    <div className="form-group section">
                        <label htmlFor="tall">身高</label>
                        <input type="number" id='tall' name='tall' placeholder='输入您的身高（cm)'/>
                    </div>
                    <div className="form-group section">
                        <label htmlFor="weight">体重</label>
                        <input type="number" id='weight' name='weight' placeholder='输入您的体重（Kg)'/>
                    </div>
                    <div className='skill-form section'>
                        <p className="tip">擅长：<span>(最多选三个)</span></p>
                        <div className='skill-box cf'>
                            {skillList.map((item,index) => (<CheckBox changeHook={() => {this.handleCheckChange(index)}} isDisable={this.state.checkboxState[index].isDisabled} text={item} index={index} key={index+'skillKey'}/>))}
                        </div>
                    </div>
                    <div className="textarea">
                        <div className="title">一句话介绍自己</div>
                        <textarea name="introduce" id="" cols="15" rows="2" maxLength='20'></textarea>
                    </div>
                    <button type='submit' >提交</button>
                </form>
                
            </div>
        );
    }
    initCheckboxState() {
        let length = skillList.length;
        let checkboxState = [];
        for(let i = 0;i<length;i++){
            checkboxState.push({isChecked:false,isDisabled:false});
        }
        return checkboxState;
    }
    handleCheckChange(index) {
       this.state.checkboxState[index].isChecked = !this.state.checkboxState[index].isChecked;
       if(this.state.checkboxState[index].isChecked){
           this.remainCheck--;
           if(this.remainCheck == 0){
               this.state.checkboxState.map((item,index) => {if(!item.isChecked){item.isDisabled = true}});
               this.forceUpdate();
           }
       }else{
           this.remainCheck++;
           if(this.remainCheck == 1){
               this.state.checkboxState.map((item,index) => {item.isDisabled = false});
               this.forceUpdate();
           }
       }

        
        console.log(this.remainCheck);
    }
    handleSubmit(e) {
        e.preventDefault();
        let formData = new FormData(document.getElementById('daren-form'));
        let form2 = JSON.stringify(formData);
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
            }

    }
    componentDidMount() {
        console.log(this.remainCheck);
    }
    
}

const CheckBox = (props) => {
   
    return (<div className="daren-check">
        <input onChange={props.changeHook} name='skill' id={'inputId'+props.index} type='checkbox' hidden={true} value={props.text} disabled={props.isDisable}/>
        <label htmlFor={'inputId'+props.index} >{props.text}</label>
    </div>)
}

export default DaRenForm;