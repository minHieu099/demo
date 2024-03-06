import React from 'react';
import { Layout, Badge, Avatar, Menu, Dropdown } from 'antd';
import { UserOutlined, BellOutlined } from '@ant-design/icons';

const { Header } = Layout;

const userMenu = (
  <Menu>
    <Menu.Item key="0">
      <a href="/profile">Profile</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="/logout">Logout</a>
    </Menu.Item>
  </Menu>
);

const HeaderBar = () => {
  return (
    <Header className="site-layout-background" style={{ padding: 0, display: 'flex', justifyContent: 'flex-end', paddingRight: 20, coLor:'white'}}>
      <Badge count={5} style={{ marginRight: 20 }}>
        <BellOutlined style={{ fontSize: 20 }} />
      </Badge>
      <Dropdown overlay={userMenu} trigger={['click']}>
        <Avatar icon={<UserOutlined />} />
      </Dropdown>
    </Header>
  );
};

export default HeaderBar;
