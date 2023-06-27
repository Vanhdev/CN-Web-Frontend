import React, { useState } from "react";
import bg from "../../assets/images/alltour-bg.jpg";
import { Image, Row, Col, Button, Divider } from "antd";
import "../../assets/fonts.css";
import { AiOutlineHeart, AiTwotoneCalendar } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaStar, FaCamera } from "react-icons/fa";
import { useSelector } from "react-redux";
import { addFavouriteTour } from "../../API";

const domain = "http://localhost:8086/";

const StarRating = ({ rating5 = 500, size = 50, ...props }) => {
  let ratingArr = [];
  for (let i = 0; i < 5; i++) {
    const item = rating5 > 100 ? 100 : rating5;
    ratingArr.push(rating5 > 100 ? 100 : rating5);
    rating5 = rating5 > 100 ? rating5 - 100 : 0;
  }

  return (
    <>
      {ratingArr.map((item, index) => (
        <div
          style={{
            position: "relative",
            width: size,
            transform: `translateX(${10 * index - 95}%) translateY(25%)`
          }}
          key={index}
        >
          <div style={{ position: "absolute", zIndex: 2 }}>
            <div style={{ width: (item / 100) * size, overflow: "hidden" }}>
              <FaStar color="#2DD75D" size={size} />
            </div>
            <div style={{ width: size }}></div>
          </div>
          <div style={{ position: "absolute", zIndex: 1 }}>
            <FaStar color="#E4E5E9" size={size} />
          </div>
        </div>
      ))}
    </>
  );
};

const TourBox = (props) => {
  const { tour } = props;
  const currentUser = useSelector(state => state.auth.login.currentUser);
  const imageUrl = domain + tour?.img?.image_url.replace("\\", "/");
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    // console.log(currentUser?.accessToken, currentUser?.id, tour?.id);
    currentUser ? addFavouriteTour(currentUser?.accessToken, currentUser?.id, tour?.id) : navigate("/login");
  };

  return <>
    <Col span={8} className="p-8">
      <Row className="w-full relative flex justify-center">
        <Image 
          src={imageUrl} 
          width={"100%"}
          height={"200px"} 
          className="rounded-2xl" 
          onMouseEnter={() => setHover(true)} 
          onMouseLeave={() => setHover(false)}
        />
        <Row className="w-8/9 bg-none absolute top-0 left-0 right-0 m-5 flex items-center justify-between">
          <Col 
            span={5} 
            className="text-white text-base flex items-center justify-center rounded-lg p-1" 
            style={{fontFamily: "Signika", backgroundColor: "#DC4E62"}}
          >
            Sale off
          </Col>
          <Col span={3} className="flex justify-end">
            <Button className="border-none hover:border-none flex items-center p-0" onClick={handleClick}>
              <AiOutlineHeart size={30} />
            </Button>
          </Col>
        </Row>
        <Col 
          span={16} 
          offset={4} 
          className="bg-white absolute bottom-0 left-0 right-0 rounded-lg translate-y-1/2 p-2 flex justify-between"
          style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}
        >
          <Row className="w-1/2">
            <Col>
              <AiTwotoneCalendar size={20} />
            </Col>
            <Col offset={1} style={{fontFamily: "Signika"}}>
              {tour?.duration} ngày
            </Col>
          </Row>
          {hover ? 
            <Row className="flex items-center">
              <Col span={10} pull={4} style={{fontFamily: "Signika"}}><FaCamera /></Col>
            </Row> :
            <Row>
              <StarRating rating5={tour?.pointTour} size={10} />
            </Row>
          }
        </Col>
      </Row>
      <Row className="pt-8 -translate-y-5 rounded-b-lg w-full" style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
        <Row className="p-5 w-full"> 
          <Col span={24} style={{fontFamily: "Signika", fontSize: 23}}>{tour?.name ?? "asd"}</Col>
          <Row className="w-full">
            <Col className="flex items-center"><MdOutlineLocationOn color="#ABB8C3" size={18} /></Col>
            <Col style={{fontFamily: "Signika", fontSize: 18, color: "#ABB8C3"}}>{tour?.place.name}</Col>
          </Row>
          <Divider className="my-3 w-full" color={"#ABB8C3"} />
          <Row className="w-full flex justify-between">
            <Col>
              <Row className="w-full" style={{fontFamily: "Signika", fontSize: 15, color: "#ABB8C3"}}>Chỉ từ</Row>
              <Row className="w-full" style={{fontFamily: "Signika", fontSize: 18, color: "#4B59D7", fontWeight: "bold"}}>${tour?.price}</Row>
            </Col>
            <Col className="flex items-end">
              <Button type="link" className="border-none p-0 translate-y-1" onClick={() => navigate("detail-tour/" + tour?.id)}>
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
