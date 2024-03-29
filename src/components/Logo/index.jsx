import React from "react";
import { Row, Col, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Logo = (props) => {
  const navigate = useNavigate();
  const currentUser = useSelector(state => state.auth.login.currentUser);
  const { color, size } = props;

  const handleClick = () => {
    currentUser?.email === "admin@gmail.com" ? navigate("/admin") : navigate("/");
  }

  return (
    <>
      <Button className="w-fit h-fit m-0 p-0 border-none" onClick={handleClick}>
        <Row className="logo">
          <Col>
            <svg
              width={size}
              height={size}
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M45.8332 29.1667C45.8332 29.1667 40.2082 40.1938 37.4999 54.1667C34.7916 68.1396 35.4166 87.5 35.4166 87.5M70.7353 48.4833C71.4562 48.9625 72.5957 49.2979 73.7103 49.5313C75.652 49.9354 77.4437 48.6021 77.3937 46.6208C77.2999 42.925 75.8582 36.8813 68.5228 32.0083C61.5957 27.4104 54.7187 27.3458 50.3812 28.0083C47.9082 28.3833 46.9228 31.0875 48.3437 33.1479C49.6103 34.9875 51.0853 36.8438 52.0832 37.2C54.1666 37.9396 56.6728 35.9875 58.4999 37.2C60.3249 38.4104 59.7812 41.2104 61.6082 42.4229C63.4332 43.6354 65.802 42.0479 67.6291 43.2604C69.452 44.4729 68.9103 47.2708 70.7353 48.4833Z"
                stroke={color}
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M41.6666 35.4167C43.4541 34.8209 44.5604 32.8625 45.1791 31.2938C45.6916 29.998 45.2333 28.5688 44.0333 27.8605C41.3354 26.2646 35.5749 24.0813 26.5874 26.6917C17.702 29.2709 15.3583 35.1417 14.7604 38.598C14.6907 38.9752 14.7002 39.3628 14.7882 39.7362C14.8762 40.1096 15.0407 40.4606 15.2714 40.7671C15.5021 41.0736 15.7939 41.3289 16.1284 41.5167C16.4629 41.7046 16.8327 41.8209 17.2145 41.8584C18.3812 41.9896 19.6645 41.9313 20.4312 41.2813C22.1124 39.8542 22.5666 37.9855 24.4458 37.4813C26.3229 36.9792 27.9437 39.2688 29.8208 38.7646C31.6999 38.2625 31.9583 35.4688 33.8354 34.9646C35.7145 34.4625 38.5416 36.4584 41.6666 35.4167ZM56.2499 12.5C51.0416 14.5834 45.8333 25 45.8333 29.1667L72.9166 16.6667C70.0416 11.6855 61.4583 10.4167 56.2499 12.5Z"
                stroke={color}
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M41.6666 10.4167C49.9999 13.3792 48.7083 24.1854 45.8333 29.1667L20.8333 12.3375C22.9166 8.33334 33.3333 7.45626 41.6666 10.4167Z"
                stroke={color}
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M54.1667 72.9167C71.425 72.9167 81.25 76.6459 81.25 81.25C81.25 85.8542 67.2583 89.5834 50 89.5834C32.7417 89.5834 18.75 85.8542 18.75 81.25C18.75 80.125 19.5833 79.0563 21.0937 78.0771"
                stroke={color}
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </Col>
          <Col className="flex items-center" style={{display:'flex', alignItems: 'center'}} >
            <Row
              style={{ color: color, fontSize: size / 2, fontFamily: "Satisfy" }}
            >
              TripWise
            </Row>
          </Col>
        </Row>
      </Button>
    </>
  );
};

export default Logo;