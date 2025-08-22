  import React, { useState } from "react";
  import {
    BoldOutlined,
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from "@ant-design/icons";
  import { Breadcrumb, Layout, Menu, theme } from "antd";

  const { Header, Content, Footer, Sider } = Layout;

  // Hàm tạo item cho Menu (JSX thuần, không type)
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  // Danh sách menu
  const items = [
    getItem("Trang chủ", "1", <PieChartOutlined />),
    getItem("Danh sách", "2", <DesktopOutlined />),
    getItem("User", "sub1", <UserOutlined />, [
      getItem("A", "3"),
      getItem("B", "4"),
      getItem("C", "5"),
    ]),
    getItem("Team", "sub2", <TeamOutlined />, [
      getItem("Team 1", "6"),
      getItem("Team 2", "8"),
    ]),
    getItem("Files", "9", <FileOutlined />),
  ];

  function App() {
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
      <Layout style={{ minHeight: "99vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>

        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <span style={{ textTransform: "uppercase", fontFamily: "Arial, sans-serif", fontWeight:"bold", color: "blue", fontSize: 20, padding: 16}}>Phần mềm quản lý vật tư |</span>
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb
              style={{ margin: "16px 0" }}
              items={[{ title: "User" }, { title: "Bill" }]}
            />
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              Content
            </div>
          </Content>
          <Footer
            style={{
              height: "40px", // chiều cao hợp lý (vd: 200px)
              width: "100%", // full chiều ngang
              backgroundColor: "#d1ceceff",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "20px",
            }}
          >
            <span style={{}}>Ant Design ©{new Date().getFullYear()} Created by Ant UED</span>
          </Footer>
        </Layout>
      </Layout>
    );
  }

  export default App;
