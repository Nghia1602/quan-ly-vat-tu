import React, { useState } from "react";
import { Table } from "antd";

// Cột của bảng
const columns = [
  {
    title: "STT",
    dataIndex: "stt",
    key: "stt",
  },
  {
    title: "Mã quản lý",
    dataIndex: "managercode",
    key: "managercode",
  },
  {
    title: "Tên vật tư",
    dataIndex: "itemname",
    key: "itemname",
  },
  {
    title: "Thông số kĩ thuật",
    dataIndex: "thongso",
    key: "thongso",
  },
  {
    title: "Hãng",
    dataIndex: "hang",
    key: "hang",
  },
  {
    title: "Hình ảnh",
    dataIndex: "hinhanh",
    key: "hinhanh",
  },
];

// Dữ liệu trong bảng
const data = [
  {
    key: "1",
    stt: "1",
    managercode: 32,
    itemname: "Hà Nội",
    hang: "wws",
    hinhanh: "wwas",
    thongso: "wwss",
  },
  
];

const TableMaterials = (props) => {
  const [pageSize, setPageSize] = useState(10);
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination= {{pageSize,
      showSizeChanger: true, // cho phép thay đổi số hàng / trang
        pageSizeOptions: ["10", "20", "50", "100"], // tùy chọn số hàng
        onShowSizeChange: (current, size) => setPageSize(size),}}
      // tắt phân trang nếu không cần
      bordered // thêm viền cho bảng
      style={props.style}
    />
  );
};

export default TableMaterials;
