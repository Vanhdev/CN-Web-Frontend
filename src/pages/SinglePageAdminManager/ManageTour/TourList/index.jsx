import React, { useEffect, useState } from "react";
import "../../../../assets/fonts.css";
import { Row, Table, Input, Col, Button, message } from "antd";
import { deleteTour, getAllBooking, getAllTour, getAllTourTableData } from "../../../../API";
import { MdSearch } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TourList = () => {
    const accessToken = useSelector(state => state.auth.login.currentUser.accessToken);
    const [dataSource, setDataSource] = useState([]);
    const [value, setValue] = useState('');

    useEffect(() => {
        getAllBooking(accessToken).then(data => setDataSource(data.data.map(item => {
            return {
                id: item.tour.id,
                tour: item.tour.name,
                user: item.user.name,
                email: item.user.email,
                date: item.tour.start_date,
                time: item.tour.duration + " ngày"
            }
        })));
    }, []);


    const columns = [
        {
            title: "ID Tour",
            dataIndex: "id",
            key: "id"
        },
        {
            title: "Tên tour",
            dataIndex: "tour",
            key: "tour"
        },
        {
            title: "Tên khách hàng",
            dataIndex: "user",
            key: "user"
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email"
        },
        {
            title: "Ngày bắt đầu",
            dataIndex: "date",
            key: "date"
        },
        {
            title: "Thời lượng",
            dataIndex: "time",
            key: "time"
        }
    ]

    return (
        <>
            <Row className="w-full pl-10 pt-10" style={{ fontFamily: "Signika", fontSize: "25px" }}>Danh sách tour được đặt</Row>
            <Row className="w-full px-20 pt-5 flex justify-between items-center">
                <Row style={{ fontFamily: "Signika", fontSize: "20px", color: "#DC4E62" }}>Tổng số: {dataSource.length} tours</Row>
                <Col span={7} offset={1} className="relative flex items-center" style={{ fontFamily: "Signika", fontSize: "20px" }}>
                    Search
                    <Input
                        className="rounded-xl h-10 placeholder:text-black p-5 ml-3"
                        onChange={e => setValue(e.target.value)}
                        style={{ fontFamily: "Signika" }}
                    />
                    <Button className="absolute right-0 m-5 border-none p-0 rounded-full">
                        <MdSearch size={15} />
                    </Button>
                </Col>
            </Row>
            <Table dataSource={dataSource.filter(item => item.email.includes(value))} columns={columns} className="px-20 pt-5" bordered />
        </>
    )
}

export default TourList;