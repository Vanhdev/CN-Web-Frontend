import { Avatar, Button, Space } from "antd";
import Logo from "../../Logo";
import avatar from '../../../assets/images/main-avatar.png';
import './index.css';

function HeaderWhite() {
    return(
        <div className="header-white">
            <Space className='header-container'>
                <Logo color='var(--blue-color)' size={60}></Logo>
                <Space  size={50}>
                    <Space size={-15}>
                        <Avatar src={avatar} size={50} className="avatar"></Avatar>
                        <Button type="text" style={{color: 'var(--blue-color)'}}>Anh Leonard</Button>
                    </Space>
                </Space>
            </Space>
        </div>    
    )
}

export default HeaderWhite;