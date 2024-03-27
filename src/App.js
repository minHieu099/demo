// App.js
import "./App.css";
import ShowReport from "./pages/Report/showReport";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Layout } from "antd";
import Login from "./pages/Login/index";
import EmployeeManagementScreen from "./pages/EmployeeManagement/EmployeeManagementScreen";
import DeparmentManagementScreen from "./pages/DepartmentManagement/DeparmentManagementScreen";
import PrivateRoute from "./router/PrivateRouter";

import HeaderBar from "./layout/HeaderBar";
import Dashboard from "./layout/Dashboard";
import Sidebar from "./layout/SideBar";
import "./style.scss";
const { Content, Footer } = Layout;
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <Layout style={{ minHeight: "100vh", width: "100%" }}>
              <HeaderBar />
              <Layout className="site-layout">
                <Sidebar />
                <div className="site-layout__content">
                  <Content className="site-layout__content">
                    <div
                      className="site-layout-background"
                      style={{ padding: 24, minHeight: 360 }}
                    >
                      <Dashboard />
                    </div>
                  </Content>
                </div>
              </Layout>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
