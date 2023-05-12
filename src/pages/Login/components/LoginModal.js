import React from "react";
import { Button, Form, Row, Input, Col } from "antd";
import { MdAttachEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";

const LoginModal = (props) => {
  const { setStatus } = props;
  const [form] = Form.useForm();
  const onFinish = () => {
    console.log(form.getFieldsValue());
    console.log("Login!!!");
  };
  const onFinishFailed = (err) => {
    console.log("Error: ", err);
  };
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
              >
                Đăng nhập
              </Button>
            </Form.Item>
          </Col>

          <Col span={24} className="m-5 text-right">
            <Button type="link" onClick={() => setStatus("Signin")}>
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

export default LoginModal;
