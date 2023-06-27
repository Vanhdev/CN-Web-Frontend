import React, { useEffect, useState } from "react";
import "../../../../assets/fonts.css";
import { Row, Table, Input, Col, Button, message, Modal, Form, InputNumber, Space, Radio, Select, DatePicker } from "antd";
import { deleteTour, getAllTour, getAllTourTableData, getTourById, saveTour } from "../../../../API";
import { MdSearch } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

export const typeArray = ["", "Chùa", "Biển", "Núi", "Rừng", "Resort", "Hang động", "Đảo", "Vùng quê", "Đô thị", "Nông trại", "Công viên", "Cắm trại"];

export const arrivalArray = ["", "08:30", "09:30", "10:30", "11:30", "12:30"];

export const ActionBox = (props) => {
    const { id, setDataSource, setOpen, setTour } = props;
    const navigate = useNavigate();
    const accessToken = useSelector(state => state.auth.login.currentUser.accessToken);
    const handleDelete = () => {
        deleteTour(id, accessToken).then(() => {
            getAllTourTableData(setDataSource);
        });
    }

    const handleClick = () => {
        getTourById(id).then(data => {
            setTour(data.data.tour);
            setOpen(true);
        });
    }

    return <>
        <Row className="w-full">
            <Col span={12} className="flex justify-end">
                <Button className="border-none m-0 p-0" onClick={handleClick}>
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

export const EditModal = (props) => {
    const accessToken = useSelector(state => state.auth.login.currentUser.accessToken);
    const {open, setOpen, tour} = props;

    const [form] = Form.useForm();

    const handleCancel = () => {
        setOpen(false);
    }
    const handleOk = () => {
        const value = form.getFieldsValue();
        const start = form.getFieldValue("start_date");
        const start_date = "" + start["$y"] + "-" + (start["$M"] + 1) + "-" + start["$D"];
        saveTour(accessToken, tour.id, {...value, start_date: start_date}).then(() => {
            message.success("Lưu thành công");
            setOpen(false);
        });
    }
    const initialValues = {
        name: tour.name,
        type_id: tour.type_id,
        overview: tour.overview,
        start_date: dayjs(tour.start_date, "YYYY-MM-DD"),
        duration: tour.duration,
        slots: tour.slots,
        price: tour.price,
        highlight: tour.highlight
    };

    return <Modal 
                open={open} 
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel} style={{ fontFamily: "Signika"}}>Huỷ</Button>,
                    <Button key="submit" onClick={handleOk} style={{fontFamily: "Signika", backgroundColor: "blue", color: "white"}}>Lưu</Button>
                ]}
                width={1000}
                centered
            >
                <Row style={{fontFamily: "Signika", fontSize: "22px"}}>Chỉnh sửa tour</Row>
                <Form className="w-full" initialValues={initialValues} form={form}>
                    <Form.Item name="name" label="Tên tour">
                        <Input style={{ fontFamily: "Signika"}} />
                    </Form.Item>
                    <Form.Item className="w-full" name="type_id" label="Loại">
                        <Radio.Group className="w-full">
                            <Row className="w-full">
                                <Col span={6} className="flex justify-center">
                                    <Space direction="vertical">
                                        <Radio value={1}>Chùa</Radio>
                                        <Radio value={2}>Biển</Radio>
                                        <Radio value={3}>Núi</Radio>
                                    </Space>
                                </Col>
                                <Col span={6} className="flex justify-center">
                                    <Space direction="vertical">
                                        <Radio value={4}>Rừng</Radio>
                                        <Radio value={5}>Resort</Radio>
                                        <Radio value={6}>Hang động</Radio>
                                    </Space>
                                </Col>
                                <Col span={6} className="flex justify-center">
                                    <Space direction="vertical">
                                        <Radio value={7}>Đảo</Radio>
                                        <Radio value={8}>Vùng quê</Radio>
                                        <Radio value={9}>Đô thị</Radio>
                                    </Space>
                                </Col>
                                <Col span={6} className="flex justify-center">
                                    <Space direction="vertical">
                                        <Radio value={10}>Nông trại</Radio>
                                        <Radio value={11}>Công viên</Radio>
                                        <Radio value={12}>Cắm trại</Radio>
                                    </Space>
                                </Col>
                            </Row>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item name="overview" label="Mô tả">
                        <Input.TextArea style={{ fontFamily: "Signika"}} />
                    </Form.Item>
                    <Row className="w-full">
                        <Col span={6}>
                            <Form.Item name="start_date" label="Ngày bắt đầu" className="w-full pr-3">
                                <DatePicker style={{ fontFamily: "Signika" }} className="w-full" />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item name="duration" label="Số ngày" className="w-full px-3">
                                <InputNumber style={{ fontFamily: "Signika" }} className="w-full" />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item name="slots" label="Số người" className="w-full px-3">
                                <InputNumber style={{ fontFamily: "Signika" }} className="w-full" />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item name="price" label="Giá cả" className="w-full pl-3">
                                <InputNumber style={{ fontFamily: "Signika" }} className="w-full"/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item name="highlight" label="Điểm nổi bật">
                        <Input.TextArea style={{ fontFamily: "Signika" }} />
                    </Form.Item>
                </Form>
    </Modal>;
}

const TourStock = () => {
    const [dataSource, setDataSource] = useState([]);
    const [tour, setTour] = useState({});
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    useEffect(() => {
        getAllTourTableData(setDataSource, setOpen, setTour);
    },[open]);


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
    ];

    // console.log(dataSource);

    return(
        <>
            <Row className="w-full pl-10 pt-10" style={{ fontFamily: "Signika", fontSize: "25px" }}>Thêm điểm đến</Row>
            <Row className="w-full px-20 pt-5 flex justify-between items-center">
                <Row style={{ fontFamily: "Signika", fontSize: "20px", color: "#DC4E62" }}>Tổng số: {dataSource.length} tours</Row>
                <Col span={7} offset={1} className="relative flex items-center" style={{ fontFamily: "Signika", fontSize: "20px"}}>
                    Search
                    <Input
                        className="rounded-xl h-10 placeholder:text-black p-5 ml-3"
                        style={{ fontFamily: "Signika" }}
                        onChange={e => setValue(e.target.value)}
                    />
                    <Row className="absolute right-0 m-5 border-none p-0 rounded-full">
                        <MdSearch size={15} />
                    </Row>
                </Col>
            </Row>
            <Table dataSource={dataSource.filter(item => item.name.includes(value))} columns={columns} className="px-20 pt-5" bordered />
            <EditModal open={open} setOpen={setOpen} tour={tour} />
        </>
    )
}

export default TourStock;