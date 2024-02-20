import React from "react";
import { Modal, Form, DatePicker, Select, Input, Button } from "antd";

const NewHandOverReportModal = ({ isVisible, handleOk, handleCancel, form }) => {
  return (
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
          <Select defaultValue="Đại tá Nguyễn Tiền Giang">
            <Select.Option value="Đại tá Nguyễn Tiền Giang">
              Đại tá Nguyễn Tiền Giang
            </Select.Option>
            <Select.Option value="Thiếu tướng Đặng Đức Đông">
              Thiếu tướng Đặng Đức Đông
            </Select.Option>
            <Select.Option value="Đại tá Đặng Quốc Cường">
              Đại tá Đặng Quốc Cường
            </Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="truc_CH_TT"
          label="Trực chỉ huy trung tâm"
          rules={[{ required: true }]}
        >
          <Select defaultValue="Đại tá Trần Ngọc Anh">
            <Select.Option value="Đại tá Trần Ngọc Anh">
              Đại tá Trần Ngọc Anh
            </Select.Option>
            <Select.Option value="Thượng tá Nguyễn Ngọc Huy">
              Thượng tá Nguyễn Ngọc Huy
            </Select.Option>
            <Select.Option value="Đại tá Đặng Quốc Cường">
              Đại tá Đặng Quốc Cường
            </Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="trucban_tacchien"
          label="Trực ban tác chiến"
          rules={[{ required: true }]}
        >
          <Select defaultValue="Trung úy Bùi Đức Mạnh">
            <Select.Option value="Trung úy Bùi Đức Mạnh">
              Trung úy Bùi Đức Mạnh
            </Select.Option>
            <Select.Option value="Trung úy Bùi Văn Dương">
              Trung úy Bùi Văn Dương
            </Select.Option>
            <Select.Option value="Trung úy Đinh Văn Tài">
              Nguyễn Văn C
            </Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="trucban_noivu"
          label="Trực ban nội vụ"
          rules={[{ required: true }]}
        >
          <Select defaultValue="Trung úy Bùi Đức Mạnh">
            <Select.Option value="Trung úy Bùi Đức Mạnh">
              Trung úy Bùi Đức Mạnh
            </Select.Option>
            <Select.Option value="Trung úy Bùi Văn Dương">
              Trung úy Bùi Văn Dương
            </Select.Option>
            <Select.Option value="Trung úy Đinh Văn Tài">
              Nguyễn Văn C
            </Select.Option>
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
        <Form.Item name="noidung_ykien" rules={[{ required: true }]}>
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