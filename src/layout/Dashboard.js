import React from "react";
import { Layout } from "antd";
import Sidebar from "./SideBar";
import HeaderBar from "./HeaderBar";
import "./style.scss";
import ShowReport from "../pages/Report/showReport";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeManagementScreen from "../pages/EmployeeManagement/EmployeeManagementScreen";
import DeparmentManagementScreen from "../pages/DepartmentManagement/DeparmentManagementScreen";

import PrivateRoute from "../router/PrivateRouter";
const { Content, Footer } = Layout;
 
const Dashboard = () => {
  return (
    <Content style={{ margin: "0 16px" }}>
      <Routes>
        <Route
          path="/online-meetings"
          element={<PrivateRoute element={ShowReport} />}
        />
        <Route
          path="/manage-departments"
          element={<PrivateRoute element={DeparmentManagementScreen} />}
        />
        <Route
          path="/manage-staff"
          element={<PrivateRoute element={EmployeeManagementScreen} />}
        />
      </Routes>
    </Content>
  );
};

export default Dashboard;
