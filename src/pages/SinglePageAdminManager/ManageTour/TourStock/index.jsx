import React, { useEffect, useState } from "react";
import "../../../../assets/fonts.css";
import { Row, Table, Input, Col, Button, message } from "antd";
import { deleteTour, getAllTour, getAllTourTableData } from "../../../../API";
import { MdSearch } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const typeArray = ["", "Chùa", "Biển", "Núi", "Rừng", "Resort", "Hang động", "Đảo", "Vùng quê", "Đô thị", "Nông trại", "Công viên", "Cắm trại"];

export const arrivalArray = ["", "08:30", "09:30", "10:30", "11:30", "12:30"];

export const ActionBox = (props) => {
    const { id, setDataSource } = props;
    const navigate = useNavigate();
    const accessToken = useSelector(state => state.auth.login.currentUser.accessToken);
    const handleDelete = () => {
        deleteTour(id, accessToken).then(() => {
            getAllTourTableData(setDataSource);
        });
    }

    return <>
        <Row className="w-full">
            <Col span={12} className="flex justify-end">
                <Button className="border-none m-0 p-0">
                    <FiEdit color="#2DD75D" />
                </Button>
            </Col>
            <Col span={12}>
                <Button className="border-none m-0 p-0" onClick={() => handleDelete()}>
                    <RiDeleteBin5Fill color="#F53939" />
                </Button>
            </Col>
        </Row>
    </>;
}

const TourStock = () => {
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        getAllTourTableData(setDataSource);
    },[]);


    const columns = [
        {
            title: "Tên",
            dataIndex: "name",
            key: "name",
            sorter: (a, b) => a.name.length - b.name.length
        },
        {
            title: "Loại",
            dataIndex: "type",
            key: "type",
            sorter: (a, b) => a.type.length - b.type.length
        },
        {
            title: "Giá",
            dataIndex: "price",
            key: "price",
            sorter: (a, b) => a.price - b.price
        },
        {
            title: "Thời lượng",
            dataIndex: "duration",
            key: "duration",
            sorter: (a, b) => a.duration.length - b.duration.length
        },
        {
            title: "Số lượng người tham gia",
            dataIndex: "slots",
            key: "slots",
            sorter: (a, b) => a.slots.length - b.slots.length
        },
        {
            title: "Điểm đến",
            dataIndex: "place",
            key: "place",
            sorter: (a, b) => a.place.length - b.place.length
        },
        {
            title: "Hành động",
            dataIndex: "action",
            key: "action",
        }
    ]

    return(
        <>
            <Row className="w-full pl-10 pt-10" style={{ fontFamily: "Signika", fontSize: "25px" }}>Thêm điểm đến</Row>
            <Row className="w-full px-20 pt-5 flex justify-between items-center">
                <Row style={{ fontFamily: "Signika", fontSize: "20px", color: "#DC4E62" }}>Tổng số: {dataSource.length} tours</Row>
                <Col span={7} offset={1} className="relative flex items-center" style={{ fontFamily: "Signika", fontSize: "20px"}}>
                    Search
                    <Input
                        className="rounded-xl h-10 placeholder:text-black p-5 ml-3"
                    />
                    <Button className="absolute right-0 m-5 border-none p-0 rounded-full">
                        <MdSearch size={15} />
                    </Button>
                </Col>
            </Row>
            <Table dataSource={dataSource} columns={columns} className="px-20 pt-5" bordered />
        </>
    )
}

export default TourStock;