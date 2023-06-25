import { Input, Row, Col, Button, Divider } from "antd";
import React from "react";
import Logo from "../../../../components/Logo";
import { useNavigate } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { TbLogout } from "react-icons/tb";
import { logout } from "../../../../redux/authSlice";

const TopBar = (props) => {
  const { className, currentUser } = props;

  // console.log(currentUser);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return <>
    <Row className={"bg-transparent flex items-center h-fit w-full " + className}>
      <Col span={4} className="px-1">
        <Logo color={"#103479"} size={60} />
      </Col>
      <Col span={12} offset={1} className="relative flex items-center mr-10">
        <Input
          className="rounded-xl h-10 placeholder:text-black p-5" 
          placeholder="Nhập nơi bạn muốn tới?" 
        />
        <Button className="absolute right-0 m-5 border-none p-0 rounded-full">
          <MdSearch size={15} />
        </Button>
      </Col>
      {
        currentUser
        ?
          <Col span={6} className="flex justify-end items-center">
            <Button className="border-none text-white text-l" onClick={() => navigate("/company/about-us")}>{currentUser.name}'s Tours</Button>
            <Row className="bg-white h-5" style={{width: "1px"}}></Row>
            <Button className="border-none text-white text-l" onClick={() => navigate("/forum")}>Forums</Button>
            <Row className="bg-white h-5" style={{width: "1px"}}></Row>
            <Button className="border-none text-white text-l" onClick={() => navigate("/ask-something")}>Q & A</Button>
            <Row className="bg-white h-5" style={{width: "1px"}}></Row>
            <Button className="border-none" onClick={() => dispatch(logout())}><TbLogout color="white" /></Button>
          </Col>  
          :
        <Col span={6} className="flex justify-end items-center">
          <Button className="border-none text-black text-l" onClick={() => navigate("/company/about-us")}>About us</Button>
          <Row className="bg-black h-5" style={{width: "1px"}}></Row>
          <Button className="border-none text-black text-l" onClick={() => navigate("/login")}>Đăng nhập</Button>
          <Row className="bg-black h-5" style={{width: "1px"}}></Row>
          <Button className="border-none text-black text-l" onClick={() => navigate("/register")}>Đăng ký</Button>
        </Col>  
      }
    </Row>
  </>;
};

export default TopBar;

// TODO: search icon