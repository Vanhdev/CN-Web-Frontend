import React, { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import bg from "../../assets/images/alltour-bg.jpg";
import bgLogin from "../../assets/images/alltour-bg-login.jpg";
import { Image, Row, Col, Button, Pagination } from "antd";
import "../../assets/fonts.css";
import TourBox from "../../components/TourBox";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import PerfectDestination from "./components/PerfectDestination";
import TopicBox from "./components/TopicBox";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { getAllTour, getPlaceById } from "../../API";
import { useSelector } from "react-redux";

 const topicList = {2: "Biển", 3: "Núi", 4: "Rừng", 5: "Resort", 6: "Hang động",
                    7: "Đảo", 8: "Vùng quê", 9: "Đô thị", 10: "Nông trại",
                    11: "Công viên", 12: "Cắm trại", 1: "Chùa"};

const HomePage = () => {
  const navigate= useNavigate();
  const [tourList, setTourList] = useState([]);
  const [topic, setTopic] = useState('2');
  const [place, setPlace] = useState(0);
  const [placeName, setPlaceName] = useState({});
  const [pos, setPos] = useState(0);

  const currentUser = useSelector(state => state.auth.login.currentUser);

  useEffect(() => {
    if(place === 0)
      getAllTour().then(res => setTourList(res.data.filter(item => item.type_id === parseInt(topic))));
    else {
      getAllTour().then(res => setTourList(res.data.filter(item => item.place.id === place)));
      getPlaceById(place).then(data => setPlaceName(data.place));
    }
  },[topic, place]);

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
      <Image src={currentUser ? bgLogin : bg} width={"100%"} preview={false} />
      <TopBar className="absolute top-0 left-0 right-0 mt-3" currentUser={currentUser} />
    </Row>
    {place === 0 ? <TopicBox topicList={topicList} topic={topic} setTopic={setTopic} /> : null}
    <Row className="w-full p-5">
      {place === 0 ?
      <Col span={24} style={{fontFamily: "Signika", color: "#4B59D7", fontSize: "25px", fontWeight: "bold"}}>
        {topicList[topic]}
      </Col>
      :
      <>
      <Col span={24} className="flex" style={{fontFamily: "Signika", fontSize: "25px", fontWeight: "bold"}}>
        Các địa điểm nổi tiếng tại: <Row className="w-fit ml-2" style={{fontFamily: "Signika", color: "#4B59D7", fontSize: "25px", fontWeight: "bold"}}>{placeName.name}</Row>
      </Col>
      <Col span={24} className="flex" style={{fontFamily: "Signika", fontSize: "20px"}}>
        {placeName.description}
      </Col>
      </>
      }
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
    {/* <Row className="w-full p-5">
      <Col span={24} className="text-xl" style={{fontFamily: "Signika"}}>Điểm đến mới cập nhật!</Col>
      <Row className="w-full">
        {tourList.length > 2 ? <TourBox tour={tourList[tourList.length - 3]} /> : null}
        {tourList.length > 1 ? <TourBox tour={tourList[tourList.length - 2]} /> : null}
        {tourList.length > 0 ? <TourBox tour={tourList[tourList.length - 1]} /> : null}
      </Row>
    </Row> */}
    <PerfectDestination setPlace={setPlace} />
    <Footer />
  </>
}

export default HomePage;