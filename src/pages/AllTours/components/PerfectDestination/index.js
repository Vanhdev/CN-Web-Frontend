import React, { useEffect, useState } from "react";
import pdBg from "../../../../assets/images/perfect-destination-bg.svg";
import { Image, Row, Col, Button } from "antd";
import "../../../../assets/fonts.css";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const PerfectDestination = () => {
  const [pos, setPos] = useState(0);
  const locationList = [
    {
      src: require("../../../../assets/images/newyork.svg").default,
      caption: "New York"
    },
    {
      src: require("../../../../assets/images/london.svg").default,
      caption: "London"
    },
    {
      src: require("../../../../assets/images/hanoi.svg").default,
      caption: "Hà Nội"
    }
  ];
  console.log(locationList[0].src);
  return <>
    <Row className="w-full">
      <Col span={24} className="text-xl p-5" style={{fontFamily: "Signika"}}>Perfect Destination!</Col>
      <Row className="w-full relative">
        <Image src={pdBg} width={"50%"} preview={false} />
        <Row className="w-full h-full absolute top-0 left-0">
          <Row className="w-1/3 h-full flex items-center pl-20 font-bold" style={{fontFamily: "Signika", fontSize: "22px"}}>
            ĐÂY LÀ NHỮNG ĐIỂM ĐẾN VÔ CÙNG NỔI BẬT, CÓ CÁC HOẠT ĐỘNG VÀ TRẢI NGHIỆM THÚ VỊ, CÙNG VỚI CÁC TIỆN NGHI VÀ DỊCH VỤ CHẤT LƯỢNG ĐỂ ĐẢM BẢO DU KHÁCH CÓ MỘT KỲ NGHỈ TUYỆT VỜI.
          </Row>
          <Row className="w-2/3 pl-5 pr-9 flex items-center relative">
            <Col span={8} className="px-4 relative flex justify-center">
              <Image src={locationList[pos].src} width={"100%"} preview={false} />
              <Row className="absolute bottom-0 p-3 text-white text-2xl font-bold" style={{fontFamily: "Signika"}}>{locationList[pos].caption}</Row>
            </Col>
            <Col span={8} className="px-4 relative flex justify-center">
              <Image src={locationList[(pos+1)%3].src} width={"100%"} preview={false} />
              <Row className="absolute bottom-0 p-3 text-white text-2xl font-bold" style={{fontFamily: "Signika"}}>{locationList[(pos+1)%3].caption}</Row>
            </Col>
            <Col span={8} className="px-4 relative flex justify-center">
              <Image src={locationList[(pos+2)%3].src} width={"100%"} preview={false} />
              <Row className="absolute bottom-0 p-3 text-white text-2xl font-bold" style={{fontFamily: "Signika"}}>{locationList[(pos+2)%3].caption}</Row>
            </Col>
            <Button 
              className="w-10 h-10 rounded-full absolute left-4 bg-slate-300 border-none flex items-center justify-center"
              onClick={() => setPos(pos === 0 ? 2 : pos-1)}  
            >
              <BiLeftArrow />
            </Button>
            <Button 
              className="w-10 h-10 rounded-full absolute right-8 bg-slate-300 border-none flex items-center justify-center"
              onClick={() => setPos(pos === 2 ? 0 : pos+1)}  
            >
              <BiRightArrow />
            </Button>
          </Row>
        </Row>
      </Row>
    </Row>
  </>;
};

export default PerfectDestination;