import { Avatar, Button, Space } from "antd";
import avatar from '../../../assets/images/main-avatar.png';
import Logo from "../../Logo";
import { useNavigate } from "react-router-dom";
import './index.css';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/authSlice";

function HeaderUs() {
    const user = useSelector( state => state.auth.login?.currentUser);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleAsking = () => {
        navigate('/ask-something');
    }
    const handleForum = () => {
        navigate('/forum');
    }

    const colorBlack = {
        color: "black",
    }

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    }

    const handlePersonalInformation = () => {
        navigate('/personal-info');
    }

    return(
        <div className="header-white">
            <Space className='header-container'>
                <Logo color='var(--blue-color)' size={60}></Logo>
                <Space  size={30}>
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
                    </Space>
                    {user ? 
                        <>
                            <Space size={-15}>
                                <Avatar src={avatar} size={50} className="avatar"></Avatar>
                                <Button 
                                    type="text" 
                                    style={{color: 'var(--blue-color)'}}
                                    onClick={handlePersonalInformation}
                                >{user?.name}</Button>
                            </Space>
                            <Space onClick={handleLogout}>
                                <ExitToAppIcon 
                                sx={{
                                    cursor: 'pointer',
                                }}
                                />
                            </Space>
                        </>
                    : null
                    }
                </Space>
            </Space>
        </div>    
    )
}

export default HeaderUs;