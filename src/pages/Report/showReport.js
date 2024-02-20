import React, { useState } from 'react';
import { Select } from 'antd';
import HandOverReport from './HandOverReport';
import ShiftHandOverReport from './ShiftHandOverReport';

const ShowReport = () => {
  const [report, setReport] = useState('Report1');

  const handleChange = (value) => {
    setReport(value);
  };

  return (
    <div>
      <Select defaultValue="Report1" style={{ width: 120 }} onChange={handleChange}>
        <Select.Option value="Report1">Nội dung giao ban</Select.Option>
        <Select.Option value="Report2">Bàn giao kíp trực</Select.Option>
      </Select>
      {report === 'Report1' ? <HandOverReport /> : <ShiftHandOverReport />}
    </div>
  );
};

export default ShowReport;
