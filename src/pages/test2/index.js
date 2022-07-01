import React, { useEffect, useState } from 'react';
import { Table, Tag, Checkbox } from 'antd';

function Test2() {
  const [loading, setLoading] = useState(false);
  const [defaultItem, setDefaultItem] = useState([]);
  const [showItem, setShowItem] = useState([]);
  const [data, setData] = useState();
  const [sortedInfo, setSortedInfo] = useState({});
  const columns = [
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
      className:"hideItem",
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
      sorter: (a, b) => a.city < b.city ? -1 : 1,
      sortOrder: sortedInfo.columnKey === 'city' ? sortedInfo.order : null,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      sorter: (a, b) => a.type < b.type ? -1 : 1,
      sortOrder: sortedInfo.columnKey === 'type' ? sortedInfo.order : null,
    },
    {
      title: 'House',
      dataIndex: 'house',
      key: 'house',
      align: 'right',
      sorter: (a, b) => a.house - b.house,
      sortOrder: sortedInfo.columnKey === 'house' ? sortedInfo.order : null,
    },
    {
      title: 'Avg. Price',
      dataIndex: 'price',
      key: 'price',
      align: 'right',
      render: (text, record) => (<Tag color={record.tagColor}>{text}</Tag>)
    },
  ];

  //隱藏功能還沒寫好
  const checkboxOption = [
    {
      label: 'State',
      value: 'state',
    },
    {
      label: 'City',
      value: 'city',
    },
    {
      label: 'Type',
      value: 'type',
    },
    {
      label: 'House',
      value: 'house',
    },
    {
      label: 'Avg. Price',
      value: 'price',
    },
  ];

  useEffect(() => {
    setLoading(true);

    //show item
    const showItem = checkboxOption.map(el => el.value);
    setDefaultItem(showItem)
    setShowItem(showItem);

    // API
    fetch('/api/properties')
      .then(res => res.json())
      .then(response => {
        const resData = response.data;
        const filterData = resData.filter(el => el.state === "Georgia");
        const sortData = filterData.sort((a, b) => {
          return a.city < b.city ? -1 : 1;
        })

        //price color
        const totalPrice = filterData.map(el => Number(el.price)).reduce((pre, current) => (pre + current));
        const averagePrice = totalPrice / filterData.length;
        const addTagData = sortData.map(el => {
          let tagColor = "default";
          if (el.price > averagePrice * 1.2) {
            tagColor = "error";
          } else if (el.price < averagePrice * 0.8) {
            tagColor = "success";
          }

          return { ...el, tagColor }
        })

        setData(addTagData)
        setLoading(false)
      })
      .catch(err => {
        console.log("err", err)
        setLoading(false)
      })
  }, [])

  const changeSort = (pagination, filters, sorter) => (setSortedInfo(sorter));
  const changeCheckbox = (checkedValues) => (setShowItem((checkedValues.length < 1) ? defaultItem : checkedValues));

  return (
    <div>
      <h2>Test2</h2>
      <Checkbox.Group
        style={{ marginBottom: '30px' }}
        options={checkboxOption}
        onChange={changeCheckbox}
      />
      <Table
        loading={loading}
        columns={columns}
        dataSource={data}
        rowKey={(record) => record.id}
        pagination={false}
        onChange={changeSort}
      />
    </div>
  );
}

export default Test2;
