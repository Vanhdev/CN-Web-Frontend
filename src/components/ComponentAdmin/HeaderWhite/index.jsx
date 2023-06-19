import { Avatar, Button, Space } from "antd";
import Logo from "../../Logo";
import avatar from '../../../assets/images/main-avatar.png';
import './index.css';
import { TbLogout } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const HeaderWhite = () => {
    const navigate = useNavigate();
    return(
        <div className="header-white">
            <Space className='header-container'>
                <Logo color='var(--blue-color)' size={60}></Logo>
                <Space  size={50}>
                    <Space size={-15}>
                        <Button type="text" style={{color: 'var(--blue-color)', display: "flex", alignItems: "center", justifyContent: "center"}} onClick={() => navigate("/")}><TbLogout size={30} /></Button>
                    </Space>
                </Space>
            </Space>
        </div>    
    )
}

export default HeaderWhite;