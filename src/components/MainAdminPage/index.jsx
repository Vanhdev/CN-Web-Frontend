import { Image, Spin } from "antd";
import AdminContent from "../../pages/AdminContent";
import HeaderWhite from "../ComponentAdmin/HeaderWhite";
import adminImage from '../../assets/images/admin-background.jpg';
import HeaderOption from "../ComponentAdmin/HeaderOption";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function MainAdminPage() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.login?.currentUser);
    // // console.log({user})

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, []);

    return(
        <>
            {
                user?.email === "admin@gmail.com" && <div className="admin-page">
                            <HeaderWhite/>
                            <Image src={adminImage} width={"100%"} preview={false}/>
                            <HeaderOption/>
                            <AdminContent/>
                        </div>
            }
            {
                !user && <Spin></Spin>
            }
        </>    
    )
}

export default MainAdminPage;