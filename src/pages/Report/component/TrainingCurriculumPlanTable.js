import React from "react";
import { Button, Table } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import data from "../../../data/data.json";
const TrainingCurriculumPlanTable = ({
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
      title: "Tên bài",
      dataIndex: "ten_bai",
      key: "tten_bai",
    },
    {
      title: "Người giảng",
      dataIndex: "nguoi_giang",
      key: "nguoi_giang",
    },
    {
      title: "Địa điểm",
      dataIndex: "dia_diem",
      key: "dia_diem",
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
        dataSource={data}
        columns={columns}
      />
      ;
    </div>
  )
};

export default TrainingCurriculumPlanTable;
