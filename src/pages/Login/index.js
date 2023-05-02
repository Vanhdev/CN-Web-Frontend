import { Row, Col } from "antd";
import React, { useState } from "react";
import LoginModal from "./components/LoginModal";
import SigninModal from "./components/SigninModal";

const LoginPage = () => {
  const [status, setStatus] = useState("Login");

  return (
    <>
      <Row style={{ height: "100vh", backgroundColor: "grey" }}>
        <Col span={4}>Logo</Col>
        <Col
          span={16}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Col span={status === "Login" ? 9 : 18}>
            {status === "Login" ? (
              <LoginModal setStatus={setStatus} />
            ) : (
              <SigninModal setStatus={setStatus} />
            )}
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default LoginPage;
