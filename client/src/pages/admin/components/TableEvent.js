import React from 'react'
import { Table } from 'antd';

import moment from 'moment/min/moment-with-locales'

const TableEvent = ({ data }) => {
  console.log(data)
  const columns = [
    {
      title: 'ชื่อกิจกรรม',
      dataIndex: 'evName',
      key: 'evName',
    },
    {
      title: 'ประเภทกิจกรรม',
      render: (record) =>
        <>
          {record.training.trNamet}
        </>
    },
    {
      title: 'สโมสรที่จัดกิจกรรม',
      render: (record) =>
        <>
          {record.club.clName}
        </>
    },
    {
      title: 'สถานที่',
      render: (record) =>
        <>
          {record.camp.cpNamet}
        </>
    },
    {
      title: 'วันที่เริ่ม',
      render: (record) =>
        <>
          {moment(record.evFdate).locale('th').format('DD MMM YYYY')}
        </>
    },
    {
      title: 'วันที่สิ้นสุด',
      render: (record) =>
        <>
          {moment(record.evLdate).locale('th').format('DD MMM YYYY')}
        </>
    },
    {
      title: 'ค่าเข้าร่วมกิจกรรม',
      dataIndex: 'evPrice',
      key: 'evPrice',
    },
    {
      title: 'ลิงค์เพิ่มเติม',
      dataIndex: 'evLink',
      key: 'evLink',
    },
  ];
  return (
    <div>
      <h1>Table Event</h1>
      <Table dataSource={data} columns={columns} rowKey="_id" />
    </div>
  )
}

export default TableEvent
