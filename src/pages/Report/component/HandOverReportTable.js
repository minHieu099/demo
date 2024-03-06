import React from 'react';
import { Button, Table } from 'antd';
import { EditOutlined, DeleteOutlined, EyeOutlined, FileTextOutlined } from '@ant-design/icons';

const HandOverReportTable = ({ reportInfo, handleDetail, handleExport,handleEdit }) => {
  const columns = [
    {
      title: 'Thời gian',
      dataIndex: 'thoigian',
      key: 'thoigian',
    },
    {
      title: 'Trực chỉ huy BTL',
      dataIndex: 'truc_CH_BTL',
      key: 'trucCH',
    },
    {
      title: 'Trực chỉ huy Trung tâm',
      dataIndex: 'truc_CH_TT',
      key: 'trucTT',
    },
    {
      title: 'Trực ban tác chiến',
      dataIndex: 'trucban_tacchien',
      key: 'trucBanTC',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button type="link" onClick={() => handleDetail(record)} className="icon-items">
            <EyeOutlined />
          </Button>
          <Button icon={<EditOutlined />} type="link" onClick={() => handleEdit(record)} className="icon-items"/>
          <Button icon={<DeleteOutlined />} className="icon-items"/>
          <Button icon={<FileTextOutlined />} type="link" onClick={() => handleExport(record)} className="icon-items" />
        </span>
      ),
    },
  ];

  return <Table dataSource={reportInfo} columns={columns} />;
};

export default HandOverReportTable;
