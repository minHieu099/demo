import React, { useEffect, useState } from "react";
import { Select, Spin, Alert } from "antd";
import axios from "axios";
import { Modal, Form, DatePicker, Input, Button } from "antd";
const { Option } = Select;

const NewHandOverReportModal = ({
  isVisible,
  handleOk,
  handleCancel,
  form,
}) => {
  const [dataTrucban, setDataTrucban] = useState([]);
  const [dataTrucchihuy, setDataTrucchihuy] = useState([]);
  const [dataTrucchihuyBTL, setDataTrucchihuyBTL] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("access_token");
        const response_trucban = await axios.get(
          "http://192.168.3.100:20000/canbo/trucban",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const response_trucchihuy = await axios.get(
          "http://192.168.3.100:20000/canbo/trucchihuy",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const response_trucchihuyBTL = await axios.get(
          "http://192.168.3.100:20000/canbo/trucchihuy_btl",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setDataTrucban(response_trucban.data);
        setDataTrucchihuy(response_trucchihuy.data);
        setDataTrucchihuyBTL(response_trucchihuyBTL.data);
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
    <Modal
      title="Báo cáo mới"
      visible={isVisible}
      onCancel={handleCancel}
      footer={null}
      className="modal-add"
    >
      <Form form={form} onFinish={handleOk}>
        <Form.Item
          name="thoigian"
          label="Thời gian báo cáo"
          rules={[{ required: true }]}
        >
          <DatePicker showTime />
        </Form.Item>

        <Form.Item
          name="truc_CH_BTL"
          label="Trực chỉ huy BTL"
          rules={[{ required: true }]}
        >
          <Select placeholder="Trực chỉ huy BTL">
            {dataTrucchihuyBTL.map((item, index) => (
              <Option key={index} value={item.capbac + " "+item.hoten}>
                {item.capbac} {item.hoten}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="truc_CH_TT"
          label="Trực chỉ huy trung tâm"
          rules={[{ required: true }]}
        >
          <Select placeholder="Trực chỉ huy trung tâm">
            {dataTrucchihuy.map((item, index) => (
              <Option key={index} value={item.capbac + " "+item.hoten}>
                {item.capbac} {item.hoten}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="trucban_tacchien"
          label="Trực ban tác chiến"
          rules={[{ required: true }]}
        >
          <Select placeholder="Trực ban tác chiến">
            {dataTrucban.map((item, index) => (
              <Option key={index} value={item.capbac+ " "+item.hoten}>
                {item.capbac} {item.hoten}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="trucban_noivu"
          label="Trực ban nội vụ"
          rules={[{ required: true }]}
        >
          <Select placeholder="Trực ban nội vụ">
            {dataTrucban.map((item, index) => (
              <Option key={index} value={item.capbac+ " "+ item.hoten}>
                {item.capbac} {item.hoten}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="noidung_quanso"
          label="Nội dung quân số"
          rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          name="noidung_vukhi"
          label="Nội dung vũ khí"
          rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          name="noidung_ketqua"
          label="Nội dung kết quả"
          rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          name="noidung_dukien"
          label="Nội dung dự kiến"
          rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="noidung_ykien" label="Nội dung ý kiến" rules={[{ required: true }]}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="noidung_ketluan"
          label="Nội dung kết luận"
          rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          name="noidung_KH_BTL"
          label="Nội dung kế hoạch BTL"
          rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          name="noidung_chidao_BTL"
          label="Nội dung chỉ đạo BTL"
          rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Xác nhận
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default NewHandOverReportModal;
