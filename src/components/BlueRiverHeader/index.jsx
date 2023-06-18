import { Anchor, Avatar, Button, Image, Space } from "antd";
import Logo from "../Logo";
import './index.css';
import blueRiver from "../../assets/images/blue-river.jpg";
import avatar from "../../assets/images/main-avatar.png";
import { useNavigate } from "react-router-dom";

function BlueRiverHeader() {
    const navigate = useNavigate();

    const handleAsking = () => {
        navigate('/ask-something');
    }
    const handleForum = () => {
        navigate('/forum');
    }
    const handlePersonal = () => {
        navigate("/personal-info");
    }

    return(
        <div className="blue-river-header">
            <Image 
                src={blueRiver}
                preview={false}
            ></Image>
            <div className="wrap-header-container">
                <div className='header-container'>
                    <Logo color='white' size={60}></Logo>
                    <Space  size={50}>
                        <Space size={15}>
                            <Button type="link" onClick={handleAsking} className="button">Q & A</Button>                  
                            <Button type="link" onClick={handleForum} className="button">Forum</Button>                  
                            <Button type="link" className="button">My Tours</Button>                  
                        </Space>
                        <Space size={-15}>
                            <Avatar src={avatar} size={50} className="avatar"></Avatar>
                            <Button type="text" className="name" onClick={handlePersonal}>Anh Leonard</Button>
                        </Space>
                    </Space>
                </div>
            </div>
        </div>  
    )
}

export default BlueRiverHeader;