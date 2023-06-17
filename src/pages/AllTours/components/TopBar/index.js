import { Input, Row, Col, Button } from "antd";
import React from "react";
import Logo from "../../../../components/Logo";
import { useNavigate } from "react-router-dom";
import { MdSearch } from "react-icons/md";

const TopBar = (props) => {
  const { className } = props;
  const navigate = useNavigate();
  return <>
    <Row className={"bg-transparent flex items-center h-fit w-full " + className}>
      <Col span={4} className="px-1">
        <Logo color={"#103479"} size={60} />
      </Col>
      <Col span={13} offset={1} className="relative flex items-center">
        <Input
          className="rounded-xl h-10 placeholder:text-black p-5" 
          placeholder="Nhập nơi bạn muốn tới?" 
        />
        <Button className="absolute right-0 m-5 border-none p-0 rounded-full">
          <MdSearch size={15} />
        </Button>
      </Col>
      <Col span={6} className="flex justify-end items-center">
        <Button className="border-none text-black text-l">About us</Button>
        <Row className="bg-black h-5" style={{width: "1px"}}></Row>
        <Button className="border-none text-black text-l" onClick={() => navigate("/login")}>Đăng nhập</Button>
        <Row className="bg-black h-5" style={{width: "1px"}}></Row>
        <Button className="border-none text-black text-l" onClick={() => navigate("/register")}>Đăng ký</Button>
      </Col>
    </Row>
  </>;
};

export default TopBar;

// TODO: search icon