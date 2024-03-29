import React from "react";
import { Button, Form, Row, Input, Col, DatePicker } from "antd";
import { MdAttachEmail, MdPhoneInTalk, MdLocationOn } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import { RiCalendar2Fill } from "react-icons/ri";
import Logo from "../../components/Logo";
import background from "../../assets/images/LoginPageBackground.jpg";
import "../../assets/fonts.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { registerUser } from "../../API";
import dayjs from "dayjs";
import "./styles.css";

const SigninModal = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [date_of_birth, setDate] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [form] = Form.useForm();
    const onFinish = () => {
      // // console.log(form.getFieldsValue());
      // // console.log("Signin!!!");
    };
    const onFinishFailed = (err) => {
      // // console.log("Error: ", err);
    };

    const handleRegister = async (e) => {
      e.preventDefault();
      const newUser = { name, email, password, phone_number, date_of_birth };
      registerUser(newUser, dispatch, navigate);
    };

    return (
      <>
        <Col span={24} className="mb-7 text-3xl text-center text-white">
          Đăng ký
        </Col>
        <Col span={24}>
          <Form onFinish={onFinish} onFinishFailed={onFinishFailed} form={form}>
            <Row>
              <Col span={10}>
                <Row className="py-2 m-5 border-b-2">
                  <Col span={2} className="flex justify-center items-center">
                    <FaUserEdit color="white" size={24} />
                  </Col>
                  <Col span={21} offset={1}>
                    <Form.Item name="name" className="m-0">
                      <Input
                        placeholder="Tên"
                        className="h-full text-white bg-transparent border-none placeholder:text-white"
                        size="large"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Form.Item>
                  </Col>
                </Row>
  
                <Row className="py-2 m-5 border-b-2">
                  <Col span={2} className="flex justify-center items-center">
                    <RiCalendar2Fill color="white" size={25} />
                  </Col>
                  <Col span={21} offset={1}>
                    <Form.Item name="birthday" className="m-0">
                      <DatePicker
                        placeholder="Ngày sinh"
                        className="h-full w-full bg-transparent border-none white-datepicker"
                        size="large"
                        onChange={(date, dateString) => setDate(dateString)}
                      />
                    </Form.Item>
                  </Col>
                </Row>
  
                <Row className="py-2 m-5 border-b-2">
                  <Col span={2} className="flex justify-center items-center">
                    <MdPhoneInTalk color="white" size={25} />
                  </Col>
                  <Col span={21} offset={1}>
                    <Form.Item name="phoneNumber" className="m-0">
                      <Input
                        placeholder="Số điện thoại"
                        className="h-full text-white bg-transparent border-none placeholder:text-white"
                        size="large"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </Form.Item>
                  </Col>
                </Row>
  
                {/* <Row className="py-2 m-5 border-b-2">
                  <Col span={2} className="flex justify-center items-center">
                    <MdLocationOn color="white" size={25} />
                  </Col>
                  <Col span={21} offset={1}>
                    <Form.Item name="location" className="m-0">
                      <Input
                        placeholder="Địa chỉ"
                        className="h-full text-white bg-transparent border-none placeholder:text-white"
                        size="large"
                      />
                    </Form.Item>
                  </Col>
                </Row> */}
              </Col>
  
              <Col span={10} offset={4}>
                <Row className="py-2 m-5 border-b-2">
                  <Col span={2} className="flex justify-center items-center">
                    <MdAttachEmail color="white" size={26} />
                  </Col>
                  <Col span={21} offset={1}>
                    <Form.Item name="email" className="m-0">
                      <Input
                        placeholder="Email"
                        className="h-full text-white bg-transparent border-none placeholder:text-white"
                        size="large"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Item>
                  </Col>
                </Row>
  
                <Row className="py-2 m-5 border-b-2">
                  <Col span={2} className="flex justify-center items-center">
                    <IoMdLock color="white" size={25} />
                  </Col>
                  <Col span={21} offset={1}>
                    <Form.Item name="password" className="m-0">
                      <Input
                        placeholder="Mật khẩu"
                        className="h-full text-white bg-transparent border-none placeholder:text-white"
                        size="large"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Item>
                  </Col>
                </Row>
  
                <Row className="py-2 m-5 border-b-2">
                  <Col span={2} className="flex justify-center items-center">
                    <IoMdLock color="white" size={25} />
                  </Col>
                  <Col span={21} offset={1}>
                    <Form.Item name="confirm" className="m-0">
                      <Input
                        placeholder="Xác nhận mật khẩu"
                        className="h-full text-white bg-transparent border-none placeholder:text-white"
                        size="large"
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
            </Row>
  
            <Col span={24} className="flex justify-center pt-5 m-5">
              <Col span={12}>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="w-full h-12 rounded-none border-none"
                    style={{ backgroundColor: "#5A62AA" }}
                    onClick={handleRegister}
                  >
                    Đăng ký
                  </Button>
                </Form.Item>
              </Col>
            </Col>
  
            <Col span={24} className="m-5 text-right">
              <Button type="link" onClick={() => navigate("/login")}>
                <Row
                  className="text-white underline"
                  style={{ fontFamily: "Signika" }}
                >
                  Đăng nhập
                </Row>
              </Button>
            </Col>
          </Form>
        </Col>
      </>
    );
};

const RegisterPage = () => {

  return (
    <>
      <Row
        style={{
          height: "100vh",
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Col span={4} className="pt-3">
          <Logo size="60" color="white" />
        </Col>
        <Col
          span={16}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Col span={18}>
              <SigninModal />
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default RegisterPage;