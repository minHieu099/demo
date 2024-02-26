import React from "react";
import { Modal } from "antd";

const DetailHandOverReportModal = ({
  isVisible,
  handleOk,
  handleCancel,
  selectedRow,
}) => {

  return (
    <Modal
      title="Thông tin chi tiết"
      visible={isVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {/* Hiển thị thông tin chi tiết từ selectedRow */}
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
      {/* Thêm các dòng hiển thị thông tin còn lại */}
    </Modal>
  );
};

export default DetailHandOverReportModal;
