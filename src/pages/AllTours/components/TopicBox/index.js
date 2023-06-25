import React, { useState } from "react";
import { TbBeach } from "react-icons/tb";
import { Row, Col, Button } from "antd";
import { FaMountain } from "react-icons/fa";
import { MdForest, MdTempleBuddhist, MdBalcony } from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";
import { GiIsland, GiCampingTent, GiCaveEntrance, GiFarmTractor, GiBamboo, GiMushroomHouse } from "react-icons/gi"; 

import "../../../../assets/fonts.css";

const TopicBox = () => {
    const topicList = {"sea": "Biển", "mountain": "Núi", "forest": "Rừng", "resort": "Resort", "cave": "Hang động",
                    "island": "Đảo", "countryside": "Vùng quê", "city": "Đô thị", "farm": "Nông trại",
                    "park": "Công viên", "camp": "Cắm trại", "temple": "Chùa"};
    const [topic, setTopic] = useState("sea");
    return <>
        <Row className="w-full p-5">
            <Col span={24} className="text-xl" style={{fontFamily: "Signika"}}>Chủ đề</Col>
            <Row className="w-full">
                {Object.keys(topicList).map((key) => 
                    <>
                        <Col span={4} className="flex justify-center px-2 py-1" key={key}>
                            <Button className="border-none rounded-full hover:bg-slate-100" style={{width: "100px", height: "100px"}} onClick={() => setTopic(key)}>
                                <Row className="w-full flex justify-center">
                                    {key === "sea" ? <TbBeach color={topic === key ? "#4B59D7" : "black"} size={30} /> : null}
                                    {key === "mountain" ? <FaMountain color={topic === key ? "#4B59D7" : "black"} size={30} /> : null}
                                    {key === "forest" ? <MdForest color={topic === key ? "#4B59D7" : "black"} size={30} /> : null}
                                    {key === "resort" ? <MdBalcony color={topic === key ? "#4B59D7" : "black"} size={30} /> : null}
                                    {key === "cave" ? <GiCaveEntrance color={topic === key ? "#4B59D7" : "black"} size={30} /> : null}
                                    {key === "island" ? <GiIsland color={topic === key ? "#4B59D7" : "black"} size={30} /> : null}
                                    {key === "countryside" ? <GiBamboo color={topic === key ? "#4B59D7" : "black"} size={30} /> : null}
                                    {key === "city" ? <RiHotelLine color={topic === key ? "#4B59D7" : "black"} size={30} /> : null}
                                    {key === "farm" ? <GiFarmTractor color={topic === key ? "#4B59D7" : "black"} size={30} /> : null}
                                    {key === "park" ? <GiMushroomHouse color={topic === key ? "#4B59D7" : "black"} size={30} /> : null}
                                    {key === "camp" ? <GiCampingTent color={topic === key ? "#4B59D7" : "black"} size={30} /> : null}
                                    {key === "temple" ? <MdTempleBuddhist color={topic === key ? "#4B59D7" : "black"} size={30} /> : null}
                                </Row>
                                <Row className="w-full flex justify-center" style={{color: topic === key ? "#4B59D7": "black", fontFamily: "Signika"}}>
                                    {topicList[key]}
                                </Row>
                            </Button>
                        </Col>    
                    </>
                )}      
            </Row>
        </Row>
    </>;
};

export default TopicBox;

// TODO: icons