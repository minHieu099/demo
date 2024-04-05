import React from "react";
import { Button, Table } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

const ShiftHandOverReportTable = ({
  reportInfo,
  handleDetail,
  handleExport,
}) => {
  const columns = [
    {
      title: "Thời gian",
      dataIndex: "thoigian",
      key: "thoigian",
    },
    {
      title: "Trực CH",
      dataIndex: "truc_CH",
      key: "truc_CH",
    },
    {
      title: "Trực ban cũ 1",
      dataIndex: "truc_ban_cu_1",
      key: "truc_ban_cu_1",
    },
    {
      title: "Trực ban cũ 2",
      dataIndex: "truc_ban_cu_2",
      key: "truc_ban_cu_2",
    },
    {
      title: "Trực ban mới 1",
      dataIndex: "truc_ban_moi_1",
      key: "truc_ban_moi_1",
    },
    {
      title: "Trực ban mới 2",
      dataIndex: "truc_ban_moi_2",
      key: "truc_ban_moi_2",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <Button
            type="link"
            onClick={() => handleDetail(record)}
            className="icon-items"
          >
            <EyeOutlined />
          </Button>
          <Button
            icon={<EditOutlined />}
            type="link"
            onClick={() => alert("Chức năng chưa xử lý")}
            className="icon-items"
          />
          <Button icon={<DeleteOutlined />} className="icon-items" />
          <Button
            icon={<FileTextOutlined />}
            type="link"
            onClick={() => handleExport(record)}
            className="icon-items"
          />
        </span>
      ),
    },
  ];

  return (
    <div className="shift-table__wrapped">
      <Table
        className="shift-table"
        dataSource={reportInfo}
        columns={columns}
      />
      
    </div>
  );
};

export default ShiftHandOverReportTable;
