import { Anchor, Avatar, Button, Image, Space } from "antd";
import Logo from "../Logo";
import './index.css';
import blueRiver from "../../assets/images/blue-river.jpg";
import avatar from "../../assets/images/main-avatar.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const BlueRiverHeader = (props) => {
    const navigate = useNavigate();
    const { currentUser } = props;

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
                width={"100%"}
            ></Image>
            <div className="wrap-header-container">
                <div className='header-container'>
                    <Logo color='white' size={60}></Logo>
                    <Space  size={50}>
                        <Space size={15}>
                            <Button type="link" onClick={handleAsking} className="button">Q & A</Button>                  
                            <Button type="link" onClick={handleForum} className="button">Forum</Button>                  
                            {
                                currentUser
                                ?
                                    <Button type="link" className="button">My Tours</Button>                  
                                :
                                    <Button type="link" className="button" onClick={() => navigate("/login")}>Login</Button>
                            }
                        </Space>
                        <Space size={-15}>
                            {
                                currentUser 
                                ? 
                                <>
                                    <Avatar src={avatar} size={50} className="avatar"></Avatar>
                                    <Button type="text" className="name" onClick={handlePersonal}>{currentUser?.name}</Button>
                                </>
                                : 
                                null
                            }
                        </Space>
                    </Space>
                </div>
            </div>
        </div>  
    )
}

export default BlueRiverHeader;
