import { Button, Divider, Form, Input, Row, Col, Image } from "antd";
import React, { useEffect, useState } from "react";
import "../../../../assets/fonts.css";
import { BsFillCheckCircleFill, BsFillDashCircleFill, BsPencil } from "react-icons/bs";
import UploadBox from "../../../../components/UploadBox";
import { addPlace, getAllPlace, imgSourceToFile, savePlace } from "../../../../API";
import { useSelector } from "react-redux";

const domain = "http://localhost:8086/";

const DestinationBox = (props) => {
    const accessToken = useSelector(state => state.auth.login.currentUser.accessToken);
    const [desForm] = Form.useForm();
    const [isEdit, setIsEdit] = useState(false);
    const [image, setImage] = useState({});
    const { id, title, description, img, setInitialImage, setDesList } = props;
    const imageUrl = domain + img.replace("\\", "/");
    const initialImage = [
        {
            uid: "-1",
            name: 'Image',
            status: 'done',
            url: imageUrl
        }
    ];

    const handleSave = () => {
        const value = desForm.getFieldsValue();
        
        const newForm = new FormData();
        newForm.append('name', value.title);
        newForm.append('description', value.description);
        newForm.append('image', image);

        savePlace(id, newForm, accessToken).then(() => {
            getAllPlace().then(data => setDesList(data));
            desForm.resetFields();
            setImage({});
            setInitialImage([]);
            setIsEdit(false);
        });
    }

    const handleEdit = () => {
        imgSourceToFile(imageUrl).then(data => setImage(data));
        setIsEdit(true);
    }

    const initialValues = {title, description};

    return <>
        {isEdit 
        ? 
            <Form className="w-full mb-5" form={desForm} initialValues={initialValues}>
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
                <Row className="w-full flex items-center">
                        <Col span={22}>
                            <Form.Item name="description" className="m-0 w-full">
                                <Input.TextArea placeholder="Mô tả điểm đến" className="border-none w-full text-2xl" style={{fontFamily: "Signika", color: "rgb(0, 0, 0, 0.5)"}}/>
                            </Form.Item>
                        </Col>
                        <Col span={2}>
                            <UploadBox setImage={setImage} initialImage={initialImage} />
                        </Col>
                    </Row>
                <Divider className="m-0 border-2 mb-3" style={{borderColor: "rgb(0, 0, 0, 0.5)"}} />
                <Row className="w-full flex justify-end">
                    <Button className="border-none p-0 m-0">
                        <BsFillCheckCircleFill size={25} color="blue" onClick={handleSave} />
                    </Button>
                </Row>
            </Form>
        :
            <Row className="w-full mb-5">
                <Row className="w-1/4 mb-3 text-2xl" style={{fontFamily: "Signika", color: "#DC4E62"}}>{title}</Row>
                <Row className="w-3/4 flex justify-end">
                    <Button className="border-none p-0 m-0" onClick={() => handleEdit()}>
                        <BsPencil size={24} />
                    </Button>    
                </Row>
                <Row className="w-full mb-3 flex items-center">
                    <Col span={22} className="text-2xl pr-1"  style={{fontFamily: "Signika", color: "#103479"}}>
                        {description}
                    </Col>
                    <Col span={2}>
                        <Image width={"100px"} height={"100px"} src={imageUrl} />
                    </Col>
                </Row>
            </Row>
        }
    </>
};

const AddDestination = () => {
    const accessToken = useSelector(state => state.auth.login.currentUser.accessToken);
    const [image, setImage] = useState({});
    const [initialImage, setInitialImage] = useState([]);
    const [desList, setDesList] = useState([]);
    const [addForm] = Form.useForm();

    useEffect(() => {
        getAllPlace().then(data => setDesList(data)); 
    },[]);

    const handleAddDes = () => {
        const value = addForm.getFieldsValue();
        
        const newForm = new FormData();
        newForm.append('name', value.title);
        newForm.append('description', value.description);
        newForm.append('image', image);

        addPlace(newForm, accessToken).then(() => {
            getAllPlace().then(data => setDesList(data));
            addForm.resetFields();
            setImage({});
            setInitialImage([]);
        });
    }

    return(
        <>
            <Row className="w-full pl-20 pt-10" style={{fontFamily: "Signika", fontSize: "25px"}}>Thêm điểm đến</Row>
            <Row className="w-full px-40 pt-5 mb-5">
                {desList.map((des, index) => <>
                    <DestinationBox id={des.id} key={index} index={index} title={des.name} img={des.img.image_url} description={des.description} setInitialImage={setInitialImage} setDesList={setDesList} /> 
                </>)}
                <Form className="w-full" form={addForm}>
                    <Row className="w-1/4">
                        <Form.Item name="title" className="w-full m-0 mb-1">
                            <Input placeholder="Tên điểm đến" className="border-none text-2xl" style={{fontFamily: "Signika", color: "rgb(0, 0, 0, 0.5)"}}/>
                        </Form.Item>
                        <Divider className="m-0 border-2 mb-3 w-full" style={{borderColor: "rgb(0, 0, 0, 0.5)"}} />
                    </Row>
                    <Row className="w-full flex items-center">
                        <Col span={22} className="pr-1">
                            <Form.Item name="description" className="m-0 w-full">
                                <Input.TextArea placeholder="Mô tả điểm đến" className="border-none w-full text-2xl" style={{fontFamily: "Signika", color: "rgb(0, 0, 0, 0.5)"}}/>
                            </Form.Item>
                        </Col>
                        <Col span={2}>
                            <UploadBox setImage={setImage} initialImage={initialImage} />
                        </Col>
                    </Row>
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