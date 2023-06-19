import React, { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import bg from "../../assets/images/alltour-bg.png";
import { Image, Row, Col, Button, Pagination } from "antd";
import "../../assets/fonts.css";
import TourBox from "../../components/TourBox";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import PerfectDestination from "./components/PerfectDestination";
import TopicBox from "./components/TopicBox";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import axios from "axios";

const HomePage = () => {
  const navigate= useNavigate();
  const [tourList, setTourList] = useState([]);
  const [pos, setPos] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:8086/admin/get-tour?id=all").then(res => setTourList(res.data));
  },[]);

  const itemRender = (_, type, originalElement) => {
    if (type === 'prev') {
      return <BiSkipPrevious size={32} />;
    }
    if (type === 'next') {
      return <BiSkipNext size={32} />;
    }
    return originalElement;
  };

  return <>
    <Row className="w-full relative">
      <Image src={bg} width={"100%"} preview={false} />
      <TopBar className="absolute top-0 left-0 right-0 mt-3" />
    </Row>
    <TopicBox />
    <Row className="w-full p-5">
      <Col span={24} className="text-xl" style={{fontFamily: "Signika"}}>Những trải nghiệm văn hoá đặc sắc!</Col>
      {pos < tourList.length ? <TourBox tour={tourList[pos]} /> : null}
      {pos+1 < tourList.length ? <TourBox tour={tourList[pos+1]} /> : null}
      {pos+2 < tourList.length ? <TourBox tour={tourList[pos+2]} /> : null}
      {pos+3 < tourList.length ? <TourBox tour={tourList[pos+3]} /> : null}
      {pos+4 < tourList.length ? <TourBox tour={tourList[pos+4]} /> : null}
      {pos+5 < tourList.length ? <TourBox tour={tourList[pos+5]} /> : null}
    </Row>
    <Row className="w-full flex justify-end">
      <Pagination 
        defaultCurrent={1} 
        total={tourList.length} 
        pageSize={6} 
        itemRender={itemRender} 
        className="pr-9" 
        showSizeChanger={false} 
        onChange={(pageNumber) => setPos(6*(pageNumber - 1))}
      />
    </Row>
    <Row className="w-full p-5">
      <Col span={24} className="text-xl" style={{fontFamily: "Signika"}}>Điểm đến mới cập nhật!</Col>
      <Row className="w-full">
        <TourBox tour={tourList[pos]} />
        <TourBox tour={tourList[pos]} />
        <TourBox tour={tourList[pos]} />
      </Row>
    </Row>
    <PerfectDestination />
    <Footer />
  </>
}

export default HomePage;