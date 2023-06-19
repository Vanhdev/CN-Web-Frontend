import React from "react";
import TopBar from "./components/TopBar";
import bg from "../../assets/images/alltour-bg.jpg";
import { Image, Row, Col, Button } from "antd";
import "../../assets/fonts.css";
import TourBox from "../../components/TourBox";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import PerfectDestination from "./components/PerfectDestination";
import { useSelector } from "react-redux";

const HomePage = () => {

  return <>
    <Row className="w-full relative">
      <Image src={bg} width={"100%"} preview={false} />
      <TopBar className="absolute top-0 left-0 right-0" />
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
    </Row>
    <Row className="w-full p-5">
      <Col span={24} className="text-xl" style={{fontFamily: "Signika"}}>Điểm đến mới cập nhật!</Col>
      <Row className="w-full">
        <TourBox />
        <TourBox />
        <TourBox />
      </Row>
    </Row>
    <PerfectDestination />
    <Footer />
  </>
}

export default HomePage;