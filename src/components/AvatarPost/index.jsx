import { Avatar, Space } from "antd";

function AvatarPost(props) {
    const {avatar, name, date} = props;

    return(
        <Space className="avatar-cmt">
            <div>
                <Avatar size={'large'} src={avatar}></Avatar>
            </div>
            <div className="avatar-cmt-user">
                <div>{name}</div>
                <div style={{color: 'var(--gray-color)', fontSize: '12px'}}>{date}</div>
            </div>
        </Space>    
    )
}

export default AvatarPost;