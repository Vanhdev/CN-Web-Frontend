import { Col, Form, Input, Radio, Row, Select, Space, Button, DatePicker, TimePicker } from "antd";
import React, { useEffect, useState } from "react";
import "../../../../assets/fonts.css";
import { BsFillCheckCircleFill, BsFillDashCircleFill, BsPencil, BsTicketPerforatedFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { addTour, getAllPlace, getAllService, getAllVoucher } from "../../../../API";
import { useNavigate } from "react-router-dom";

const textStyles = {fontFamily: "Signika", fontSize: "16px"};

const ImportantBox = () => {
    const [isEdit, setIsEdit] = useState(true);
    return <>
        {
            isEdit
            ?
                <>
                    <Input.TextArea className="w-full mb-1" />
                    <Row className="w-full flex justify-end mb-3">
                        <Button className="border-none p-0 m-0">
                            <BsFillCheckCircleFill size={25} color="#103479" />
                        </Button>
                    </Row>
                </>
            :
                <Row className="w-full mb-2 flex justify-between items-center">
                    <Row className="w-11/12" style={{...textStyles, color: "#DC4E62"}}>asdsd</Row>
                    <Button className="border-none p-0 m-0" onClick={() => setIsEdit(true)}>
                            <BsPencil size={20} />
                    </Button>  
                </Row>
        }
    </>;
}

const AddTour = () => {
    const accessToken = useSelector(state => state.auth.login.currentUser.accessToken);
    const navigate = useNavigate();

    const [serviceList, setServiceList] = useState([]);
    const [voucherList, setVoucherList] = useState([]);
    const [placeList, setPlaceList] = useState([]);
    const [image, setImage] = useState({});

    const [form] = Form.useForm();

    useEffect(() => {
        getAllService(accessToken).then(arr => setServiceList(arr.map(item => {
            return {
                value: item.id,
                label: item.name
            };
        })));

        getAllVoucher(accessToken).then(arr => setVoucherList(arr.map(item => {
            return {
                value: item.id,
                label: item.name + "(" + item.discount + "%)"
            };
        })));
        
        getAllPlace().then(arr => setPlaceList(arr.map(item => {
            return {
                value: item.id,
                label: item.name
            };
        })));
    },[]);

    const handleClick = () => {
        const formValue = (form.getFieldsValue());
        const start = form.getFieldValue("start_date");
        const date_deadline = form.getFieldValue("date_deadline");
        const time_deadline = form.getFieldValue("time_deadline");
        const start_date = "" + start["$y"] + "-" + (start["$M"] + 1) + "-" + start["$D"];
        const booking_deadline = "" + date_deadline["$y"] + "-" + (date_deadline["$M"] + 1) + "-" + date_deadline["$D"]
        + " " + time_deadline["$H"] + ":" + time_deadline["$m"] + ":" + time_deadline["$s"];  
        const newForm = new FormData();
        newForm.append('type_id', formValue.type);
        newForm.append('name', formValue.name);
        newForm.append('overview', formValue.overview);
        newForm.append('highlight', formValue.highlight);
        newForm.append('start_date', start_date);
        newForm.append('duration', parseInt(formValue.duration));
        newForm.append('slots', parseInt(formValue.slots));
        newForm.append('price', parseInt(formValue.price));
        newForm.append('status', 0);
        newForm.append('booking_deadline', booking_deadline);
        newForm.append('placeId', formValue.place);
        newForm.append('serviceId', formValue.service);
        newForm.append('voucherId', formValue.voucher);
        newForm.append('arrivalId1', 1);
        newForm.append('arrivalId2', 2);
        newForm.append('arrivalId3', 3);
        newForm.append('image', image);

        addTour(newForm, accessToken, navigate);
    }

    return(
        <>
            <Form className="w-full" form={form}>
                <Row className="p-10 w-full">
                    <Col span={12} className="px-5">
                        <Row className="w-full mb-2" style={textStyles}>Tên tour</Row>
                        <Form.Item className="w-full" name="name">
                            <Input.TextArea style={textStyles} />
                        </Form.Item>
                        <Row className="w-full mb-2" style={textStyles}>Loại tour</Row>
                        <Form.Item className="w-full" name="type">
                            <Radio.Group className="w-full">
                                <Row className="w-full">
                                    <Col span={12} className="flex justify-center">
                                        <Space direction="vertical">
                                            <Radio value={1}>Chùa</Radio>
                                            <Radio value={2}>Biển</Radio>
                                            <Radio value={3}>Núi</Radio>
                                            <Radio value={4}>Rừng</Radio>
                                            <Radio value={5}>Resort</Radio>
                                            <Radio value={6}>Hang động</Radio>
                                        </Space>
                                    </Col>
                                    <Col span={12} className="flex justify-center">
                                        <Space direction="vertical">
                                            <Radio value={7}>Đảo</Radio>
                                            <Radio value={8}>Vùng quê</Radio>
                                            <Radio value={9}>Đô thị</Radio>
                                            <Radio value={10}>Nông trại</Radio>
                                            <Radio value={11}>Công viên</Radio>
                                            <Radio value={12}>Cắm trại</Radio>
                                        </Space>
                                    </Col>
                                </Row>   
                            </Radio.Group>
                        </Form.Item>

                        <Row className="w-full mb-2" style={textStyles}>Số người</Row>
                        <Form.Item className="w-full" name="slots">
                            <Input style={textStyles} />
                        </Form.Item>

                        <Row className="w-full mb-2" style={textStyles}>Giá cả($)</Row>
                        <Row className="w-full">
                            <Form.Item className="w-full flex justify-center" name="price" label="Người lớn">
                                <Input className="w-full" />
                            </Form.Item>
                        </Row>
                        <Row className="w-full mb-2" style={textStyles}>Voucher</Row>
                        <Row className="w-full">
                            <Form.Item className="w-full" name="voucher">
                                <Select className="w-full" style={textStyles} options={voucherList}/>
                            </Form.Item>
                        </Row>
                        <Row className="w-full mb-2" style={textStyles}>Thời gian khởi hành</Row>
                        <Row className="w-full">
                            <Form.Item className="w-full" name="start_time">
                                <Radio.Group className="w-full">
                                    <Space className="w-full flex justify-between">
                                        <Radio value={1} style={textStyles}>8:30</Radio>
                                        <Radio value={2} style={textStyles}>9:30</Radio>
                                        <Radio value={3} style={textStyles}>10:30</Radio>
                                        <Radio value={4} style={textStyles}>11:30</Radio>
                                        <Radio value={5} style={textStyles}>12:30</Radio>
                                    </Space>
                                </Radio.Group>
                            </Form.Item>
                        </Row>

                        <Row className="w-full mb-2" style={textStyles}>Các điểm đến</Row>
                        <Row className="w-full">
                            <Form.Item className="w-full" name="place">
                                <Select className="w-full" style={textStyles} options={placeList}/>
                            </Form.Item>
                        </Row>

                        <Row className="w-full mb-2" style={textStyles}>Hình ảnh đính kèm</Row>
                        <Row className="w-full flex justify-between items-center">
                            <input type='file' required={true} onChange={e => setImage(e.target.files[0])} style={textStyles} />
                        </Row>
                    </Col>
                    <Col span={12} className="px-5">
                        <Row className="w-full mb-2" style={textStyles}>Mô tả tổng quan</Row>
                        <Form.Item className="w-full" name="overview">
                            <Input.TextArea style={{...textStyles, height: "320px"}} />
                        </Form.Item>

                        <Row className="w-full mb-2" style={textStyles}>Ngày khởi hành</Row>
                        <Row className="w-full">
                            <Form.Item className="w-full" name="start_date">
                                <DatePicker className="w-full" style={textStyles}/>
                            </Form.Item>
                        </Row>

                        <Row className="w-full mb-2" style={textStyles}>Số ngày</Row>
                        <Form.Item className="w-full" name="duration">
                            <Input style={textStyles} />
                        </Form.Item>

                        <Row className="w-full mb-2" style={textStyles}>Hạn đặt tour</Row>
                        <Row className="w-full">
                            <Form.Item className="w-1/2" name="date_deadline">
                                <DatePicker className="w-full" style={textStyles}/>
                            </Form.Item>
                            <Form.Item className="w-1/2" name="time_deadline">
                                <TimePicker className="w-full" style={textStyles}/>
                            </Form.Item>
                        </Row>

                        <Row className="w-full mb-2" style={textStyles}>Điểm nổi bật</Row>
                        <Form.Item className="w-full" name="highlight">
                            <Input.TextArea style={textStyles} />
                        </Form.Item>
                        
                        <Row className="w-full mb-2" style={textStyles}>Dịch vụ bao gồm</Row>
                        <Row className="w-full">
                            <Form.Item className="w-full" name="service">
                                <Select className="w-full" style={textStyles} options={serviceList}/>
                            </Form.Item>
                        </Row>
                    </Col>
                    <Row className="w-full flex justify-center mt-5">
                        <Button 
                            className="text-white text-2xl flex items-center justify-center" 
                            style={{...textStyles, backgroundColor: "#5A62AA"}}
                            onClick={handleClick}
                        >
                            Thêm
                        </Button>
                    </Row>
                </Row>
            </Form>
        </>
    )
}

export default AddTour;