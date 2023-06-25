import React from "react";
import { Row, Col } from "antd";
import "../../../assets/fonts.css";
import { useSelector } from "react-redux";

const ManageStatistic = () => {
    const accessToken = useSelector(state => state.auth.login.currentUser.accessToken);
    return(
        <>
            <Row className="w-full px-60 py-10">
                <Col span={8} className="pr-5">
                    <Row className="flex justify-center pb-3 text-xl border-solid border-x-2" style={{fontFamily: "Signika"}}>Tổng tour hiện có</Row>
                    <Row 
                        className="flex items-center justify-center text-white text-6xl" 
                        style={{backgroundColor: "#5A62AA", height: "180px", fontFamily: "Signika", fontWeight: 700}}
                    >
                        1204
                    </Row>
                </Col>
                <Col span={8} className="px-5">
                    <Row className="flex justify-center pb-3 text-xl border-solid border-x-2" style={{fontFamily: "Signika"}}>Tổng tour được đặt</Row>
                    <Row 
                        className="flex items-center justify-center text-white text-6xl" 
                        style={{backgroundColor: "#DC4E62", height: "180px", fontFamily: "Signika", fontWeight: 700}}
                    >
                        1204
                    </Row>
                </Col>
                <Col span={8} className="pl-5">
                    <Row className="flex justify-center pb-3 text-xl border-solid border-x-2" style={{fontFamily: "Signika"}}>Tổng số khách hàng</Row>
                    <Row 
                        className="flex items-center justify-center text-white text-6xl" 
                        style={{backgroundColor: "#5A62AA", height: "180px", fontFamily: "Signika", fontWeight: 700}}
                    >
                        1204
                    </Row>
                </Col>
                <Col span={24} className="mt-10">
                    <Row className="w-full flex justify-center pb-3 text-xl border-solid border-x-2" style={{fontFamily: "Signika"}}>Tổng doanh thu</Row>
                    <Row 
                        className="w-full flex items-center justify-center text-white text-6xl" 
                        style={{backgroundColor: "#DC4E62", height: "180px", fontFamily: "Signika", fontWeight: 700}}
                    >
                        $200.00
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default ManageStatistic;