import React from 'react';
import { Button, Table } from 'antd';
import { EditOutlined, DeleteOutlined, EyeOutlined, FileTextOutlined } from '@ant-design/icons';

const ShiftHandOverReportTable = ({ reportInfo, handleDetail, handleExport }) => {
    console.log(reportInfo)
    const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Thời Gian',
        dataIndex: 'thoi_gian',
        key: 'thoi_gian',
      },
      {
        title: 'Trực Chỉ Huy',
        dataIndex: 'truc_chi_huy',
        key: 'truc_chi_huy',
      },
      {
        title: 'Trực Ban Cũ',
        dataIndex: 'truc_ban_cu',
        key: 'truc_ban_cu',
      },
      {
        title: 'Trực Ban Mới',
        dataIndex: 'truc_ban_moi',
        key: 'truc_ban_moi',
      },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button type="link" onClick={() => handleDetail(record)} className="icon-items">
            <EyeOutlined />
          </Button>
          <Button icon={<EditOutlined />} type="link" onClick={() => alert("Chức năng chưa xử lý")} className="icon-items"/>
          <Button icon={<DeleteOutlined />} className="icon-items"/>
          <Button icon={<FileTextOutlined />} type="link" onClick={() => handleExport(record)} className="icon-items" />
        </span>
      ),
    },
  ];

  return <Table dataSource={reportInfo} columns={columns} />;
};

export default ShiftHandOverReportTable;
