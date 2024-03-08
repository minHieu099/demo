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

    <Header className="site-layout-background" style={{ padding: "20px 20px 0 0", display: 'flex', justifyContent: 'space-between', coLor: 'white' }}>
      <img alt="logo" src="img/logo.png" style={{width: "80px", heitght: "80px", marginLeft: "40px", marginBottom:"10px"}}/>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <span style= {{marginRight: "20px", cursor: "pointer"}}>
          <Badge count={5} style={{ marginRight: 20 }}>
            <BellOutlined style={{ fontSize: 20, color: "white" }} />
          </Badge>
        </span>
        <span style= {{cursor: "pointer"}}>
          <Dropdown overlay={userMenu} trigger={['click']}>
            <Avatar icon={<UserOutlined />} />
          </Dropdown>
        </span>
      </div>

    </Header>
  );
};

export default HeaderBar;
