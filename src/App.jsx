import React, { useState } from "react";
import {
  BoldOutlined,
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  BellOutlined,
  HomeOutlined,
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
  getItem("Trang chủ", "1", <HomeOutlined />),
  getItem("Nguyên vật liệu", "2", <DesktopOutlined />),
  getItem("ĐỊnh mức vật tư", "3", <BoldOutlined />),
  getItem("Nhân sự", "4", <BoldOutlined />),
  getItem("Quản lý dự án", "5", <BoldOutlined />),
  getItem("Danh sách yêu cầu", "sub1", <UserOutlined />, [
    getItem("Tạo mới vật tư", "6"),
    getItem("Chỉnh sửa vật tư", "7"),
    getItem("Ngừng cung cấp vật tư", "8"),
  ]),
  getItem("Thống kê", "9", <TeamOutlined />),
  getItem("Files", "11", <FileOutlined />),
];

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "99vh", background: "white" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ background: "white" }}
      >
        {/* <div className="demo-logo-vertical" /> */}
        <Menu
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>

      <Layout style={{}}>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            borderBottom: "1px solid #3333",
            display: "flex",
            justifyContent: "space-between",
            marginBottom:"10px",
          }}
        >
          <div>
            <span
              style={{
                textTransform: "uppercase",
                fontFamily: "Arial, sans-serif",
                fontWeight: "bold",
                color: "blue",
                fontSize: 20,
                padding: 16,
              }}
            >
              Phần mềm quản lý vật tư |
            </span>
          </div>
          <div>
            <BellOutlined
              style={{
                alignItems: "center",
                marginLeft: "1px",
                marginRight: "20px",
                fontSize: "25px",
              }}
            />
            <UserOutlined
              style={{
                alignItems: "center",
                marginLeft: "1px",
                marginRight: "20px",
                fontSize: "25px",
              }}
            />
          </div>
        </Header>
        <Content style={{ margin: "0 10px" }}>
          {/* <Breadcrumb
              style={{ margin: "16px 0" }}
              items={[{ title: "User" }, { title: "Bill" }]}
            /> */}
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
        {/* <Footer
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
            
          </Footer> */}
      </Layout>
    </Layout>
  );
}

export default App;
