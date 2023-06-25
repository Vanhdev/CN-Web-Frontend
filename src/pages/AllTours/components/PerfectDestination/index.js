import React, { useEffect, useState } from "react";
import pdBg from "../../../../assets/images/perfect-destination-bg.svg";
import { Image, Row, Col, Button } from "antd";
import "../../../../assets/fonts.css";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { getAllPlace } from "../../../../API";

const domain = "http://localhost:8086/";

const PerfectDestination = () => {
  const [pos, setPos] = useState(0);
  const [locationList, setLocationList] = useState([]);
  useState(() => {
    getAllPlace().then(data => setLocationList(data.map(item => {
      const src = domain + item?.img?.image_url.replace("\\", "/");
      return {
        src: src,
        caption: item.name
      };
    })));
  },[]);

  console.log(locationList[(pos+1)%(locationList.length)]);

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
              <Image src={locationList[pos]?.src} width={"100%"} height={"400px"} preview={false} className="rounded-xl" />
              <Row className="absolute bottom-0 p-3 text-white text-2xl font-bold" style={{fontFamily: "Signika"}}>{locationList[pos]?.caption}</Row>
            </Col>
            <Col span={8} className="px-4 relative flex justify-center">
              <Image src={locationList[(pos+1)%(locationList.length)]?.src} width={"100%"} height={"400px"}  preview={false} className="rounded-xl" />
              <Row className="absolute bottom-0 p-3 text-white text-2xl font-bold" style={{fontFamily: "Signika"}}>{locationList[(pos+1)%(locationList.length)]?.caption}</Row>
            </Col>
            <Col span={8} className="px-4 relative flex justify-center">
              <Image src={locationList[(pos+2)%(locationList.length)]?.src} width={"100%"} height={"400px"}  preview={false} className="rounded-xl" />
              <Row className="absolute bottom-0 p-3 text-white text-2xl font-bold" style={{fontFamily: "Signika"}}>{locationList[(pos+2)%(locationList.length)]?.caption}</Row>
            </Col>
            <Button 
              className="w-10 h-10 rounded-full absolute left-4 bg-slate-300 border-none flex items-center justify-center"
              onClick={() => setPos(pos === 0 ? locationList.length-1 : pos-1)}  
            >
              <BiLeftArrow />
            </Button>
            <Button 
              className="w-10 h-10 rounded-full absolute right-8 bg-slate-300 border-none flex items-center justify-center"
              onClick={() => setPos(pos === locationList.length-1 ? 0 : pos+1)}  
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