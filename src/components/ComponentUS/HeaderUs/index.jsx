import { Avatar, Button, Space } from "antd";
import avatar from '../../../assets/images/main-avatar.svg';
import Logo from "../../Logo";
import { useNavigate } from "react-router-dom";
import './index.css';

function HeaderUs() {
    const navigate = useNavigate();

    const handleAsking = () => {
        navigate('/ask-something');
    }
    const handleForum = () => {
        navigate('/forum');
    }

    const colorBlack = {
        color: "black",
    }

    return(
        <div className="header-white">
            <Space className='header-container'>
                <Logo color='var(--blue-color)' size={60}></Logo>
                <Space  size={50}>
                    <Space size={15}>
                        <Button 
                            type="link" 
                            onClick={handleAsking} 
                            className="button color-hover"
                            style={colorBlack}
                        >Q & A</Button>
                        <Button 
                            type="link" 
                            onClick={handleForum} 
                            className="button color-hover"
                            style={colorBlack}
                        >Forum</Button>                  
                        <Button 
                            type="link" 
                            className="button color-hover"
                            style={colorBlack}
                        >My Tours</Button>                  
                    </Space>
                    <Space size={-15}>
                        <Avatar src={avatar} size={50} className="avatar"></Avatar>
                        <Button type="text" style={{color: 'var(--blue-color)'}}>Anh Leonard</Button>
                    </Space>
                </Space>
            </Space>
        </div>    
    )
}

export default HeaderUs;