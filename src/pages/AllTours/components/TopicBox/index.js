import React, { useState } from "react";
import { TbBeach } from "react-icons/tb";
import { Row, Col, Button } from "antd";
import { FaMountain } from "react-icons/fa";
import { MdForest, MdTempleBuddhist, MdBalcony } from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";
import { GiIsland, GiCampingTent, GiCaveEntrance, GiFarmTractor, GiBamboo, GiMushroomHouse } from "react-icons/gi"; 

import "../../../../assets/fonts.css";

const TopicBox = (props) => {
    const {topicList, topic, setTopic} = props;
    return <>
        <Row className="w-full p-5">
            <Col span={24} className="text-xl" style={{fontFamily: "Signika", color: "#4B59D7", fontSize: "25px", fontWeight: "bold"}}>Chủ đề</Col>
            <Row className="w-full">
                {Object.keys(topicList).map((key) => 
                    <>
                        <Col span={4} className="flex justify-center px-2 py-1" key={key}>
                            <Button className="border-none rounded-full hover:bg-slate-100" style={{width: "100px", height: "100px"}} onClick={() => setTopic(key)}>
                                <Row className="w-full flex justify-center">
                                    {key === '2' ? <TbBeach color={topic === key ? "#4B59D7" : "black"} size={30} /> : null}
                                    {key === '3' ? <FaMountain color={topic === key ? "#4B59D7" : "black"} size={30} /> : null}
                                    {key === '4' ? <MdForest color={topic === key ? "#4B59D7" : "black"} size={30} /> : null}
                                    {key === '5' ? <MdBalcony color={topic === key ? "#4B59D7" : "black"} size={30} /> : null}
                                    {key === '6' ? <GiCaveEntrance color={topic === key ? "#4B59D7" : "black"} size={30} /> : null}
                                    {key === '7' ? <GiIsland color={topic === key ? "#4B59D7" : "black"} size={30} /> : null}
                                    {key === '8' ? <GiBamboo color={topic === key ? "#4B59D7" : "black"} size={30} /> : null}
                                    {key === '9' ? <RiHotelLine color={topic === key ? "#4B59D7" : "black"} size={30} /> : null}
                                    {key === '10' ? <GiFarmTractor color={topic === key ? "#4B59D7" : "black"} size={30} /> : null}
                                    {key === '11' ? <GiMushroomHouse color={topic === key ? "#4B59D7" : "black"} size={30} /> : null}
                                    {key === '12' ? <GiCampingTent color={topic === key ? "#4B59D7" : "black"} size={30} /> : null}
                                    {key === '1' ? <MdTempleBuddhist color={topic === key ? "#4B59D7" : "black"} size={30} /> : null}
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