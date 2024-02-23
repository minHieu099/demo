import React, { useEffect, useState } from "react";
import { Select, Spin, Alert } from "antd";
import axios from "axios";
import { Modal, Form, DatePicker, Input, Button } from "antd";
import "../../../utils/index";
import { convertToB } from "../../../utils/index";
const { Option } = Select;

const EditHandOverReportModal = ({ isVisibleEditForm, selectedRow }) => {
  const [editSelectRow, setEditSelectRow] = useState(selectedRow);
  const [isModalEditVisible, setIsModalEditVisible] = useState(isVisibleEditForm);
  const [dataTrucban, setDataTrucban] = useState([]);
  const [dataTrucchihuy, setDataTrucchihuy] = useState([]);
  const [dataTrucchihuyBTL, setDataTrucchihuyBTL] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [form] = Form.useForm();

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
  const handleCancel = () => {
    setIsModalEditVisible(false);
  };
  const handleEditForm = async () => {
    try {
      form.validateFields().then(async (values) => {
        // Convert 'thoiGian' to string
        editSelectRow.thoigian = values.thoigian.format("YYYY-MM-DD");
        setEditSelectRow([...editSelectRow, values]);
        setIsModalEditVisible(false);
        form.resetFields();
        // Convert values to
        const data = convertToB(editSelectRow);
        const token = localStorage.getItem("access_token");
        const response = await axios.put(
          "http://192.168.3.100:20000/giaobanngay/update",
          data,
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
  return (
    <Modal
      title="Báo cáo mới"
      visible={isVisibleEditForm}
      onCancel={handleCancel}
      footer={null}
      className="modal-add"
    >
      <Form form={form} onFinish={handleEditForm}>
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
          <Select
            placeholder="Trực chỉ huy BTL"
            // defaultValue={editSelectRow.truc_CH_BTL || " "}
          >
            {dataTrucchihuyBTL.map((item, index) => (
              <Option key={index} value={item.capbac + " " + item.hoten}>
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
          <Select
            placeholder="Trực chỉ huy trung tâm"
            // defaultValue={editSelectRow.truc_CH_TT  || " "}
          >
            {dataTrucchihuy.map((item, index) => (
              <Option key={index} value={item.capbac + " " + item.hoten}>
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
          <Select
            placeholder="Trực ban tác chiến"
            // defaultValue={editSelectRow.trucban_tacchien || " "}
          >
            {dataTrucban.map((item, index) => (
              <Option key={index} value={item.capbac + " " + item.hoten}>
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
          <Select
            placeholder="Trực ban nội vụ"
            // defaultValue={editSelectRow.trucban_noivu || " "}
          >
            {dataTrucban.map((item, index) => (
              <Option key={index} value={item.capbac + " " + item.hoten}>
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
          <Input.TextArea  />
        </Form.Item>

        <Form.Item
          name="noidung_ketqua"
          label="Nội dung kết quả"
          rules={[{ required: true }]}
        >
          <Input.TextArea  />
        </Form.Item>

        <Form.Item
          name="noidung_dukien"
          label="Nội dung dự kiến"
          rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="noidung_ykien" rules={[{ required: true }]}>
          <Input.TextArea  />
        </Form.Item>
        <Form.Item
          name="noidung_ketluan"
          label="Nội dung kết luận"
          rules={[{ required: true }]}
        >
          <Input.TextArea  />
        </Form.Item>

        <Form.Item
          name="noidung_KH_BTL"
          label="Nội dung kế hoạch BTL"
          rules={[{ required: true }]}
        >
          <Input.TextArea  />
        </Form.Item>

        <Form.Item
          name="noidung_chidao_BTL"
          label="Nội dung chỉ đạo BTL"
          rules={[{ required: true }]}
        >
          <Input.TextArea  />
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
export default EditHandOverReportModal;
