

import React from "react";
import { Layout } from "antd";
import Sidebar from "./SideBar";
import HeaderBar from "./HeaderBar";
import "./style.scss";
import ShowReport from "../pages/Report/showReport";
const { Content, Footer } = Layout;

const Dashboard = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <HeaderBar />

      <Layout className="site-layout">
        <Sidebar />
        <div className="site-layout__content">
          <Content
            className="site-layout__content"
            style={{ margin: "0 16px" }}
          >
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <ShowReport/>
            </div>
          </Content>
        </div>

      </Layout>
    </Layout>
  );
};

export default Dashboard;
