import React, {Component} from 'react';
import { PageResult } from 'antd-mobile';

class Blank extends Component {
    render () {
        return (
            <div>
                <PageResult
                    imgUrl="https://os.alipayobjects.com/rmsportal/MKXqtwNOLFmYmrY.png"
                    title="内容为空"
                    brief="可各业务自定义文案"
                    buttonTxt="搜索其他文章"
                    buttonClick={() => {this.handleAction();}}
                    />
            </div>
        )
    }
    handleAction() {
        this.props.actionHook();
    }
}

export default Blank;