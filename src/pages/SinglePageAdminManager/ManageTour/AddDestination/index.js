import { Button, Divider, Form, Input, Row } from "antd";
import React, { useState } from "react";
import "../../../../assets/fonts.css";
import { BsFillCheckCircleFill, BsFillDashCircleFill, BsPencil } from "react-icons/bs";

const DestinationBox = (props) => {
    const [desForm] = Form.useForm();
    const [isEdit, setIsEdit] = useState(false);
    const { index, handleDeleteDes, handleSaveDes, title, description } = props;

    const handleDelete = () => {
        handleDeleteDes(index);
        setIsEdit(false);
    }


    const handleSave = () => {
        const title = desForm.getFieldValue("title");
        const description = desForm.getFieldValue("description");
        console.log(title);
        handleSaveDes(index, title, description);
        setIsEdit(false);
    }

    const initialValues = {title, description};

    return <>
        {isEdit 
        ? 
            <Form className="w-full" form={desForm} initialValues={initialValues}>
                <Row className="w-1/4">
                    <Form.Item name="title" className="w-full m-0">
                        <Input 
                            placeholder="Tên điểm đến" 
                            className="border-none text-2xl" 
                            style={{fontFamily: "Signika", color: "rgb(0, 0, 0, 0.5)"}}
                        />
                    </Form.Item>
                    <Divider className="m-0 border-2 mb-3 w-full" style={{borderColor: "rgb(0, 0, 0, 0.5)"}} />
                </Row>
                <Form.Item name="description" className="m-0">
                    <Input.TextArea 
                        placeholder="Mô tả điểm đến" 
                        className="border-none w-full text-2xl" 
                        style={{fontFamily: "Signika", color: "rgb(0, 0, 0, 0.5)"}}
                    />
                </Form.Item>
                <Divider className="m-0 border-2 mb-3" style={{borderColor: "rgb(0, 0, 0, 0.5)"}} />
                <Row className="w-full flex justify-end">
                    <Button className="border-none p-0 m-0 mr-2">
                        <BsFillDashCircleFill size={25} color="red" onClick={handleDelete} />
                    </Button>
                    <Button className="border-none p-0 m-0">
                        <BsFillCheckCircleFill size={25} color="blue" onClick={handleSave} />
                    </Button>
                </Row>
            </Form>
        :
            <Row className="w-full mb-5">
                <Row className="w-1/4 mb-3 text-2xl" style={{fontFamily: "Signika", color: "#DC4E62"}}>{title}</Row>
                <Row className="w-3/4 flex justify-end">
                    <Button className="border-none p-0 m-0" onClick={() => setIsEdit(true)}>
                        <BsPencil size={24} />
                    </Button>    
                </Row>
                <Row className="w-full mb-3 text-2xl" style={{fontFamily: "Signika", color: "#103479"}}>{description}</Row>
            </Row>
        }
    </>
};

const AddDestination = () => {
    const [desList, setDesList] = useState([
        {
            title: "Nhà Thờ Lớn Hà Nội",
            description: "Nhà Thờ Lớn được người Pháp xây dựng vào những năm đầu của thế kỷ 19, theo phong cách kiến trúc trung cổ của Châu Âu. Nhà thờ được xây dựng theo nguyên mẫu của Nhà thờ Đức Bà Paris với các mái vòm rộng, uốn cong hướng lên bầu trời. Nhà thờ có chiều rộng 20,5m và dài 64,5m, hai tháp chuông cao 31,5m."
        }
    ]);
    const [addForm] = Form.useForm();

    const handleAddDes = () => {
        const value = addForm.getFieldsValue();
        console.log(value);
        setDesList([...desList,
            {
                ...value
            }
        ]);
        addForm.resetFields();
    }

    const handleDeleteDes = (index) => {
        const newDesList = [...desList];
        newDesList.splice(index, 1);
        setDesList(newDesList);
    }

    const handleSaveDes = (index, title, description) => {
        console.log(index, title, description);
        const newDesList = [...desList];
        newDesList[index].title = title;
        newDesList[index].description = description;
        setDesList(newDesList);
    }
    return(
        <>
            <Row className="w-full pl-20 pt-10" style={{fontFamily: "Signika", fontSize: "25px"}}>Thêm điểm đến</Row>
            <Row className="w-full px-40 pt-5 mb-5">
                {desList.map((des, index) => <>
                    <DestinationBox key={index} index={index} title={des.title} description={des.description} handleDeleteDes={handleDeleteDes} handleSaveDes={handleSaveDes} /> 
                </>)}
                <Form className="w-full" form={addForm}>
                    <Row className="w-1/4">
                        <Form.Item name="title" className="w-full m-0">
                            <Input placeholder="Tên điểm đến" className="border-none text-2xl" style={{fontFamily: "Signika", color: "rgb(0, 0, 0, 0.5)"}}/>
                        </Form.Item>
                        <Divider className="m-0 border-2 mb-3 w-full" style={{borderColor: "rgb(0, 0, 0, 0.5)"}} />
                    </Row>
                    <Form.Item name="description" className="m-0">
                        <Input.TextArea placeholder="Mô tả điểm đến" className="border-none w-full text-2xl" style={{fontFamily: "Signika", color: "rgb(0, 0, 0, 0.5)"}}/>
                    </Form.Item>
                    <Divider className="m-0 border-2 mb-3" style={{borderColor: "rgb(0, 0, 0, 0.5)"}} />
                    <Row className="w-full flex justify-end">
                        <Button className="border-none p-0 m-0" onClick={handleAddDes}>
                            <BsFillCheckCircleFill size={25} color="blue" />
                        </Button>
                    </Row>
                </Form>
            </Row>
        </>
    )
}

export default AddDestination;