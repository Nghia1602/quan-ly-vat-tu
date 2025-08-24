import React from "react";
import { SearchOutlined, AudioOutlined, ShareAltOutlined} from "@ant-design/icons";
import { Input, Space, Button, Tooltip, Flex } from "antd";

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);

const onSearch = (value, _e, info) => {
  console.log(info?.source, value);
};

export const InputSearch = (props) => (
  <Space style={{ width: "300px" }} direction="vertical">
    <Search placeholder="input search text" onSearch={onSearch} enterButton style={props.style}/>
  </Space>
);

export const FilterButtons = (props) => (
  <Flex wrap gap="small">
    
    <Button type="primary" icon={<ShareAltOutlined /> } style={props.style} >
      Bộ lọc
    </Button>
  </Flex>
);
