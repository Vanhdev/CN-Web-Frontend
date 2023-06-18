import React, { useState } from "react";
import { Col, Row, Form, Input, Divider, Button } from "antd";
import { BsFillCheckCircleFill, BsFillDashCircleFill, BsPencil } from "react-icons/bs";

const VoucherBox = (props) => {
    const [voucherForm] = Form.useForm();
    const [isEdit, setIsEdit] = useState(false);
    const { name, number, voucherList, setVoucherList, index } = props;
    const initialValues = {
        name: name,
        number: number
    };

    const handleSaveVoucher = () => {
        const newVoucherList = [...voucherList];
        newVoucherList[index].name = voucherForm.getFieldValue("name");
        newVoucherList[index].number = voucherForm.getFieldValue("number");
        setVoucherList(newVoucherList);
        setIsEdit(false);
    }

    const handleDeleteVoucher = () => {
        const newVoucherList = [...voucherList];
        newVoucherList.splice(index, 1);
        setVoucherList(newVoucherList);
        setIsEdit(false);
    }

    return <>
        {
            isEdit 
            ?
                <Form className="w-full" initialValues={initialValues} form={voucherForm}>
                    <Row className="w-full">
                        <Col span={16}>
                            <Form.Item name="name" className="w-full m-0">
                                <Input placeholder="Nhập voucher của bạn" className="border-none text-2xl" style={{fontFamily: "Signika", color: "rgb(0, 0, 0, 0.5)"}}/>
                            </Form.Item>
                            <Divider className="m-0 border-2 mb-3 w-full" style={{borderColor: "rgb(0, 0, 0, 0.5)"}} />
                        </Col>
                        <Col span={3} offset={1}>
                            <Form.Item name="number" className="w-full m-0">
                                <Input placeholder="Giảm(%)" className="border-none text-2xl" style={{fontFamily: "Signika", color: "rgb(0, 0, 0, 0.5)"}}/>
                            </Form.Item>
                            <Divider className="m-0 border-2 mb-3 w-full" style={{borderColor: "rgb(0, 0, 0, 0.5)"}} />
                        </Col>
                        <Col span={3} offset={1} className="w-full flex justify-end">
                            <Button className="border-none p-0 m-0 mr-2" onClick={handleDeleteVoucher}>
                                <BsFillDashCircleFill size={25} color="red" />
                            </Button>
                            <Button className="border-none p-0 m-0" onClick={handleSaveVoucher}>
                                <BsFillCheckCircleFill size={25} color="blue" />
                            </Button>
                        </Col>
                    </Row>
                </Form>
            :
                <Row className="w-full my-5">
                    <Col span={20}> 
                        <Row className="w-full m-0 text-2xl" style={{fontFamily: "Signika"}}>
                            {name}   {number}%
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

const AddVoucher = () => {
    const [addForm] = Form.useForm();
    const [voucherList, setVoucherList] = useState([
        {
            "name": "Phong ngu tren du thuyen", 
            "number": 12
        }
    ]);

    const handleSaveVoucher = () => {
        const name = addForm.getFieldValue("name");
        const number = addForm.getFieldValue("number");
        setVoucherList([...voucherList, {
            name: name,
            number: number
        }]);
        addForm.resetFields();
    }
    return(
        <>
            <Row className="w-full pl-20 pt-10" style={{fontFamily: "Signika", fontSize: "25px"}}>Thêm dịch vụ bao gồm</Row>
            <Row className="w-full px-40 pt-5 mb-5">
                {voucherList.map((voucher, index) => <>
                    <VoucherBox name={voucher.name} number={voucher.number} index={index} key={index} setVoucherList={setVoucherList} voucherList={voucherList} />
                </>)}
                <Form className="w-full my-5" form={addForm}>
                    <Row className="w-full">
                        <Col span={16}>
                            <Form.Item name="name" className="w-full m-0">
                                <Input placeholder="Nhập voucher của bạn" className="border-none text-2xl" style={{fontFamily: "Signika", color: "rgb(0, 0, 0, 0.5)"}}/>
                            </Form.Item>
                            <Divider className="m-0 border-2 mb-3 w-full" style={{borderColor: "rgb(0, 0, 0, 0.5)"}} />
                        </Col>
                        <Col span={3} offset={1}>
                            <Form.Item name="number" className="w-full m-0">
                                <Input placeholder="Giảm(%)" className="border-none text-2xl" style={{fontFamily: "Signika", color: "rgb(0, 0, 0, 0.5)"}}/>
                            </Form.Item>
                            <Divider className="m-0 border-2 mb-3 w-full" style={{borderColor: "rgb(0, 0, 0, 0.5)"}} />
                        </Col>
                        <Col span={3} offset={1} className="w-full flex justify-end items-center">
                            <Button className="border-none p-0 m-0" onClick={handleSaveVoucher}>
                                <BsFillCheckCircleFill size={25} color="blue" />
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Row>
        </>
    )
}

export default AddVoucher;