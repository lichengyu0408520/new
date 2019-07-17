    import React, { Component } from 'react'
    import {
        Form,
        Input,
    } from 'antd'
    const Item=Form.Item
    /**
     * 添加或更新的form组件
     */
    class AddUpdateForm extends Component {
        render() {
            const {getFieldDecorator}=this.props.form;
            debugger
            return (
                <Form>
                    <Item>
                    {
                        getFieldDecorator('categoryName',{
                            initialValue:'',
                            rules:[
                                {required:true,message:'分类名称必须输入'}
                            ]
                        })(
                            <Input type="text" placeholder="请输入分类名称"></Input>
                        )
                    }
                    </Item>
                </Form>
            )
        }
    }
    export default Form.create()(AddUpdateForm);
