import React from "react";
import { Table } from "antd";
import data from "../../../data/data_cb.json";

const columns = [
  {
    title: "Tên đơn vị",
    dataIndex: "tendonvi",
    key: "tendonvi",
  },
  {
    title: "Cán bộ",
    dataIndex: "canbo",
    key: "canbo",
    render: (canbo) => (
      <ul>
        {canbo.map(({ hoten, chucvu, capbac }) => (
          <li key={hoten}>
            {chucvu} - {capbac} - {hoten}
          </li>
        ))}
      </ul>
    ),
  },
];

const DepartmentManagementTable = () => {
  return <Table columns={columns} dataSource={data} />;
};

export default DepartmentManagementTable;
