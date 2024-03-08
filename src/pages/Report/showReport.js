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
    <div style={{height:"100%", marginTop: "64px"}}>
      <Select defaultValue="Report1" style={{ width: 200 }} onChange={handleChange}>
        <Select.Option value="Report1">Nội dung giao ban</Select.Option>
        <Select.Option value="Report2">Bàn giao kíp trực</Select.Option>
      </Select>
      {report === 'Report1' ? <HandOverReport /> : report === 'Report2' ? <ShiftHandOverReport /> : null}
    </div>
  );
};

export default ShowReport;
