import { Card,Table,Switch,Input,Button ,DatePicker} from 'antd';
import React, { useState,useEffect } from 'react';
import {getSetting,updateSetting} from '@/services/setting.js'


export default class Index extends React.Component {
  state={
    data:[]
  }
  async componentDidMount() {
    const result = await getSetting();
    if(result.error_code=='0'){
      let arr = [];
      arr.push(result.data[0]);
      this.setState({
        data:arr
      });
    }
  }
  async onSwitchChange(render,type,v){
    console.log(v)
    let res = await updateSetting({
      can_win:!v?0:1
    });
    if(res.error_code=='0'){
      let data=this.state.data;
      data.can_win=!v?0:1;
      this.setState({
        data:data
      })
    }
  }
  showInput(record,valueName){
    // console.log(record,e)
    let data = this.state.data;
    data.map((v,k)=>{
      if(v.id==record.id){
        data[k][valueName+'Show']=true;
      }
    })
    this.setState({data:data})
  }

  async handleDatePickerrConfirm(record,valueName,e){

    let inputValue=  e._d.getFullYear()+'-'+(e._d.getMonth()+1) +'-'+(e._d.getDate()) ;
    console.log(inputValue)
    if(inputValue ){
      //发送
      let params={};
      params[valueName] = inputValue;
      let res = await updateSetting(params);
      console.log(res);
    }
    //更新
    let data = this.state.data;
    data.map((v,k)=>{
      if(v.id==record.id){
        data[k][valueName+'Show']=false;
        data[k][valueName]=inputValue;
      }
    })
    this.setState({data:data})
    
  }
  async handleInputConfirm(record,valueName,e){
    console.log(record, e)
    
    let inputValue= e.target.value;
    if(inputValue && inputValue >= 0){
      //发送
      let params={};
      params[valueName] = inputValue;
      let res = await updateSetting(params);
      console.log(res);
    }
    //更新
    let data = this.state.data;
    data.map((v,k)=>{
      if(v.id==record.id){
        data[k][valueName+'Show']=false;
        data[k][valueName]=inputValue;
      }
    })
    this.setState({data:data})
    
  }
  render(){
    const dateFormat='YYYY-MM-DD'
    const columns5 =[
      // {
      //   title: '是否开启抽奖',
      //   dataIndex: 'can_win',
      //   key:'can_win',
      //   width: 150,
      //   render: (can_win, record) => (
      //     <Switch defaultChecked={can_win=='1'?true:false}  onChange={this.onSwitchChange.bind(this,record,'can_win')} >
      //     </Switch>
      //   ),
      // },
      {
        title: '活动开始时间',
        dataIndex: 'start_time',
        width: 150,//
        render:(total,record)=>(
          <>
            {
              record['start_timeShow']?
              <DatePicker 
              onChange={this.handleDatePickerrConfirm.bind(this,record,'start_time')}
               format={dateFormat}
               />
              :<><Button type="dashed" size="small" onClick={this.showInput.bind(this,record,'start_time')}>{total?total:0}</Button></>
            }
          </>
        )
      },
      
    ];
    const columns4 = [
      {
        title: '飞机增加积分',
        dataIndex: 'integral_1',
        width: 150,
        render:(total,record)=>(
          <>
            {
              record['integral_1Show']?<Input type="number" defaultValue={total} 
              onPressEnter={this.handleInputConfirm.bind(this,record,'integral_1')}
              />:<><Button type="dashed" size="small" onClick={this.showInput.bind(this,record,'integral_1')}>{total?total:0}</Button></>
            }
          </>
        )
      },
      {
        title: '无人机增加积分',
        dataIndex: 'integral_2',
        width: 150,
        render:(total,record)=>(
          <>
            {
              record['integral_2Show']?<Input type="number" defaultValue={total} 
              onPressEnter={this.handleInputConfirm.bind(this,record,'integral_2')}
              />:<><Button type="dashed" size="small" onClick={this.showInput.bind(this,record,'integral_2')}>{total?total:0}</Button></>
            }
          </>
        )
      },
      {
        title: '摩托车增加积分',
        dataIndex: 'integral_3',
        width: 150,
        render:(total,record)=>(
          <>
            {
              record['integral_3Show']?<Input type="number" defaultValue={total} 
              onPressEnter={this.handleInputConfirm.bind(this,record,'integral_3')}
              />:<><Button type="dashed" size="small" onClick={this.showInput.bind(this,record,'integral_3')}>{total?total:0}</Button></>
            }
          </>
        )
      },
      {
        title: '自行车增加积分',
        dataIndex: 'integral_4',
        width: 150,
        render:(total,record)=>(
          <>
            {
              record['integral_4Show']?<Input type="number" defaultValue={total} 
              onPressEnter={this.handleInputConfirm.bind(this,record,'integral_4')}
              />:<><Button type="dashed" size="small" onClick={this.showInput.bind(this,record,'integral_4')}>{total?total:0}</Button></>
            }
          </>
        )
      },
      {
        title: '河船增加积分',
        dataIndex: 'integral_5',
        width: 150,
        render:(total,record)=>(
          <>
            {
              record['integral_5Show']?<Input type="number" defaultValue={total} 
              onPressEnter={this.handleInputConfirm.bind(this,record,'integral_5')}
              />:<><Button type="dashed" size="small" onClick={this.showInput.bind(this,record,'integral_5')}>{total?total:0}</Button></>
            }
          </>
        )
      },
      {
        title: 'F1赛车增加积分',
        dataIndex: 'integral_6',
        width: 150,
        render:(total,record)=>(
          <>
            {
              record['integral_6Show']?<Input type="number" defaultValue={total} 
              onPressEnter={this.handleInputConfirm.bind(this,record,'integral_6')}
              />:<><Button type="dashed" size="small" onClick={this.showInput.bind(this,record,'integral_6')}>{total?total:0}</Button></>
            }
          </>
        )
      },
    ];
    const columns2 = [
      {
        title: '飞机中奖率',
        dataIndex: 'winrate_1',
        width: 150,
        render:(total,record)=>(
          <>
            {
              record['winrate_1Show']?<Input type="number" defaultValue={total} 
              onPressEnter={this.handleInputConfirm.bind(this,record,'winrate_1')}
              />:<><Button type="dashed" size="small" onClick={this.showInput.bind(this,record,'winrate_1')}>{total?total:0}</Button></>
            }
          </>
        )
      },
      {
        title: '无人机中奖率',
        dataIndex: 'winrate_2',
        width: 150,
        render:(total,record)=>(
          <>
            {
              record['winrate_2Show']?<Input type="number" defaultValue={total} 
              onPressEnter={this.handleInputConfirm.bind(this,record,'winrate_2')}
              />:<><Button type="dashed" size="small" onClick={this.showInput.bind(this,record,'winrate_2')}>{total?total:0}</Button></>
            }
          </>
        )
      },
      {
        title: '摩托车中奖率',
        dataIndex: 'winrate_3',
        width: 150,
        render:(total,record)=>(
          <>
            {
              record['winrate_3Show']?<Input type="number" defaultValue={total} 
              onPressEnter={this.handleInputConfirm.bind(this,record,'winrate_3')}
              />:<><Button type="dashed" size="small" onClick={this.showInput.bind(this,record,'winrate_3')}>{total?total:0}</Button></>
            }
          </>
        )
      },
      {
        title: '自行车中奖率',
        dataIndex: 'winrate_4',
        width: 150,
        render:(total,record)=>(
          <>
            {
              record['winrate_4Show']?<Input type="number" defaultValue={total} 
              onPressEnter={this.handleInputConfirm.bind(this,record,'winrate_4')}
              />:<><Button type="dashed" size="small" onClick={this.showInput.bind(this,record,'winrate_4')}>{total?total:0}</Button></>
            }
          </>
        )
      },
      {
        title: '河船中奖率',
        dataIndex: 'winrate_5',
        width: 150,
        render:(total,record)=>(
          <>
            {
              record['winrate_5Show']?<Input type="number" defaultValue={total} 
              onPressEnter={this.handleInputConfirm.bind(this,record,'winrate_5')}
              />:<><Button type="dashed" size="small" onClick={this.showInput.bind(this,record,'winrate_5')}>{total?total:0}</Button></>
            }
          </>
        )
      },
      {
        title: 'F1赛车中奖率',
        dataIndex: 'winrate_6',
        width: 150,
        render:(total,record)=>(
          <>
            {
              record['winrate_6Show']?<Input type="number" defaultValue={total} 
              onPressEnter={this.handleInputConfirm.bind(this,record,'winrate_6')}
              />:<><Button type="dashed" size="small" onClick={this.showInput.bind(this,record,'winrate_6')}>{total?total:0}</Button></>
            }
          </>
        )
      },
    ];
    const columns = [
      {
        title: '一等奖每日上限',
        dataIndex: 'limit_1',
        width: 150,
        render:(total,record)=>(
          <>
            {
              record['limit_1Show']?<Input type="number" defaultValue={total} 
              onPressEnter={this.handleInputConfirm.bind(this,record,'limit_1')}
              />:<><Button type="dashed" size="small" onClick={this.showInput.bind(this,record,'limit_1')}>{total?total:0}</Button></>
            }
          </>
        )
      },
      {
        title: '二等奖每日上限',
        dataIndex: 'limit_2',
        width: 150,
        render:(total,record)=>(
          <>
            {
              record['limit_2Show']?<Input type="number" defaultValue={total} 
              onPressEnter={this.handleInputConfirm.bind(this,record,'limit_2')}
              />:<><Button type="dashed" size="small" onClick={this.showInput.bind(this,record,'limit_2')}>{total?total:0}</Button></>
            }
          </>
        )
      },
      {
        title: '三等奖每日上限',
        dataIndex: 'limit_3',
        width: 150,
        render:(total,record)=>(
          <>
            {
              record['limit_3Show']?<Input type="number" defaultValue={total} 
              onPressEnter={this.handleInputConfirm.bind(this,record,'limit_3')}
              />:<><Button type="dashed" size="small" onClick={this.showInput.bind(this,record,'limit_3')}>{total?total:0}</Button></>
            }
          </>
        )
      },
      {
        title: '四等奖每日上限',
        dataIndex: 'limit_4',
        width: 150,
        render:(total,record)=>(
          <>
            {
              record['limit_4Show']?<Input type="number" defaultValue={total} 
              onPressEnter={this.handleInputConfirm.bind(this,record,'limit_4')}
              />:<><Button type="dashed" size="small" onClick={this.showInput.bind(this,record,'limit_4')}>{total?total:0}</Button></>
            }
          </>
        )
      },
      {
        title: '五等奖每日上限',
        dataIndex: 'limit_5',
        width: 150,
        render:(total,record)=>(
          <>
            {
              record['limit_5Show']?<Input type="number" defaultValue={total} 
              onPressEnter={this.handleInputConfirm.bind(this,record,'limit_5')}
              />:<><Button type="dashed" size="small" onClick={this.showInput.bind(this,record,'limit_5')}>{total?total:0}</Button></>
            }
          </>
        )
      },
      {
        title: '六等奖每日上限',
        dataIndex: 'limit_6',
        width: 150,
        render:(total,record)=>(
          <>
            {
              record['limit_6Show']?<Input type="number" defaultValue={total} 
              onPressEnter={this.handleInputConfirm.bind(this,record,'limit_6')}
              />:<><Button type="dashed" size="small" onClick={this.showInput.bind(this,record,'limit_6')}>{total?total:0}</Button></>
            }
          </>
        )
      },
  
    ];
    const columns3 = [
      {
        title: '是否开启抽奖',
        dataIndex: 'can_win',
        key:'can_win',
        width: 150,
        render: (can_win, record) => (
          <Switch defaultChecked={can_win=='1'?true:false}  onChange={this.onSwitchChange.bind(this,record,'can_win')} >
          </Switch>
        ),
      },
      
      {
        title: '一等奖总数',
        dataIndex: 'total_1',
        key:'total_1',
        width: 150,
        render:(total,record)=>(
          <>
            {
              record['total_1Show']?<Input type="number" defaultValue={total} 
              onPressEnter={this.handleInputConfirm.bind(this,record,'total_1')}
              />:<><Button type="dashed" size="small" onClick={this.showInput.bind(this,record,'total_1')}>{total?total:0}</Button></>
            }
          </>
        )
      },
      {
        title: '二等奖总数',
        dataIndex: 'total_2',
        key:'total_2',
        width: 150,
        render:(total,record)=>(
          <>
            {
              record['total_2Show']?<Input type="number" defaultValue={total} 
              onPressEnter={this.handleInputConfirm.bind(this,record,'total_2')}
              />:<><Button type="dashed" size="small" onClick={this.showInput.bind(this,record,'total_2')}>{total?total:0}</Button></>
            }
          </>
        )
      },
      {
        title: '三等奖总数',
        dataIndex: 'total_3',
        key:'total_3',
        width: 150,
        render:(total,record)=>(
          <>
            {
              record['total_3Show']?<Input type="number" defaultValue={total} 
              onPressEnter={this.handleInputConfirm.bind(this,record,'total_3')}
              />:<><Button type="dashed" size="small" onClick={this.showInput.bind(this,record,'total_3')}>{total?total:0}</Button></>
            }
          </>
        )
      },
      {
        title: '四等奖总数',
        dataIndex: 'total_4',
        key:'total_4',
        width: 150,
        render:(total,record)=>(
          <>
            {
              record['total_4Show']?<Input type="number" defaultValue={total} 
              onPressEnter={this.handleInputConfirm.bind(this,record,'total_4')}
              />:<><Button type="dashed" size="small" onClick={this.showInput.bind(this,record,'total_4')}>{total?total:0}</Button></>
            }
          </>
        )
      },
      {
        title: '五等奖总数',
        dataIndex: 'total_5',
        key:'total_5',
        width: 150,
        render:(total,record)=>(
          <>
            {
              record['total_5Show']?<Input type="number" defaultValue={total} 
              onPressEnter={this.handleInputConfirm.bind(this,record,'total_5')}
              />:<><Button type="dashed" size="small" onClick={this.showInput.bind(this,record,'total_5')}>{total?total:0}</Button></>
            }
          </>
        )
      },
      {
        title: '六等奖总数',
        dataIndex: 'total_6',
        key:'total_6',
        width: 150,
        render:(total,record)=>(
          <>
            {
              record['total_6Show']?<Input type="number" defaultValue={total} 
              onPressEnter={this.handleInputConfirm.bind(this,record,'total_6')}
              />:<><Button type="dashed" size="small" onClick={this.showInput.bind(this,record,'total_6')}>{total?total:0}</Button></>
            }
          </>
        )
      },
  
    ];
      return (<>
        {/* <Card >
          <Table rowKey='id' columns={columns3} dataSource={this.state.data} pagination={false}  /> 
        </Card>
        <div style={{ height:10}}></div> 
        <Card>
          <Table rowKey='id'  columns={columns} dataSource={this.state.data} pagination={false}  /> 
        </Card> */}
        <div style={{ height:10}}></div>
        <Card>
          <Table rowKey='id'  columns={columns5} dataSource={this.state.data} pagination={false}  /> 
        </Card>
        <div style={{ height:10}}></div>
        <Card>
          <Table rowKey='id'  columns={columns2} dataSource={this.state.data} pagination={false}  /> 
        </Card>
        <div style={{ height:10}}></div>
        <Card>
          <Table rowKey='id'  columns={columns4} dataSource={this.state.data} pagination={false}  /> 
        </Card>
      </>)
  }

}