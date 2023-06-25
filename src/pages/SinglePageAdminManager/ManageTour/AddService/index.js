import React, { useDebugValue, useEffect, useState } from "react";
import { Col, Row, Form, Input, Divider, Button } from "antd";
import { BsFillCheckCircleFill, BsFillDashCircleFill, BsPencil } from "react-icons/bs";
import { useSelector } from "react-redux";
import { addService, getAllService, getAllVoucher, saveService } from "../../../../API";

const ServiceBox = (props) => {
    const accessToken = useSelector(state => state.auth.login.currentUser.accessToken);
    const [serviceForm] = Form.useForm();
    const [isEdit, setIsEdit] = useState(false);
    const { service, setServiceList } = props;
    const initialValues = {
        service: service.name,
        description: service.description
    };

    const handleSaveService = () => {
        const name = serviceForm.getFieldValue("service");
        const description = serviceForm.getFieldValue("description");
        saveService(service.id, { name: name, description: description}, accessToken).then(() => {
            getAllService(accessToken).then(data => setServiceList(data));
            setIsEdit(false);
        });
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
                            <Button className="border-none p-0 m-0" onClick={handleSaveService}>
                                <BsFillCheckCircleFill size={25} color="blue" />
                            </Button>
                        </Col>
                    </Row>
                    <Row className="w-full">
                        <Form.Item name="description" className="w-full m-0 mb-1">
                            <Input.TextArea placeholder="Mô tả" className="border-none text-2xl" style={{fontFamily: "Signika", color: "rgb(0, 0, 0, 0.5)"}}/>
                        </Form.Item>
                        <Divider className="m-0 border-2 mb-3 w-full" style={{borderColor: "rgb(0, 0, 0, 0.5)"}} />
                    </Row>
                </Form>
            :
                <>
                    <Row className="w-full my-5">
                        <Col span={20}> 
                            <Row className="w-full m-0 text-2xl" style={{fontFamily: "Signika", color: "#DC4E62"}}>
                                {service.name}
                            </Row>
                        </Col>
                        <Col span={3} offset={1} className="w-full flex justify-end items-center">
                            <Button className="border-none p-0 m-0" onClick={() => setIsEdit(true)}>
                                <BsPencil size={24} />
                            </Button>   
                        </Col>
                    </Row>
                    <Row className="w-full m-0 text-2xl mb-3" style={{fontFamily: "Signika"}}>
                                {service.description}
                    </Row>
                </>
        }
    </>;
}

const AddService = () => {
    const accessToken = useSelector(state => state.auth.login.currentUser.accessToken);
    const [addForm] = Form.useForm();
    const [serviceList, setServiceList] = useState([]);

    useEffect(() => {
        getAllService(accessToken).then(data => setServiceList(data));
    },[]);

    const handleSaveService = () => {
        const name = addForm.getFieldValue("service");
        const description = addForm.getFieldValue("description");
        addService({name: name, description: description}, accessToken).then(() => {
            getAllService(accessToken).then(data => setServiceList(data));
            addForm.resetFields();
        });
    }
    return(
        <>
            <Row className="w-full pl-20 pt-10" style={{fontFamily: "Signika", fontSize: "25px"}}>Thêm dịch vụ bao gồm</Row>
            <Row className="w-full px-40 pt-5 mb-5">
                {serviceList.map((service, index) => <>
                    <ServiceBox service={service} key={index} setServiceList={setServiceList} />
                </>)}
                <Form className="w-full my-5" form={addForm}>
                    <Row className="w-full">
                        <Col span={20}>
                            <Form.Item name="service" className="w-full m-0 mb-1">
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
                    <Row className="w-full">
                        <Form.Item name="description" className="w-full m-0 mb-1">
                            <Input.TextArea placeholder="Mô tả" className="border-none text-2xl" style={{fontFamily: "Signika", color: "rgb(0, 0, 0, 0.5)"}}/>
                        </Form.Item>
                        <Divider className="m-0 border-2 mb-3 w-full" style={{borderColor: "rgb(0, 0, 0, 0.5)"}} />
                    </Row>
                </Form>
            </Row>
        </>
    )
}

export default AddService;