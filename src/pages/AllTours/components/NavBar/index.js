import { Button, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { MdTempleBuddhist } from "react-icons/md";
import { IoFastFoodSharp } from "react-icons/io5";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { IoMdCompass } from "react-icons/io";
import "../../../../assets/fonts.css";

const NavBarItem = (props) => {
  const [hover, setHover] = useState(false);
  const { content, tag, setCurrentTag, currentTag } = props;
  const styles = {
    button: (tag === currentTag || hover) ? "text-black bg-white" : "text-white bg-none",
    iconColor: hover ? "#7CBBFF" : (tag === currentTag) ? "black" : "white"
  };

  return <>
    <Button 
      type="link" 
      className={"h-10 rounded-none rounded-t-xl " + styles.button}
      onClick={() => setCurrentTag(tag)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Row 
        className="flex items-center justify-center text-xl" 
        style={{fontFamily: "Dosis", fontWeight: "bold"}}
      >
        {tag === "vanhoa"? <MdTempleBuddhist size={20} color={styles.iconColor} className="mr-1" /> : null}
        {tag === "amthuc"? <IoFastFoodSharp size={20} color={styles.iconColor} className="mr-1" /> : null}
        {tag === "thiennhien"? <GiPlantsAndAnimals size={20} color={styles.iconColor} className="mr-1" /> : null}
        {tag === "khampha"? <IoMdCompass size={20} color={styles.iconColor} className="mr-1" /> : null}
        {content}
      </Row>
    </Button>
  </>
}

const NavBar = (props) => {
  const { className } = props;
  const [currentTag, setCurrentTag] = useState("vanhoa");

  useEffect(() => {
    console.log("chance");
  }, [currentTag]);

  return <>
    <Row className={"bg-transparent flex items-center px-10 h-fit w-full " + className}>
      <Col span={6} className="flex justify-center border-solid">
        <NavBarItem content={"VĂN HOÁ"} tag={"vanhoa"} currentTag={currentTag} setCurrentTag={setCurrentTag} />
      </Col>  
      <Col span={6} className="flex justify-center border-solid">
        <NavBarItem content={"ẨM THỰC"} tag={"amthuc"} currentTag={currentTag} setCurrentTag={setCurrentTag} />
      </Col>
      <Col span={6} className="flex justify-center border-solid">
        <NavBarItem content={"THIÊN NHIÊN"} tag={"thiennhien"} currentTag={currentTag} setCurrentTag={setCurrentTag} />
      </Col>
      <Col span={6} className="flex justify-center border-solid">
        <NavBarItem content={"KHÁM PHÁ"} tag={"khampha"} currentTag={currentTag} setCurrentTag={setCurrentTag} />
      </Col>
    </Row>
  </>
}

export default NavBar;