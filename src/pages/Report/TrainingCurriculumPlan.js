import React from "react";
import TrainingCurriculumPlanTable from "./component/TrainingCurriculumPlanTable";

import renderThongquaGAHL from "./Export/kehoachThongquaGAHL";
import { saveAs } from "file-saver";
import { Packer } from "docx";
const handleExport = (record) => {
  const doc = renderThongquaGAHL(record);
  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, `Gíao án huấn luyện ngày ${record.thoigian}.docx`);
  });
};
const TrainingCurriculumPlan = () => {
  return <TrainingCurriculumPlanTable handleExport={handleExport} />;
};

export default TrainingCurriculumPlan;
