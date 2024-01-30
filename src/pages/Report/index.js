import React, { useState } from 'react';
import { Button, Modal, Form, Input, DatePicker, Table, Select } from 'antd';
import { EditOutlined, DeleteOutlined, EyeOutlined, FileTextOutlined, FileAddOutlined} from '@ant-design/icons';
import data from "../../data/data.json";
import './style.scss';
import renderDoc from "./Export/renderDoc";
import { saveAs } from "file-saver";
import { Packer } from "docx";

const Report = () => {
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
    Packer.toBlob(doc).then(blob => {
      saveAs(blob, `Giao ban ngày ${record.thoigian}.docx`);
    });


  };

  const handleOk = () => {
    form.validateFields().then(values => {
      // Convert 'thoiGian' to string
      values.thoigian = values.thoigian.format('YYYY-MM-DD');
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
          <Button icon={<EditOutlined />}  className="icon-items"/>
          <Button icon={<DeleteOutlined />}  className="icon-items"/>
          <Button icon={<FileTextOutlined />} type="link" onClick={() => handleExport(record)} className="icon-items" />

        </span>
      ),
    },
  ];

  return (
    <div style={{ margin: '16px' }}>
      <Button type="primary" onClick={showCreateModal} class="test" icon={<FileAddOutlined />}>
        Lập báo cáo
      </Button>
      <Modal title="Báo cáo mới" visible={isModalCreateVisible} onCancel={handleCancel} footer={null}>
        <Form form={form} onFinish={handleOk}>
          <Form.Item name="thoigian" label="Thời gian báo cáo" rules={[{ required: true }]}>
            <DatePicker showTime />
          </Form.Item>
          <Form.Item name="truc_CH_BTL" label="Trực chỉ huy BTL" rules={[{ required: true }]}>
            <Select defaultValue="Đại tá Nguyễn Tiền Giang">
              <Select.Option value="Đại tá Nguyễn Tiền Giang">Đại tá Nguyễn Tiền Giang</Select.Option>
              <Select.Option value="Thiếu tướng Đặng Đức Đông">Thiếu tướng Đặng Đức Đông</Select.Option>
              <Select.Option value="Đại tá Đặng Quốc Cường">Đại tá Đặng Quốc Cường</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="truc_CH_TT" label="Trực chỉ huy trung tâm" rules={[{ required: true }]}>
            <Select defaultValue="Đại tá Trần Ngọc Anh">
              <Select.Option value="Đại tá Trần Ngọc Anh">Đại tá Trần Ngọc Anh</Select.Option>
              <Select.Option value="Thượng tá Nguyễn Ngọc Huy">Thượng tá Nguyễn Ngọc Huy</Select.Option>
              <Select.Option value="Đại tá Đặng Quốc Cường">Đại tá Đặng Quốc Cường</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="trucban_tacchien" label="Trực ban tác chiến" rules={[{ required: true }]}>
            <Select defaultValue="Trung úy Bùi Đức Mạnh">
              <Select.Option value="Trung úy Bùi Đức Mạnh">Trung úy Bùi Đức Mạnh</Select.Option>
              <Select.Option value="Trung úy Bùi Văn Dương">Trung úy Bùi Văn Dương</Select.Option>
              <Select.Option value="Trung úy Đinh Văn Tài">Nguyễn Văn C</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="trucban_noivu" label="Trực ban nội vụ" rules={[{ required: true }]}>
            <Select defaultValue="Trung úy Bùi Đức Mạnh">
              <Select.Option value="Trung úy Bùi Đức Mạnh">Trung úy Bùi Đức Mạnh</Select.Option>
              <Select.Option value="Trung úy Bùi Văn Dương">Trung úy Bùi Văn Dương</Select.Option>
              <Select.Option value="Trung úy Đinh Văn Tài">Nguyễn Văn C</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="noidung_quanso" label="Nội dung quân số" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="noidung_vukhi" label="Nội dung vũ khí" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="noidung_ketqua" label="Nội dung kết quả" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="noidung_dukien" label="Nội dung dự kiến" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="noidung_ykien" label="Nội dung ý kiến" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="noidung_ketluan" label="Nội dung kết luận" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="noidung_KH_BTL" label="Nội dung kế hoạch BTL" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="noidung_chidao_BTL" label="Nội dung kết luận BTL" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Xác nhận
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="Thông tin chi tiết"
        visible={isModalDetail}
        onOk={handleDetailOk}
        onCancel={handleDetailCancel}
      >
        {/* Hiển thị thông tin chi tiết từ record được chọn */}
        <p>Thời gian: {selectedRow?.thoigian}</p>
        <p>Lãnh đạo: {selectedRow?.truc_CH_BTL}</p>
        <p>Quân sự: {selectedRow?.truc_CH_TT}</p>
        <p>Tác chiến: {selectedRow?.trucban_tacchien}</p>
        <p>Nội vụ: {selectedRow?.trucban_noivu}</p>
        <p>Quân số: {selectedRow?.noidung_quanso}</p>
        <p>Vũ khí: {selectedRow?.noidung_vukhi}</p>
        <p>Kết quả: {selectedRow?.noidung_ketqua}</p>
        <p>Dự kiến: {selectedRow?.noidung_dukien}</p>
        <p>Ý kiến: {selectedRow?.noidung_ykien}</p>
        <p>Kết luận: {selectedRow?.noidung_ketluan}</p>
        <p>Kế hoạch BTL: {selectedRow?.noidung_KH_BTL}</p>
        <p>Chỉ đạo BTL: {selectedRow?.noidung_chidao_BTL}</p>
      </Modal>
      <Table dataSource={reportInfo} columns={columns} />
    </div>
  );
};

export default Report;
