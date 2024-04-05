import React, { useEffect, useState } from "react";
import { Select, Spin, Alert } from "antd";
import axios from "axios";
import { Modal, Form, DatePicker, Input, Button } from "antd";
import "../../../utils/index";
import { convertToB } from "../../../utils/index";
const { Option } = Select;

const EditHandOverReportModal = ({ isVisibleEditForm, selectedRow,handleEditCancel,handleEditOk,form }) => {
  const [isModalEditVisible, setIsModalEditVisible] = useState(isVisibleEditForm);
  const [dataTrucban, setDataTrucban] = useState([]);
  const [dataTrucchihuy, setDataTrucchihuy] = useState([]);
  const [dataTrucchihuyBTL, setDataTrucchihuyBTL] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const handleEditForm = async () => {
  //   try {
  //     form.validateFields().then(async (values) => {
  //       // Convert 'thoiGian' to string
  //       values.thoigian = values.thoigian.format("YYYY-MM-DD");
        
  //       form.resetFields();
  //       values["id"]=selectedRow.id;
  //       const data = convertToB(values)
  //       const token = localStorage.getItem("access_token");
  //       console.log(data)
  //       const response = await axios.put(
  //         "http://192.168.3.100:20000/giaobanngay/update",
  //         data,
  //         {
  //           headers: { Authorization: `Bearer ${token}` },
  //         }
  //       );
  //       if (response.status === 200) {
  //         alert("Sửa dữ liệu thành công");
  //         handleEditCancel();
  //       } else {
  //         alert("Có lỗi khi thêm dữ liệu");
  //       }
  //     });
  //   } catch (error) {
  //     alert("Có lỗi khi thêm dữ liệu");
  //   }
  // };
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

  return (
    <Modal
      title="Sửa đổi báo cáo"
      visible={isVisibleEditForm}
      onCancel={handleEditCancel}
      footer={null}
      className="modal-add"
    >
      <Form form={form} onFinish={handleEditOk}>
        <Form.Item
          name="thoigian"
          label="Thời gian báo cáo"
          rules={[{ required: true }]}
          // initialValue={selectedRow?.thoigian}
        >
          <DatePicker showTime />
        </Form.Item>

        <Form.Item
          name="truc_CH_BTL"
          label="Trực chỉ huy BTL"
          rules={[{ required: true }]}
          initialValue={selectedRow?.truc_CH_BTL}
        >
          <Select
            placeholder="Trực chỉ huy BTL"
            defaultValue={selectedRow?.truc_CH_BTL}
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
          initialValue={selectedRow?.truc_CH_TT}
        >
          <Select
            placeholder="Trực chỉ huy trung tâm"
            defaultValue={selectedRow?.truc_CH_TT}
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
          initialValue={selectedRow?.trucban_tacchien}
        >
          <Select
            placeholder="Trực ban tác chiến"
            defaultValue={selectedRow?.trucban_tacchien}
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
          initialValue={selectedRow?.trucban_noivu}
        >
          <Select
            placeholder="Trực ban nội vụ"
            defaultValue={selectedRow?.trucban_noivu}
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
          initialValue={selectedRow?.noidung_quanso}
        >
          <Input.TextArea defaultValue={selectedRow?.noidung_quanso} />
        </Form.Item>

        <Form.Item
          name="noidung_vukhi"
          label="Nội dung vũ khí"
          rules={[{ required: true }]}
          initialValue={selectedRow?.noidung_vukhi}
        >
          <Input.TextArea defaultValue={selectedRow?.noidung_vukhi} />
        </Form.Item>

        <Form.Item
          name="noidung_ketqua"
          label="Nội dung kết quả"
          rules={[{ required: true }]}
          initialValue={selectedRow?.noidung_ketqua}
        >
          <Input.TextArea defaultValue={selectedRow?.noidung_ketqua} />
        </Form.Item>

        <Form.Item
          name="noidung_dukien"
          label="Nội dung dự kiến"
          rules={[{ required: true }]}
          initialValue={selectedRow?.noidung_dukien}
        >
          <Input.TextArea defaultValue={selectedRow?.noidung_dukien} />
        </Form.Item>
        <Form.Item
          name="noidung_ykien"
          label="Nội dung ý kiến"
          rules={[{ required: true }]}
          initialValue={selectedRow?.noidung_ykien}
        >
          <Input.TextArea defaultValue={selectedRow?.noidung_ykien} />
        </Form.Item>
        <Form.Item
          name="noidung_ketluan"
          label="Nội dung kết luận"
          rules={[{ required: true }]}
          initialValue={selectedRow?.noidung_ketluan}
        >
          <Input.TextArea defaultValue={selectedRow?.noidung_ketluan} />
        </Form.Item>

        <Form.Item
          name="noidung_KH_BTL"
          label="Nội dung kế hoạch BTL"
          rules={[{ required: true }]}
          initialValue={selectedRow?.noidung_KH_BTL}
        >
          <Input.TextArea defaultValue={selectedRow?.noidung_KH_BTL} />
        </Form.Item>

        <Form.Item
          name="noidung_chidao_BTL"
          label="Nội dung chỉ đạo BTL"
          rules={[{ required: true }]}
          initialValue={selectedRow?.noidung_chidao_BTL}
        >
          <Input.TextArea defaultValue={selectedRow?.noidung_chidao_BTL} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Xác nhận sửa đổi
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default EditHandOverReportModal;
