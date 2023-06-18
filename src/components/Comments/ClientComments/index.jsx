import { Space, Typography } from "antd";
import AvatarPost from "../../AvatarPost";
import RateItemColumn from "../../RateItemColumn";

import avatar from '../../../assets/images/main-avatar.png';

function ClientComments() {
    return(
        <div className="wrap-client-comments">
            <div>
                <div className="margin25">
                    <AvatarPost avatar={avatar} name='Anh Leonard' date='12/04/2023'/>
                </div>
                <Space className="client-evaluate">
                    <RateItemColumn label='Vị trí địa lý' value={3.5}/>
                    <RateItemColumn label='Phòng ốc' value={3.5}/>
                    <RateItemColumn label='Dịch vụ' value={3.5}/>
                    <RateItemColumn label='Giá cả' value={3.5}/>
                </Space>
                <div className="margin25">
                    <Typography.Paragraph>What a nice article. It keeps me reading more and more!</Typography.Paragraph>
                </div>
            </div>
        </div>    
    )
}

export default ClientComments;