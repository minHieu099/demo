import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = collapsed => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} >
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Giao ban online
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Đổi ban
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="Người dùng">
          <Menu.Item key="3">Nguyễn Trọng Phương</Menu.Item>
          <Menu.Item key="4">Trịnh Thành Trung</Menu.Item>
          <Menu.Item key="5">Lê Thị Minh Châu</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Đội">
          <Menu.Item key="6">Đội 5</Menu.Item>
          <Menu.Item key="8">Đội 6</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<FileOutlined />} />
      </Menu>
    </Sider>
  );
};

export default Sidebar;
