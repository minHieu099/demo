import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Input, DatePicker, Table, Select } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  FileTextOutlined,
  FileAddOutlined,
} from "@ant-design/icons";
import data from "../../data/data.json";
import axios from "axios";
import { Spin, Alert } from "antd";
import "./style.scss";
import renderDoc from "./Export/renderDoc";
import ShiftHandOverReportTable from "./component/HandOverReportTable"; // Import ReportTable vào
import DetailHandOverReportModal from "./component/DetailHandOverReportModal"; // Import DetailReportModal

import { saveAs } from "file-saver";
import { Packer } from "docx";

const ShiftHandOverReport = () => {
  const [isModalCreateVisible, setIsModalCreateVisible] = useState(false);
  const [isModalDetail, setIsModalDetailVisible] = useState(false);
  const [listDoiban, setListDoiban] = useState(data);
  const [selectedRow, setSelectedRow] = useState(null);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDetail = (record) => {
    setSelectedRow(record);
    setIsModalDetailVisible(true);
  };

  const handleExport = (record) => {
    //Xử lý
    alert("hàm đang xây dựng")
  };
  return (
    <div style={{ margin: "16px" }}>
      <ShiftHandOverReportTable
        reportInfo={data}
        handleDetail={handleDetail}
        handleExport={handleExport}
      />
    </div>
  );
};

export default ShiftHandOverReport;
