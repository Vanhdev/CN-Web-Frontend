import { Button, Col, Row } from "antd";
import React from "react";
import { MdTempleBuddhist } from "react-icons/md";
import { IoFastFoodSharp } from "react-icons/io5";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { IoMdCompass } from "react-icons/io";
import "../../../../assets/fonts.css";

const NavBar = (props) => {
  const { className } = props;
  return <>
    <Row className={"bg-transparent flex items-center px-10 h-fit w-full " + className}>

      <Col span={6} className="flex justify-center border-solid">
        <Button type="link" className="text-black bg-white h-10 rounded-none rounded-t-xl">
          <Row className="flex items-center justify-center text-xl" style={{fontFamily: "Dosis", fontWeight: "bold"}}>
            <MdTempleBuddhist size={20} color={"black"} className="mr-1" />
            VĂN HOÁ
          </Row>
        </Button>
      </Col>
      
      <Col span={6} className="flex justify-center border-solid">
        <Button type="link" className="text-white bg-none h-10 rounded-none rounded-t-xl">
          <Row className="flex items-center justify-center text-xl" style={{fontFamily: "Dosis", fontWeight: "bold"}}>
            <IoFastFoodSharp size={20} color={"white"} className="mr-1" />
            ẨM THỰC
          </Row>
        </Button>
      </Col>

      <Col span={6} className="flex justify-center border-solid">
        <Button type="link" className="text-white bg-none h-10 rounded-none rounded-t-xl">
          <Row className="flex items-center justify-center text-xl" style={{fontFamily: "Dosis", fontWeight: "bold"}}>
            <GiPlantsAndAnimals size={20} color={"white"} className="mr-1" />
            THIÊN NHIÊN
          </Row>
        </Button>
      </Col>

      <Col span={6} className="flex justify-center border-solid">
        <Button type="link" className="text-white bg-none h-10 rounded-none rounded-t-xl">
          <Row className="flex items-center justify-center text-xl" style={{fontFamily: "Dosis", fontWeight: "bold"}}>
            <IoMdCompass size={20} color={"white"} className="mr-1" />
            KHÁM PHÁ
          </Row>
        </Button>
      </Col>

    </Row>
  </>
}

export default NavBar;

// TODO: hover icon