import AlertDelete from "../../AlertDelete";
import AvatarPost from "../../AvatarPost";
import DropdownUserOption from "../../DropdownUserOption";
import RateItemColumn from "../../RateItemColumn";

import avatar from '../../../assets/images/main-avatar.svg';
import { Space, Typography } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";


function UserComments(props) {
    const {setShowUpdate, item, index} = props;
    
    const [showAlert, setShowAlert] = useState(false);

    return(
        <div className="wrap-client-comments">
            <div>
                <div className="user-header-cmt margin25">
                    <AvatarPost avatar={avatar} name='Anh Leonard' date='12/04/2023'/>
                    {
                        showAlert ? <AlertDelete setShowAlert={setShowAlert} index={index}/> : <DropdownUserOption setShowAlert={setShowAlert} setShowUpdate={setShowUpdate}/>
                    }
                </div>
                <Space className="client-evaluate">
                    <RateItemColumn label='Vị trí địa lý' value={item.positionValue}/>
                    <RateItemColumn label='Phòng ốc' value={item.roomValue}/>
                    <RateItemColumn label='Dịch vụ' value={item.priceValue}/>
                    <RateItemColumn label='Giá cả' value={item.serviceValue}/>
                </Space>
                <div className="margin25">
                    <Typography.Paragraph style={{textAlign:'justify'}}>{item.comment}</Typography.Paragraph>
                </div>
            </div>
        </div>    
    )
}

export default UserComments;