import React, { useState } from 'react';
import { Table, Modal, Button } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const data = [
  {
    id: '1',
    thoigian: '2024-01-30',
    truc_CH_BTL: 'Lãnh đạo',
    truc_CH_TT: 'Quân sự',
    trucban_tacchien: 'Tập trận quân sự',
    trucban_noivu: 'Khu vực biên giới',
    noidung_quanso: 'Triển khai 1000 binh sĩ và 50 xe tăng',
    noidung_vukhi: 'Sử dụng vũ khí trang bị hiện đại',
    noidung_ketqua: 'Hoàn thành mục tiêu tập trận',
    noidung_dukien: 'Phân loại và cải tiến chiến thuật',
    noidung_ykien: 'Đánh giá hiệu suất của binh sĩ và vũ khí',
    noidung_ketluan: 'Nâng cao khả năng chiến đấu và quản lý tập trận',
    noidung_KH_BTL: 'Phát triển sức mạnh quân sự',
    noidung_chidao_BTL: 'Tuân thủ quy định và chiến lược quốc phòng',
  },
  // Thêm các mẫu dữ liệu khác tương tự nếu cần
];

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const showModal = (record) => {
    setSelectedRecord(record);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: 'Thời gian',
      dataIndex: 'thoigian',
      key: 'thoigian',
    },
    {
      title: 'Nội dung quân sự',
      dataIndex: 'noidung_quanso',
      key: 'noidung_quanso',
    },
    {
      title: 'Chi tiết',
      key: 'action',
      render: (text, record) => (
        <Button type="link" onClick={() => showModal(record)}>
          <InfoCircleOutlined />
        </Button>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={data} />
      <Modal
        title="Thông tin chi tiết"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {/* Hiển thị thông tin chi tiết từ record được chọn */}
        <p>Thời gian: {selectedRecord?.thoigian}</p>
        <p>Lãnh đạo: {selectedRecord?.truc_CH_BTL}</p>
        <p>Quân sự: {selectedRecord?.truc_CH_TT}</p>
        <p>Tác chiến: {selectedRecord?.trucban_tacchien}</p>
        <p>Nội vụ: {selectedRecord?.trucban_noivu}</p>
        <p>Quân số: {selectedRecord?.noidung_quanso}</p>
        <p>Vũ khí: {selectedRecord?.noidung_vukhi}</p>
        <p>Kết quả: {selectedRecord?.noidung_ketqua}</p>
        <p>Dự kiến: {selectedRecord?.noidung_dukien}</p>
        <p>Ý kiến: {selectedRecord?.noidung_ykien}</p>
        <p>Kết luận: {selectedRecord?.noidung_ketluan}</p>
        <p>Kế hoạch BTL: {selectedRecord?.noidung_KH_BTL}</p>
        <p>Chỉ đạo BTL: {selectedRecord?.noidung_chidao_BTL}</p>
      </Modal>
    </>
  );
};

export default App;
