// AuthenticatedApp.js
import React from 'react';
import { Layout } from 'antd';
import HeaderBar from './/HeaderBar';
import Dashboard from './Dashboard';
import Sidebar from './SideBar';
const { Content, Footer } = Layout;
const AuthenticatedApp = () => (
  <Layout style={{ minHeight: "100vh", width: "100%" }}>
    <HeaderBar />
    <Layout className="site-layout">
      <Sidebar />
      <div className="site-layout__content">
        <Content className="site-layout__content">
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Dashboard />
          </div>
        </Content>
      </div>
    </Layout>
  </Layout>
);

export default AuthenticatedApp;
