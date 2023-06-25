import { Avatar, Button, Space } from "antd";
import Logo from "../../Logo";
import avatar from '../../../assets/images/main-avatar.png';
import './index.css';
import { TbLogout } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/authSlice";

const HeaderWhite = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(logout());
        navigate("/");
    }

    return(
        <div className="header-white">
            <Space className='header-container'>
                <Logo color='var(--blue-color)' size={60}></Logo>
                <Space  size={50}>
                    <Space size={-15}>
                        <Button 
                            type="text" 
                            style={{color: 'var(--blue-color)', display: "flex", alignItems: "center", justifyContent: "center"}} 
                            onClick={handleClick}>
                                <TbLogout size={30} />
                        </Button>
                    </Space>
                </Space>
            </Space>
        </div>    
    )
}

export default HeaderWhite;