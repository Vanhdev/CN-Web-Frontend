import AlertDelete from "../../AlertDelete";
import AvatarPost from "../../AvatarPost";
import DropdownUserOption from "../../DropdownUserOption";
import RateItemColumn from "../../RateItemColumn";

import avatar from '../../../assets/images/main-avatar.svg';
import { Space, Typography } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";


function UserComments(props) {
    const {setShowUpdate} = props;
    
    const userValue = useSelector(state => state.commentUser);
    const [showAlert, setShowAlert] = useState(false);

    const {positionValue, roomValue, priceValue, serviceValue, comment} = userValue;
    
    return(
        <div className="wrap-client-comments">
            <div>
                <div className="user-header-cmt margin25">
                    <AvatarPost avatar={avatar} name='Anh Leonard' date='12/04/2023'/>
                    {
                        showAlert ? <AlertDelete setShowAlert={setShowAlert}/> : <DropdownUserOption setShowAlert={setShowAlert} setShowUpdate={setShowUpdate}/>
                    }
                </div>
                <Space className="client-evaluate">
                    <RateItemColumn label='Vị trí địa lý' value={positionValue}/>
                    <RateItemColumn label='Phòng ốc' value={roomValue}/>
                    <RateItemColumn label='Dịch vụ' value={priceValue}/>
                    <RateItemColumn label='Giá cả' value={serviceValue}/>
                </Space>
                <div className="margin25">
                    <Typography.Paragraph>{comment}</Typography.Paragraph>
                </div>
            </div>
        </div>    
    )
}

export default UserComments;