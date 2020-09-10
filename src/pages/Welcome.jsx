import React, { useState,useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';
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
          Object.keys(res.data).map((k,v)=>{
              if(k.substr(0,6)=='reward'){
                newData.push({
                  奖品类型:k.substr(6,1)+'等奖',
                  细分: '中奖人总数',
                  中奖数量: res.data[k],
                });
              }
              if(k.substr(0,8)=='complete'){
                newData.push({
                  奖品类型: k.substr(8,1)+'等奖',
                  细分: '已填写',
                  中奖数量: res.data[k],
                });
              }
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
    return (<PageContainer>
    <Card>
      <GroupedBar {...config} />
    </Card>
  </PageContainer>);
};
