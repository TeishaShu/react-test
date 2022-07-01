import React, { useEffect, useState } from 'react';
import { Table,Tag } from 'antd';

function Test1() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const columns = [
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'House',
      dataIndex: 'house',
      key: 'house',
    },
    {
      title: 'Avg. Price',
      dataIndex: 'price',
      key: 'price',
    },
  ];

  useEffect(() => {
    setLoading(true);
    fetch('/api/properties')
      .then(res => res.json())
      .then(response => {
        const resData = response.data;
        const filterData = resData.filter(el=>el.state==="Georgia");
        const sortData = filterData.sort((a,b)=>{
          return a.city<b.city?-1:1;
        })
        setData(sortData)
        setLoading(false)
      })
      .catch(err => {
        console.log("err",err)
        setLoading(false)
      })
  }, [])


  return (
    <div>
      <h2>Test1</h2>
      <Table
         loading={loading}
         columns={columns}
         dataSource={data}
         rowKey={(record) => record.id}
         pagination={false}
      />
    </div>
  );
}

export default Test1;
