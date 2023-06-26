import { Col, Form, Input, Radio, Row, Select, Space, Button, DatePicker, TimePicker, Upload, InputNumber, message } from "antd";
import React, { useEffect, useState } from "react";
import "../../../../assets/fonts.css";
import { BsFillCheckCircleFill, BsPencil } from "react-icons/bs";
import { useSelector } from "react-redux";
import { addTour, getAllPlace, getAllService, getAllVoucher } from "../../../../API";
import { useNavigate } from "react-router-dom";
import UploadBox from "../../../../components/UploadBox";
import MultipeSelect from "../../../../components/MultipeSelect";

const textStyles = {fontFamily: "Signika", fontSize: "16px"};

const AddTour = () => {
    const accessToken = useSelector(state => state.auth.login.currentUser.accessToken);
    const navigate = useNavigate();

    const [serviceList, setServiceList] = useState([]);
    const [voucherList, setVoucherList] = useState([]);
    const [placeList, setPlaceList] = useState([]);
    const [arrivalId, setArrivalId] = useState([]);
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

    const isPosibleValue = (obj) => {
        return Object.keys(obj).reduce((acc, ele) => {
            return acc && (typeof obj[ele] !== "undefined" && obj[ele] !== "") 
        }, true);    
    }

    const handleClick = () => {
        const formValue = (form.getFieldsValue());
        const isOk = isPosibleValue(formValue) && arrivalId.length === 3; 
        if(!isOk){
            message.warning("Hãy nhập đủ thông tin của tour!!!");
        }
        else {
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
            newForm.append('arrivalId1', arrivalId[0]);
            newForm.append('arrivalId2', arrivalId[1]);
            newForm.append('arrivalId3', arrivalId[2]);
            newForm.append('image', image);

            addTour(newForm, accessToken, navigate);
        }
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
                            <InputNumber style={textStyles} min={1} className="w-full" />
                        </Form.Item>

                        <Row className="w-full mb-2" style={textStyles}>Giá cả($)</Row>
                        <Row className="w-full">
                            <Form.Item className="w-full" name="price">
                                <InputNumber className="w-full" />
                            </Form.Item>
                        </Row>
                        <Row className="w-full mb-2" style={textStyles}>Voucher</Row>
                        <Row className="w-full">
                            <Form.Item className="w-full" name="voucher">
                                <Select className="w-full" style={textStyles} options={voucherList}/>
                            </Form.Item>
                        </Row>
                        <Row className="w-full mb-2" style={textStyles}>Thời gian khởi hành</Row>
                        <Row className="w-full mb-5">
                            <MultipeSelect setArrivalId={setArrivalId} />
                        </Row>

                        <Row className="w-full mb-2" style={textStyles}>Các điểm đến</Row>
                        <Row className="w-full">
                            <Form.Item className="w-full" name="place">
                                <Select className="w-full" style={textStyles} options={placeList}/>
                            </Form.Item>
                        </Row>

                        <Row className="w-full mb-2" style={textStyles}>Hình ảnh đính kèm</Row>
                        <Row className="w-full flex justify-between items-center">
                            <UploadBox setImage={setImage} initialImage={[]} />
                        </Row>
                    </Col>
                    <Col span={12} className="px-5">
                        <Row className="w-full mb-2" style={textStyles}>Mô tả tổng quan</Row>
                        <Form.Item className="w-full" name="overview">
                            <Input.TextArea style={{...textStyles, height: "317px"}} />
                        </Form.Item>

                        <Row className="w-full mb-2" style={textStyles}>Ngày khởi hành</Row>
                        <Row className="w-full">
                            <Form.Item className="w-full" name="start_date">
                                <DatePicker className="w-full" style={textStyles}/>
                            </Form.Item>
                        </Row>

                        <Row className="w-full mb-2" style={textStyles}>Số ngày</Row>
                        <Form.Item className="w-full" name="duration">
                            <InputNumber style={textStyles} className="w-full" />
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