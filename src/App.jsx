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
  GoldOutlined,
  BarChartOutlined,
  ProfileFilled,
  MedicineBoxFilled,
  UnorderedListOutlined,
  HomeFilled,
  SignalFilled,
  GoldFilled,
  ClusterOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { InputSearch, FilterButtons } from "./pages/materials/materials";
import TableMaterials from "./pages/materials/tableMaterials";
import Routers from "./routers/routers";
import { BrowserRouter, Link } from "react-router-dom";
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
  getItem(
    <Link to="/home">Trang chủ</Link>,
    "1",
    <HomeFilled style={{ fontSize: "16px" }} />
  ),
  getItem(
    <Link to="nguyenvatlieu">Nguyên vật liệu</Link>,
    "2",
    <GoldFilled style={{ fontSize: "16px" }} />
  ),
  getItem(
    "Định mức vật tư",
    "3",
    <BarChartOutlined style={{ fontSize: "16px" }} />
  ),
  getItem("Nhân sự", "4", <TeamOutlined style={{ fontSize: "16px" }} />),
  getItem(
    "Quản lý dự án",
    "5",
    <ClusterOutlined style={{ fontSize: "16px" }} />
  ),
  getItem(
    "Danh sách yêu cầu",
    "sub1",
    <UnorderedListOutlined style={{ fontSize: "16px" }} />,
    [
      getItem("Tạo mới vật tư", "6"),
      getItem("Chỉnh sửa vật tư", "7"),
      getItem("Ngừng cung cấp vật tư", "8"),
    ]
  ),
  getItem("Thống kê", "9", <SignalFilled style={{ fontSize: "16px" }} />),
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
            marginBottom: "10px",
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
        <Content
          style={{
            margin: "0 10px",
            padding: "5px",
            // minHeight: 360,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {/* <Breadcrumb
              style={{ margin: "16px 0" }}
              items={[{ title: "User" }, { title: "Bill" }]}
            /> */}
          
            <Routers />
          
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
