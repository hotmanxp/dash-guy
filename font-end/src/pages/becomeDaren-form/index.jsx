import React, {Component} from 'react';
import Page from '../single.page.jsx'

const skillList =[
    {text:'仰卧起坐',id:'skill001',value:'仰卧起座'},
    {text:'普拉提',id:'skill002',value:'普拉提'},
    {text:'器械',id:'skill003',value:'器械'},
    {text:'瑜伽',id:'skill004',value:'瑜伽'},
    {text:'增肌',id:'skill005',value:'增肌'},
    {text:'丰胸',id:'skill006',value:'丰胸'},
    {text:'美臀',id:'skill007',value:'美臀'},
    {text:'仰卧AA',id:'skill008',value:'仰卧AA'},
    {text:'仰卧BB',id:'skill009',value:'仰卧BB'},
    {text:'仰卧尺寸',id:'skill010',value:'仰卧尺寸'},
];
class DaRenForm extends Page {
    
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
                            {skillList.map((item,index) => (<CheckBox data={item} key={index+'skillKey'}/>))}
                        </div>
                    </div>
                    <button type='submit' >提交</button>
                </form>
                
            </div>
        );
    }
    handleSubmit(e) {
        e.preventDefault();
        let formData = new FormData(document.getElementById('daren-form'));
        let form2 = JSON.stringify(formData);
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
            }

    }
}

const CheckBox = (props) => {
    let { id, text, value } = props.data
    return (<div className="daren-check">
        <input name='skill' id={id} type='checkbox' hidden={true} value={value}/>
        <label htmlFor={id} >{text}</label>
    </div>)
}

export default DaRenForm;