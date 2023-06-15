import { Anchor, Avatar, Button, Image, Space } from "antd";
import Logo from "../Logo";
import './index.css';
import blueRiver from "../../assets/images/blue-river-2.svg";
import avatar from "../../assets/images/main-avatar.svg";
import { useNavigate } from "react-router-dom";

function BlueRiverHeader() {
    const navigate = useNavigate();

    const handleAsking = () => {
        navigate('/ask-something');
    }
    const handleForum = () => {
        navigate('/forum');
    }

    return(
        <div className="blue-river-header">
            <Image src={blueRiver} className="top-image"></Image>
            <Space className='header-container'>
                <Logo color='white' size={60}></Logo>
                <Space  size={50}>
                    <Space size={15}>
                        <Button type="link" onClick={handleAsking} className="button">Q & A</Button>                  
                        <Button type="link" onClick={handleForum} className="button">Forum</Button>                  
                        <Button type="link" className="button">My Tours</Button>                  
                    </Space>
                    <Space size={-15}>
                        <Avatar src={avatar} size={50} className="avatar"></Avatar>
                        <Button type="text" className="name">Anh Leonard</Button>
                    </Space>
                </Space>
            </Space>
        </div>  
    )
}

export default BlueRiverHeader;
