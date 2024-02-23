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
import HandOverReportTable from "./component/HandOverReportTable"; // Import ReportTable vào
import NewHandOverReportModal from "./component/NewHandOverReportModal"; // Import NewReportModal
import DetailHandOverReportModal from "./component/DetailHandOverReportModal"; // Import DetailReportModal
import EditHandOverReportModal from "./component/EditHandOverReportModal";
import { saveAs } from "file-saver";
import { Packer } from "docx";

const HandOverReport = () => {
  const [isModalCreateVisible, setIsModalCreateVisible] = useState(false);
  const [isModalDetail, setIsModalDetailVisible] = useState(false);
  const [isModalEdit, setIsModalEditVisible] = useState(false);
  const [listGiaoban, setListGiaoban] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const showCreateModal = () => {
    setIsModalCreateVisible(true);
  };

  const handleDetail = (record) => {
    setSelectedRow(record);
    setIsModalDetailVisible(true);
  };

  const handleExport = (record) => {
    const doc = renderDoc(record);
    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, `Giao ban ngày ${record.thoigian}.docx`);
    });
  };

  const handleCancel = () => {
    setIsModalCreateVisible(false);
  };
  const handleDetailOk = () => {
    setIsModalDetailVisible(false);
  };
  const showEditModal = () => {
    setIsModalEditVisible(true);
  };

  const handleDetailCancel = () => {
    setIsModalDetailVisible(false);
  };
  const handleOk = async () => {
    try {
      form.validateFields().then(async (values) => {
        // Convert 'thoiGian' to string
        values.thoigian = values.thoigian.format("YYYY-MM-DD");
        setListGiaoban([...listGiaoban, values]);
        setIsModalCreateVisible(false);
        form.resetFields();

        const token = localStorage.getItem("access_token");
        const response = await axios.post(
          "http://192.168.3.100:20000/giaobanngay/new",
          values,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (response.status === 200) {
          alert("Thêm dữ liệu thành công");
        } else {
          alert("Có lỗi khi thêm dữ liệu");
        }
      });
    } catch (error) {
      alert("Có lỗi khi thêm dữ liệu");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("access_token");
        const response_list_cb = await axios.get(
          "http://192.168.3.100:20000/giaobanngay",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setListGiaoban(response_list_cb.data);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return loading ? (
    <Spin tip="Đang tải..." />
  ) : error ? (
    <Alert message="Lỗi" description={error} type="error" showIcon />
  ) : (
    <div style={{ margin: "16px" }}>
      <NewHandOverReportModal
        isVisible={isModalCreateVisible}
        handleOk={handleOk}
        handleCancel={() => setIsModalCreateVisible(false)}
        form={form}
      />
      <DetailHandOverReportModal
        isVisible={isModalDetail}
        handleOk={() => setIsModalDetailVisible(false)}
        handleCancel={() => setIsModalDetailVisible(false)}
        selectedRow={selectedRow}
      />
      <DetailHandOverReportModal
        isVisible={isModalDetail}
        handleOk={() => setIsModalDetailVisible(false)}
        handleCancel={() => setIsModalDetailVisible(false)}
        selectedRow={selectedRow}
      />
      <HandOverReportTable
        reportInfo={listGiaoban}
        handleDetail={handleDetail}
        handleExport={handleExport}
        handleEdit={showEditModal}
      />
      <EditHandOverReportModal
        selectedRow={selectedRow}
        isVisibleEditForm={isModalEdit}
        
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
  );
};

export default HandOverReport;
