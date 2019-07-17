import React, { Component } from 'react'
import { 
  Card,
  Button,
  Icon,
  Table,
  message,
  Modal,
} from 'antd'
import LinkButton from '../../components/linkbutton'
import {reqCategorys,reqAddCategorys,reqUpdateCategorys} from '../../api'
import AddUpdateForm  from './add-update-form'
/**
 * 分类管理
 */
export default class Category extends Component {
  
  state={
    categorys:[],//所有分类的数组
    loading:false,
    showStatus:0,//状态为0 隐藏  状S为1  添加列表  状态为2   修改列表
  }

/**
 * 初始化tabel中的 所有列信息的数组
 */
  initColumns = () =>{
    this.columns = [
      {
        title: '分类的名称',
        dataIndex: 'name', 
      },
      {
        title: '操作',
        width:300,
        render:() =><LinkButton>修改分类</LinkButton>
      },
    ];
    
  }
  /**
   * 异步获取分类列表信息
   */
  getColoumns = async() =>{
    // 显示loading
    this.setState({loading:true})
    let result=await reqCategorys();
    //隐藏loading
    this.setState({loading:false})
    if(result.status===0){//成功了
       //取出更新列表
      let categorys=result.data;
       //更新状态
      this.setState({
        categorys
      })
      message.success('获取分类列表成功了');
    }
    else{
      message.error('获取分类列表失败了');
    }
  }
  /**
   * 点击确定的回调  会添加或者修改列表
   */
  handleOk = () =>{

  }
  handleCancel = () =>{
    this.setState({
      showStatus:0
    })
  }
  componentWillMount(){
    this.initColumns();
  }
  componentDidMount(){
    this.getColoumns();
  }
  render() {
    //取出当前状态
    let {categorys,loading,showStatus} = this.state;
    //card右上角的结构
    const extra=(
      <Button type="primary" onClick={()=>{this.setState({showStatus:1})}}>
        <Icon type="plus"/>
            添加
      </Button>
    )
    return (
      <Card extra={extra}>
         <Table
          columns={this.columns}
          dataSource={categorys}
          bordered={true}
          loading={loading}
          rowKey="_id"
          pagination={{ defaultPageSize:5, showQuickJumper:true}}
        />,
        <Modal
          title={showStatus===1?'添加分类':'修改分类'}
          visible={this.state.showStatus!==0}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <AddUpdateForm setForm={form => this.form = form}/>
        </Modal>
      </Card>
    )
  }
}
