import { Image } from "antd";
import AdminContent from "../../pages/AdminContent";
import HeaderWhite from "../ComponentAdmin/HeaderWhite";
import adminImage from '../../assets/images/admin-background.svg';
import HeaderOption from "../ComponentAdmin/HeaderOption";

function MainAdminPage() {
    return(
        <div className="admin-page">
            <HeaderWhite/>
            <Image src={adminImage} preview={false}/>
            <HeaderOption/>
            <AdminContent/>
        </div>    
    )
}

export default MainAdminPage;