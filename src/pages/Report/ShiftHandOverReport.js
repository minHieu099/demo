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

import renderGbnTT from "./Export/giaobanNgayTT";
import ShiftHandOverReportTable from "./component/ShiftHandOverReportTable"; // Import ReportTable vào
import DetailHandOverReportModal from "./component/DetailHandOverReportModal"; // Import DetailReportModal

import { saveAs } from "file-saver";
import { Packer } from "docx";

const ShiftHandOverReport = () => {
  const [isModalCreateVisible, setIsModalCreateVisible] = useState(false);
  const [isModalDetail, setIsModalDetailVisible] = useState(false);
  const [listDoiban, setListDoiban] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const showCreateModal = () => {
    setIsModalCreateVisible(true);
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("access_token");
        const response_list_db = await axios.get(
          "http://192.168.3.100:20000/bangiaokiptruc",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setListDoiban(response_list_db.data);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const handleDetail = (record) => {
    setSelectedRow(record);
    setIsModalDetailVisible(true);
  };

  const handleExport = (record) => {
    const doc = renderGbnTT(record);
    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, `Bàn giao kíp trực ngày ${record.thoigian}.docx`);
    });
  };
  return loading ? (
    <Spin tip="Đang tải..." />
  ) : error ? (
    <Alert message="Lỗi" description={error} type="error" showIcon />
  ) : (
    <div>
      <ShiftHandOverReportTable
        reportInfo={listDoiban}
        handleDetail={handleDetail}
        handleExport={handleExport}
      />
      <Button
        type="primary"
        onClick={showCreateModal}
        class="test"
        icon={<FileAddOutlined />}
      >
        Thêm báo cáo
      </Button>
    </div>
  )
};

export default ShiftHandOverReport;
