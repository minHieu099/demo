import React, { useState } from 'react';

import { Button, Modal, Form, Input, DatePicker } from 'antd';

import './style.scss'
const Report = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [reportInfo, setReportInfo] = useState({});

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (values) => {
    setReportInfo(values);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{ margin: '16px' }}>
      <Button type="primary" onClick={showModal}>
        Lập báo cáo
      </Button>
      <Modal title="Báo cáo mới" visible={isModalVisible} onCancel={handleCancel} footer={null}>
        <Form onFinish={handleOk}>
          <Form.Item name="nguoiLap" label="Người lập" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="nguoiNhan" label="Người nhận" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="noiDung" label="Nội dung báo cáo" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="thoiGian" label="Thời gian báo cáo" rules={[{ required: true }]}>
            <DatePicker showTime />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Xác nhận
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      {reportInfo.nguoiLap && (
        <div style={{ marginTop: '16px' }}>
          <p>Người lập: {reportInfo.nguoiLap}</p>
          <p>Người nhận: {reportInfo.nguoiNhan}</p>
          <p>Nội dung báo cáo: {reportInfo.noiDung}</p>
          <p>Thời gian báo cáo: {reportInfo.thoiGian?.format('DD/MM/YYYY HH:mm')}</p>
        </div>
      )}
    </div>
  );
};

export default Report;