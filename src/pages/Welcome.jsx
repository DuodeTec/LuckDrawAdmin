import React, { useState,useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography,Table } from 'antd';
import styles from './Welcome.less';
import { GroupedBar } from '@ant-design/charts';
import {getWelcome} from '@/services/welcome.js';

// const CodePreview = ({ children }) => (
//   <pre className={styles.pre}>
//     <code>
//       <Typography.Text copyable>{children}</Typography.Text>
//     </code>
//   </pre>
// );

export default() => {
  const [data,setData] = useState([]);
  // const data = [
  //   {
  //     奖品类型: '西北',
  //     细分: '中奖人总数',
  //     中奖数量: 8058,
  //   },
  //   {
  //     奖品类型: '西北',
  //     细分: '已填写',
  //     中奖数量: 5058,
  //   },
  // ];
  // const [data, setData] = useState({ hits: [] });
  // useEffect(async () => {
  //   const result = await axios(
  //     'http://localhost/api/v1/search?query=redux',
  //   );
  //   setData(result.data);
  // });
  // let res = getWelcome();
  // res.then((e)=>{
  //   console.log(e);
  // })
  useEffect( ()=>{
      //只执行一次
      async function fetchData() {
        let res = await getWelcome();
        //将数据
        if(res.error_code==0){
          let newData=[];
          // Object.keys(res.data).map((k,v)=>{
          //     if(k.substr(0,6)=='reward'){
          //       newData.push({
          //         奖品类型:k.substr(6,1)+'等奖',
          //         细分: '中奖人总数',
          //         中奖数量: res.data[k],
          //       });
          //     }
          //     if(k.substr(0,8)=='complete'){
          //       newData.push({
          //         奖品类型: k.substr(8,1)+'等奖',
          //         细分: '已填写',
          //         中奖数量: res.data[k],
          //       });
          //     }
          // })
          Object.keys(res.data).map((k,v)=>{
            console.log(k,v)
            newData.push({
              id:k,
              content:res.data[k]
            })
          })
          setData(newData);
        }
      }
      fetchData();
  },[])
  const config = {
    // forceFit: true,
    title: {
      visible: true,
      text: '奖品发放和领取情况',
    },
    data,
    yField: '奖品类型',
    xField: '中奖数量',
    label: {
      visible: true,
      formatter: (v) => Math.round(v) + '人',
    },
    stackField: '细分',
  };
  // const dataSource = [
  //   {
  //     key: '1',
  //     name: '胡彦斌',
  //     age: 32,
  //     address: '西湖区湖底公园1号',
  //   },
  //   {
  //     key: '2',
  //     name: '胡彦祖',
  //     age: 42,
  //     address: '西湖区湖底公园1号',
  //   },
  // ];
  const columns = [
    {
      title: '第几周',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '数据',
      dataIndex: 'content',
      key: 'content',
      render: (data) => <>
      <div>进入首页人次:{data.enter_index}</div>
      <div>进入首页人数:{data.enter_index_real}</div>
      <div>打卡惊喜，点击次数:{data.click_surprise}</div>
      <div>完成每周打卡人数:{data.complete_week_sign}</div>
      <div>分享好友人数:{data.share_friend_real}</div>
      <div>分享好友次数:{data.share_friend}</div>
      <div>好友点击分享次数:{data.share_enter}</div>
      <div>好友完成授权人数:{data.share_enter_auth}</div>
      <div>区域解锁数量-北美洲之旅:{data.unlock_1}</div>
      <div>区域解锁数量-南美洲之旅:{data.unlock_2}</div>
      <div>区域解锁数量-欧洲之旅:{data.unlock_3}</div>
      <div>区域解锁数量-东南亚之旅:{data.unlock_4}</div>
      <div>区域解锁数量-大洋洲之旅:{data.unlock_5}</div>
      <div>区域解锁数量-日本韩国之旅:{data.unlock_6}</div>
      <div>解锁全部区域人数:{data.onlock_all}</div>
      <div>全勤人数:{data.complete_allmap}</div>

      </>,
    },
    // {
    //   title: '第3周',
    //   dataIndex: 'week3',
    //   key: 'week3',
    // },
    // {
    //   title: '第4周',
    //   dataIndex: 'week4',
    //   key: 'week4',
    // },
    // {
    //   title: '第5周',
    //   dataIndex: 'week5',
    //   key: 'week5',
    // },
    // {
    //   title: '第6周',
    //   dataIndex: 'week6',
    //   key: 'week6',
    // },
    // {
    //   title: '所有',
    //   dataIndex: 'total',
    //   key: 'total',
    // },
  ];
    return (<PageContainer>
    <Card>
      {/* <GroupedBar {...config} /> */}
      <Table dataSource={data} columns={columns} pagination={false} />
    </Card>
  </PageContainer>);
};
