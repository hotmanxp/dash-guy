import { TextareaItem, List } from 'antd-mobile';
import { createForm } from 'rc-form';


import React, {Component} from 'react';

class TextareaItemExample1 extends Component {
    render() {
        const { getFieldProps } = this.props.form;
        return (
             <List>
       
        <List.Body>
          <TextareaItem
            {...getFieldProps('note7', {
              
              valuePropName: 'value',
            })}
            labelNumber={4}
            name="introduce01"
            rows={2}
            placeholder="一句话说明自己（最多20字）"
            clear
            count={20}
           
          />
        </List.Body>
      </List>
        );
    }
}
class TextareaItemExample2 extends Component {
    render() {
        const { getFieldProps } = this.props.form;
        return (
             <List>
       
        <List.Body>
          <TextareaItem
            {...getFieldProps('note7', {
              
              valuePropName: 'value',
            })}
            labelNumber={4}
            name="introduced"
            rows={5}
            placeholder="自我介绍（最多100字）"
            clear
            count={100}
           
          />
        </List.Body>
      </List>
        );
    }
}
export const Text1 = createForm()(TextareaItemExample1);
export const Text2 = createForm()(TextareaItemExample2);
