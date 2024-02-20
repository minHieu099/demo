import React, { useState } from "react";
import { Button, Modal, Form, Input, DatePicker, Table, Select } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  FileTextOutlined,
  FileAddOutlined,
} from "@ant-design/icons";
import data from "../../data/data.json";
import "./style.scss";
import renderDoc from "./Export/renderDoc";
import HandOverReportTable from "./component/HandOverReportTable"; // Import ReportTable vào
import NewHandOverReportModal from "./component/NewHandOverReportModal"; // Import NewReportModal
import DetailHandOverReportModal from "./component/DetailHandOverReportModal"; // Import DetailReportModal
import { saveAs } from "file-saver";
import { Packer } from "docx";

const HandOverReport = () => {
  const [isModalCreateVisible, setIsModalCreateVisible] = useState(false);
  const [isModalDetail, setIsModalDetailVisible] = useState(false);
  const [reportInfo, setReportInfo] = useState(data);
  const [selectedRow, setSelectedRow] = useState(null);
  const [form] = Form.useForm();

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

  const handleOk = () => {
    form.validateFields().then((values) => {
      // Convert 'thoiGian' to string
      values.thoigian = values.thoigian.format("YYYY-MM-DD");
      setReportInfo([...reportInfo, values]);
      setIsModalCreateVisible(false);
      form.resetFields();
    });
  };

  const handleCancel = () => {
    setIsModalCreateVisible(false);
  };
  const handleDetailOk = () => {
    setIsModalDetailVisible(false);
  };

  const handleDetailCancel = () => {
    setIsModalDetailVisible(false);
  };

  return (
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
      <HandOverReportTable
        reportInfo={reportInfo}
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
  );
};

export default HandOverReport;
