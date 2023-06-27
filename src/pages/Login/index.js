// import React from "react";
import { Button, Form, Row, Input, Col } from "antd";
import { MdAttachEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import Logo from "../../components/Logo";
import background from "../../assets/images/LoginPageBackground.jpg";
import "../../assets/fonts.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../API";
import { useDispatch } from "react-redux";

const LoginModal = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [form] = Form.useForm();
    const onFinish = () => {
      // // console.log(form.getFieldsValue());
      // // console.log("Login!!!");
    };
    const onFinishFailed = (err) => {
      // // console.log("Error: ", err);
    };

    const handleLogin = (e) => {
      e.preventDefault();
      const user = {
        email: email,
        password: password
      }
      loginUser(user, dispatch, navigate);
    }
    return (
      <>
        <Col span={24} className="mb-7 text-3xl text-center text-white">
          Đăng nhập
        </Col>
        <Col span={24}>
          <Form onFinish={onFinish} onFinishFailed={onFinishFailed} form={form}>
            <Row className="py-2 m-5 border-b-2">
              <Col span={2} className="flex justify-center items-center">
                <MdAttachEmail color="white" size={25} />
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
                <IoMdLock color="white" size={26} />
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
  
            <Col span={24} className="pt-5 m-5">
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full h-12 rounded-none border-none"
                  style={{ backgroundColor: "#5A62AA" }}
                  onClick={handleLogin}
                >
                  Đăng nhập
                </Button>
              </Form.Item>
            </Col>
  
            <Col span={24} className="m-5 text-right">
              <Button type="link" onClick={() => navigate("/register")}>
                <Row
                  className="text-white underline"
                  style={{ fontFamily: "Signika" }}
                >
                  Đăng ký
                </Row>
              </Button>
            </Col>
          </Form>
        </Col>
      </>
    );
};
  

const LoginPage = () => {

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
          <Col span={9}>
              <LoginModal />
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default LoginPage;