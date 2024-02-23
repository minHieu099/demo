import React from "react";
import { Modal } from "antd";

const DetailShiftHandOverReportModal = ({
  isVisible,
  handleOk,
  handleCancel,
  selectedRow,
}) => {
  console.log(selectedRow);
  return (
    <Modal
      title="Thông tin chi tiết"
      visible={isVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {/* Hiển thị thông tin chi tiết từ selectedRow */}
      <p>Thời gian: {selectedRow?.thoi_gian}</p>
      <p>Trực chỉ huy: {selectedRow?.truc_chi_huy}</p>
      <p>Trực ban cũ: {selectedRow?.truc_ban_cu}</p>
      <p>Trực ban mới: {selectedRow?.truc_ban_moi}</p>
      <p>Tổng quân số: {selectedRow?.tong_quan_so}</p>
      <p>Quân số có mặt: {selectedRow?.quan_so_co_mat}</p>
      <p>Lý do: {selectedRow?.ly_do}</p>
      <p>Tình hình trong ngày: {selectedRow?.tinh_hinh_trong_ngay}</p>
      <p>Việc đột xuất: {selectedRow?.viec_dot_xuat}</p>
      <p>Nội dung bàn giao kíp: {selectedRow?.noi_dung_ban_giao_kip}</p>
      {/* Thêm các dòng hiển thị thông tin còn lại */}
    </Modal>
  );
};

export default DetailShiftHandOverReportModal;
