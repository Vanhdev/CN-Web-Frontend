import React from "react";
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";
import bg from "../../assets/images/alltour-bg.png"
import { Image, Row, Col } from "antd";
import "../../assets/fonts.css";

const AllToursPage = () => {
  return <>
    <Row className="w-full relative">
      <Image src={bg} width={"100%"} preview={false} />
      <TopBar className="absolute top-0 left-0 right-0" />
      <NavBar className="absolute bottom-0 left-0 right-0" />
    </Row>
    <Row className="w-full m-5">
      <Col span={24} className="text-xl" style={{fontFamily: "Signika"}}>Những trải nghiệm văn hoá đặc sắc!</Col>
    </Row>
    <Row className="w-full m-5">
      <Col span={24} className="text-xl" style={{fontFamily: "Signika"}}>Điểm đến mới cập nhật!</Col>
    </Row>
    <Row className="w-full m-5">
      <Col span={24} className="text-xl" style={{fontFamily: "Signika"}}>Perfect Destination!</Col>
    </Row>
  </>
}

export default AllToursPage;

// TODO: tourInfoBox component