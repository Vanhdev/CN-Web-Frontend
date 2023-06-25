import React, { useEffect, useState } from "react";
import "../../../assets/fonts.css";
import { Row, Table, Input, Col, Button, message } from "antd";
import { deleteTour, getAllBooking, getAllTour, getAllTourTableData, getBookTour } from "../../../API";
import { MdHistoryEdu, MdSearch } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { typeArray } from "../ManageTour/TourStock";

const ActionBox = (props) => {
    const { id, setUserId, name, setUserName } = props;

    const handleClick = () => {
        setUserId(id);
        setUserName(name);
    }
    return <>
        <Row className="w-full">
            <Button className="border-none m-0 p-0" onClick={handleClick}>
                <MdHistoryEdu color="#5A62AA" size={20} />
            </Button>
        </Row>
    </>
}

const ManageClient = () => {
    const accessToken = useSelector(state => state.auth.login.currentUser.accessToken);
    const [dataSource, setDataSource] = useState([]);
    const [tourList, setTourList] = useState([]);
    const [userId, setUserId] = useState(0);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        getAllBooking(accessToken).then(data => {
            const userFromData = data.data.map(item => {
                return {
                    ...item.user,
                    action: <ActionBox id={item.user.id} setUserId={setUserId} name={item.user.name} setUserName={setUserName} />
                };
            });
            const userList = [... new Set(userFromData)];
            setDataSource(userList);
        });
        getBookTour(30, accessToken).then(data => setTourList(data?.data.map(item => {
            return {
                ...item,
                type: typeArray[item.type_id]
            };
        })));
    }, []);


    const columns = [
        {
            title: "ID Khách hàng",
            dataIndex: "id",
            key: "id"
        },
        {
            title: "Tên khách hàng",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "Ngày sinh",
            dataIndex: "date_of_birth",
            key: "date_of_birth"
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email"
        },
        {
            title: "Số điện thoại",
            dataIndex: "phone_number",
            key: "phone_number"
        },
        {
            title: "Hành động",
            dataIndex: "action",
            key: "action"
        }
    ]

    const tourColumns = [
        {
            title: "ID Tour",
            dataIndex: "id",
            key: "id"
        },
        {
            title: "Tên tour",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "Loại hình",
            dataIndex: "type",
            key: "type"
        },
        {
            title: "Ngày bắt đầu",
            dataIndex: "start_date",
            key: "start_date"
        },
        {
            title: "Thời lượng",
            dataIndex: "duration",
            key: "duration"
        }
    ]

    return (
        <>
            <Row className="w-full pl-10 pt-10" style={{ fontFamily: "Signika", fontSize: "25px" }}>Khách hàng</Row>
            <Row className="w-full px-20 pt-5 flex justify-between items-center">
                <Row style={{ fontFamily: "Signika", fontSize: "20px", color: "#DC4E62" }}>Tổng số: {dataSource.length} khách hàng</Row>
                <Col span={7} offset={1} className="relative flex items-center" style={{ fontFamily: "Signika", fontSize: "20px" }}>
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
            {
                userId == 0 ? null :
                <>
                    <Row className="w-full pl-10 pt-10" style={{ fontFamily: "Signika", fontSize: "25px" }}>Lịch sử đặt tour của: <Row className="pl-2" style={{ fontFamily: "Signika", fontSize: "25px", color: "#DC4E62" }}>{userName}</Row> </Row>
                    <Table dataSource={tourList} columns={tourColumns} className="px-20 pt-5" bordered />
                </>
            }
        </>
    )
}

export default ManageClient;