import React, { useEffect, useState } from "react";
import { Col, Row, Form, Input, Divider, Button, message, InputNumber } from "antd";
import { BsFillCheckCircleFill, BsFillDashCircleFill, BsPencil } from "react-icons/bs";
import { useSelector } from "react-redux";
import { addVoucher, deleteVoucher, editVoucher, getAllVoucher } from "../../../../API";
import { FiPower } from "react-icons/fi";

const VoucherBox = (props) => {
    const accessToken = useSelector(state => state.auth.login.currentUser.accessToken);
    const [voucherForm] = Form.useForm();
    const [isEdit, setIsEdit] = useState(false);
    const { voucher, setVoucherList, index } = props;
    const initialValues = {
        name: voucher.name,
        discount: voucher.discount
    };

    const handleSaveVoucher = () => {
        const value = voucherForm.getFieldsValue();
        editVoucher(voucher.id, value, accessToken).then(() => {
            getAllVoucher(accessToken).then(data => setVoucherList(data));
            message.success("Lưu voucher thành công!!!");
            setIsEdit(false);
        });
    }

    const handleDeleteVoucher = () => {
        // console.log(accessToken);
        deleteVoucher(voucher.id, {}, accessToken).then(() => {
            getAllVoucher(accessToken).then(data => setVoucherList(data));
            message.success("Tắt voucher thành công!!!");
            setIsEdit(false);
        });
    }
    
    const handleEnableVoucher = () => {
        deleteVoucher(voucher.id, {status: 0} ,accessToken).then(() => {
            getAllVoucher(accessToken).then(data => setVoucherList(data));
        });
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
                            <Form.Item name="discount" className="w-full m-0">
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
                        <Row className="w-full m-0 text-2xl" style={{fontFamily: "Signika", color: voucher.deleted === 1 ? "#707070" : "black"}}>
                            {voucher.name}   ({voucher.discount}%)
                        </Row>
                    </Col>
                    <Col span={3} offset={1} className="w-full flex justify-end items-center">
                        {
                            voucher.deleted === 1 
                            ?
                                <Button className="border-none p-0 m-0" onClick={handleEnableVoucher}>
                                    <FiPower size={24} color="red" />
                                </Button>   
                            :
                                <Button className="border-none p-0 m-0" onClick={() => setIsEdit(true)}>
                                    <BsPencil size={24} />
                                </Button>  
                        } 
                    </Col>
                </Row>
        }
    </>;
}

const AddVoucher = () => {
    const accessToken = useSelector(state => state.auth.login.currentUser.accessToken);
    const [addForm] = Form.useForm();
    const [voucherList, setVoucherList] = useState([]);

    useEffect(() => {
        getAllVoucher(accessToken).then(data => setVoucherList(data));
    },[])

    const handleSaveVoucher = () => {
        const name = addForm.getFieldValue("name");
        const discount = addForm.getFieldValue("discount");
        addVoucher({name: name, discount: discount}, accessToken).then(() =>{
            setVoucherList([...voucherList, {
                name: name,
                discount: discount
            }]);
            addForm.resetFields();
        }).then(() => message("Thêm voucher thành công!!!"));
    }

    return(
        <>
            <Row className="w-full pl-20 pt-10" style={{fontFamily: "Signika", fontSize: "25px"}}>Thêm dịch vụ bao gồm</Row>
            <Row className="w-full px-40 pt-5 mb-5">
                {voucherList.map((voucher, index) => <>
                    <VoucherBox key={index} 
                                voucher={voucher}
                                index={index} setVoucherList={setVoucherList} voucherList={voucherList} 
                    />
                </>)}
                <Form className="w-full my-5" form={addForm}>
                    <Row className="w-full">
                        <Col span={16}>
                            <Form.Item name="name" className="w-full m-0 mb-1">
                                <Input placeholder="Nhập voucher của bạn" className="border-none text-2xl" style={{fontFamily: "Signika", color: "rgb(0, 0, 0, 0.5)"}}/>
                            </Form.Item>
                            <Divider className="m-0 border-2 mb-3 w-full" style={{borderColor: "rgb(0, 0, 0, 0.5)"}} />
                        </Col>
                        <Col span={3} offset={5}>
                            <Form.Item name="discount" className="w-full m-0 mb-1">
                                <InputNumber placeholder="Giảm(%)" className="border-none text-2xl w-full h-10" style={{fontFamily: "Signika", color: "rgb(0, 0, 0, 0.5)"}}/>
                            </Form.Item>
                            <Divider className="m-0 border-2 mb-3 w-full" style={{borderColor: "rgb(0, 0, 0, 0.5)"}} />
                        </Col>
                        <Col span={3} offset={21} className="w-full flex justify-end items-center">
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