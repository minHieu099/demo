import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  ApartmentOutlined,
  UserOutlined,
} from "@ant-design/icons";
import DeparmentManagementScreen from "../pages/DepartmentManagement/DeparmentManagementScreen";
import EmployeeManagementScreen from "../pages/EmployeeManagement/EmployeeManagementScreen";
const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      {/* <div className="logo" /> */}
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to="/online-meetings">Giao ban online</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<ApartmentOutlined />}>
          <Link to="/manage-departments">Quản lý đơn vị</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
          <Link to="/manage-staff">Quản lý cán bộ</Link>
        </Menu.Item>

      </Menu>
    </Sider>
  );
};

export default Sidebar;
