import React from "react";
import footerBg from "../../assets/images/footer-bg.svg";
import { Image, Row, Button } from "antd";
import "../../assets/fonts.css";

function FooterCompany() {
    return (
        <div>
            <Row className="w-full relative">
                <Image src={footerBg} width={"100%"} preview={false} />
                <Row className="w-full flex justify-center absolute bottom-1/3">
                    <Row className="w-full flex justify-center mb-2">
                        <Button className="border-none text-white text-xl flex items-center font-bold mx-2" style={{fontFamily: "Signika"}}>Company</Button>
                        <Button className="border-none text-white text-xl flex items-center font-bold mx-2" style={{fontFamily: "Signika"}}>About Us</Button>
                        <Button className="border-none text-white text-xl flex items-center font-bold mx-2" style={{fontFamily: "Signika"}}>Contact Us</Button>
                        <Button className="border-none text-white text-xl flex items-center font-bold mx-2" style={{fontFamily: "Signika"}}>Travel Guides</Button>
                        <Button className="border-none text-white text-xl flex items-center font-bold mx-2" style={{fontFamily: "Signika"}}>Policy</Button>
                    </Row>
                    <Row className="text-xl text-white font-bold" style={{fontFamily: "Signika"}}>&copy; 2008-2023 TripWise. Made in Viet Nam.</Row>
                </Row>
            </Row>
        </div>    
    );
};

export default FooterCompany;