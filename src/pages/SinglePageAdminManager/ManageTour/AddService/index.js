import React, { useState } from "react";
import { Col, Row, Form, Input, Divider, Button } from "antd";
import { BsFillCheckCircleFill, BsFillDashCircleFill, BsPencil } from "react-icons/bs";

const ServiceBox = (props) => {
    const [serviceForm] = Form.useForm();
    const [isEdit, setIsEdit] = useState(false);
    const { service, serviceList, setServiceList, index } = props;
    const initialValues = {
        service: service
    };

    const handleSaveService = () => {
        const newServiceList = [...serviceList];
        newServiceList[index] = serviceForm.getFieldValue("service");
        setServiceList(newServiceList);
        setIsEdit(false);
    }

    const handleDeleteService = () => {
        const newServiceList = [...serviceList];
        newServiceList.splice(index, 1);
        setServiceList(newServiceList);
        setIsEdit(false);
    }

    return <>
        {
            isEdit 
            ?
                <Form className="w-full" initialValues={initialValues} form={serviceForm}>
                    <Row className="w-full">
                        <Col span={20}>
                            <Form.Item name="service" className="w-full m-0">
                                <Input placeholder="Nhập dịch vụ bao gồm của bạn" className="border-none text-2xl" style={{fontFamily: "Signika", color: "rgb(0, 0, 0, 0.5)"}}/>
                            </Form.Item>
                            <Divider className="m-0 border-2 mb-3 w-full" style={{borderColor: "rgb(0, 0, 0, 0.5)"}} />
                        </Col>
                        <Col span={3} offset={1} className="w-full flex justify-end">
                            <Button className="border-none p-0 m-0 mr-2" onClick={handleDeleteService}>
                                <BsFillDashCircleFill size={25} color="red" />
                            </Button>
                            <Button className="border-none p-0 m-0" onClick={handleSaveService}>
                                <BsFillCheckCircleFill size={25} color="blue" />
                            </Button>
                        </Col>
                    </Row>
                </Form>
            :
                <Row className="w-full my-5">
                    <Col span={20}> 
                        <Row className="w-full m-0 text-2xl" style={{fontFamily: "Signika"}}>
                            {service}
                        </Row>
                    </Col>
                    <Col span={3} offset={1} className="w-full flex justify-end items-center">
                        <Button className="border-none p-0 m-0" onClick={() => setIsEdit(true)}>
                            <BsPencil size={24} />
                        </Button>   
                    </Col>
                </Row>
        }
    </>;
}

const AddService = () => {
    const [addForm] = Form.useForm();
    const [serviceList, setServiceList] = useState(["Phong ngu tren du thuyen"]);

    const handleSaveService = () => {
        const service = addForm.getFieldValue("service");
        setServiceList([...serviceList, service]);
        addForm.resetFields();
    }
    return(
        <>
            <Row className="w-full pl-20 pt-10" style={{fontFamily: "Signika", fontSize: "25px"}}>Thêm dịch vụ bao gồm</Row>
            <Row className="w-full px-40 pt-5 mb-5">
                {serviceList.map((service, index) => <>
                    <ServiceBox service={service} index={index} key={index} setServiceList={setServiceList} serviceList={serviceList} />
                </>)}
                <Form className="w-full my-5" form={addForm}>
                    <Row className="w-full">
                        <Col span={20}>
                            <Form.Item name="service" className="w-full m-0">
                                <Input placeholder="Nhập dịch vụ bao gồm của bạn" className="border-none text-2xl" style={{fontFamily: "Signika", color: "rgb(0, 0, 0, 0.5)"}}/>
                            </Form.Item>
                            <Divider className="m-0 border-2 mb-3 w-full" style={{borderColor: "rgb(0, 0, 0, 0.5)"}} />
                        </Col>
                        <Col span={3} offset={1} className="w-full flex justify-end items-center">
                            <Button className="border-none p-0 m-0" onClick={handleSaveService}>
                                <BsFillCheckCircleFill size={25} color="blue" />
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Row>
        </>
    )
}

export default AddService;