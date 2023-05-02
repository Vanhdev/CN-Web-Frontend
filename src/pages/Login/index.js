import { Row, Col } from "antd";
import React, { useState } from "react";
import Logo from "../../components/Logo";
import LoginModal from "./components/LoginModal";
import SigninModal from "./components/SigninModal";

const LoginPage = () => {
  const [status, setStatus] = useState("Login");

  return (
    <>
      <Row
        style={{
          height: "100vh",
          // backgroundImage: `url("../../assets/LoginPageBackground.png")`,
          backgroundColor: "grey",
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
