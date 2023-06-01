import React from "react";
import bg from "../../../../assets/images/alltour-bg.png"
import { Image, Row, Col, Button, Divider } from "antd";
import "../../../../assets/fonts.css";
import { AiOutlineHeart, AiTwotoneCalendar } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";

const TourBox = () => {
  return <>
    <Col span={8} className="p-8">
      <Row className="w-full relative flex justify-center">
        <Image src={bg} width={"100%"} className="rounded-2xl" preview={false} />
        <Row className="w-full bg-none absolute top-0 left-0 right-0 m-5 flex items-center">
          <Col 
            span={3} 
            className="text-white text-base flex items-center justify-center rounded-lg p-1" 
            style={{fontFamily: "Signika", backgroundColor: "#DC4E62"}}
          >
            8% off
          </Col>
          <Col offset={17}>
            <Button className="border-none hover:border-none flex items-center p-0">
              <AiOutlineHeart size={30} />
            </Button>
          </Col>
        </Row>
        <Col 
          span={16} 
          offset={4} 
          className="bg-white absolute bottom-0 left-0 right-0 rounded-lg translate-y-1/2 p-2"
          style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}
        >
          <Row>
            <Col>
              <AiTwotoneCalendar size={20} />
            </Col>
            <Col offset={1} style={{fontFamily: "Signika"}}>
              6 ngày
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="pt-8 -translate-y-5 rounded-b-lg" style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
        <Row className="p-5"> 
          <Col span={24} style={{fontFamily: "Signika", fontSize: 23}}>Waterfalls, Geysers and Glacier</Col>
          <Row className="w-full">
            <Col className="flex items-center"><MdOutlineLocationOn color="#ABB8C3" size={18} /></Col>
            <Col style={{fontFamily: "Signika", fontSize: 18, color: "#ABB8C3"}}>Warsaw, Poland</Col>
          </Row>
          <Divider className="my-3 w-full" color={"#ABB8C3"} />
          <Row className="w-full flex justify-between">
            <Col>
              <Row className="w-full" style={{fontFamily: "Signika", fontSize: 15, color: "#ABB8C3"}}>Chỉ từ</Row>
              <Row className="w-full" style={{fontFamily: "Signika", fontSize: 18, color: "#4B59D7", fontWeight: "bold"}}>$100.00</Row>
            </Col>
            <Col className="flex items-end">
              <Button type="link" className="border-none p-0 translate-y-1">
                <Row>
                  <Col style={{fontFamily: "Signika", fontSize: 15, color: "#4B59D7"}}>Chi tiết</Col>
                  <Col className="flex items-center">
                    <IoIosArrowRoundForward size={25} color={"#4B59D7"} />
                  </Col>
                </Row>
              </Button>
            </Col>
          </Row>
        </Row>
      </Row>
    </Col>
  </>
}

export default TourBox;

// TODO: tourInfoBox component