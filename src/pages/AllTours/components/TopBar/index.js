import { Input, Row, Col, Button } from "antd";
import React from "react";
import Logo from "../../../../components/Logo";

const TopBar = () => {
  return <>
    <Row className="bg-neutral-700 flex items-center">
      <Col span={4} className="px-1">
        <Logo color={"#103479"} size={60} />
      </Col>
      <Col span={13} offset={1}>
        <Input className="rounded-xl h-10 placeholder:text-black p-5" placeholder="Nhập nơi bạn muốn tới?" />
      </Col>
      <Col span={6} className="flex justify-end items-center">
        <Button className="border-none text-black text-l">About us</Button>
        <Row className="bg-black h-5" style={{width: "2px"}}></Row>
        <Button className="border-none text-black text-l">Đăng nhập</Button>
        <Row className="bg-black h-5" style={{width: "2px"}}></Row>
        <Button className="border-none text-black text-l">Đăng ký</Button>
      </Col>
    </Row>
  </>;
};

export default TopBar;

// TODO: search icon + bg-transparent