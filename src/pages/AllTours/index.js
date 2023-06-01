import React from "react";
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";
import bg from "../../assets/images/alltour-bg.png"
import { Image, Row, Col, Button } from "antd";
import "../../assets/fonts.css";
import TourBox from "./components/TourBox";
import { IoIosArrowRoundForward } from "react-icons/io";

const HomePage = () => {
  return <>
    <Row className="w-full relative">
      <Image src={bg} width={"100%"} preview={false} />
      <TopBar className="absolute top-0 left-0 right-0" />
      <NavBar className="absolute bottom-0 left-0 right-0" />
    </Row>
    <Row className="w-full p-5">
      <Col span={24} className="text-xl" style={{fontFamily: "Signika"}}>Những trải nghiệm văn hoá đặc sắc!</Col>
      <Row className="w-full">
        <TourBox />
        <TourBox />
        <TourBox />
      </Row>
      <Row className="w-full">
        <TourBox />
        <TourBox />
        <TourBox />
      </Row>
      <Col span={24} className="flex justify-end">
        <Button type="link" className="border-none p-0 translate-y-1">
          <Row>
            <Col style={{fontFamily: "Signika", fontSize: 15, color: "#4B59D7"}}>Xem tất cả tours</Col>
            <Col className="flex items-center">
              <IoIosArrowRoundForward size={25} color={"#4B59D7"} />
            </Col>
          </Row>
        </Button>
      </Col>
    </Row>
    <Row className="w-full p-5">
      <Col span={24} className="text-xl" style={{fontFamily: "Signika"}}>Điểm đến mới cập nhật!</Col>
      <Row className="w-full">
        <TourBox />
        <TourBox />
        <TourBox />
      </Row>
    </Row>
    <Row className="w-full p-5">
      <Col span={24} className="text-xl" style={{fontFamily: "Signika"}}>Perfect Destination!</Col>
    </Row>
  </>
}

export default HomePage;

// TODO: tourInfoBox component