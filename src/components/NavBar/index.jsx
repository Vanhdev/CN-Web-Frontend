import { Avatar, Button, Space, Menu, Divider } from 'antd';
import avatar from '../../assets/images/main-avatar.png';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function NavBar() {
    const user = useSelector( state => state.auth.login?.currentUser);
    
    const navigate = useNavigate();

    const handleRoute = (item) => {
        item.key === 'personal-info' ? navigate('/personal-info') : navigate(`/personal-info/${item.key}`);
    }

    return(
        <div className="personal-info-container">
            <Space className='navbar' size={40}>
                <Space className='navbar-avatar'>
                    <Avatar src={avatar} size={80}></Avatar>
                    <div>{user.name}</div>
                </Space>
                <Space className="navbar-tools" size={20}>
                    <Menu
                        mode='vertical'
                        onClick={handleRoute}
                    >
                        <Menu.Item key="personal-info" className='item-tool'>Thông tin cá nhân</Menu.Item>
                        <Menu.Item key="tour-histories" className='item-tool'>Lịch sử đặt tour</Menu.Item>
                        <Menu.Item key="loved-tours" className='item-tool'>Tours yêu thích</Menu.Item>
                        <Menu.Item key="change-pass" className='item-tool'>Đổi mật khẩu</Menu.Item>
                    </Menu>
                </Space>
            </Space>
        </div>    
    )
}

export default NavBar;