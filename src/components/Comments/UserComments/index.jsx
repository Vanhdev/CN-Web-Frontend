import AlertDelete from "../../AlertDelete";
import AvatarPost from "../../AvatarPost";
import DropdownUserOption from "../../DropdownUserOption";
import RateItemColumn from "../../RateItemColumn";

import avatar from '../../../assets/images/main-avatar.png';
import { Space, Typography } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";


function UserComments(props) {
    const {setShowUpdate, item, index} = props;
    
    const [showAlert, setShowAlert] = useState(false);
    const user = useSelector( state => state.auth.login?.currentUser);

    return(
        <div className="wrap-client-comments">
            <div>
                <div className="user-header-cmt margin25">
                    <AvatarPost avatar={avatar} name={`USER ID: ${item.user_id}`} date='12/04/2023'/>
                    {
                        user.id == item.user_id && showAlert && <AlertDelete setShowAlert={setShowAlert} index={index}/>
                    }
                    {
                        user.id == item.user_id && !showAlert && <DropdownUserOption setShowAlert={setShowAlert} setShowUpdate={setShowUpdate}/>
                    }
                </div>
                <Space className="client-evaluate">
                    <RateItemColumn label='Vị trí địa lý' value={item.location_rate}/>
                    <RateItemColumn label='Phòng ốc' value={item.infrastructure_rate}/>
                    <RateItemColumn label='Dịch vụ' value={item.price_rate}/>
                    <RateItemColumn label='Giá cả' value={item.service_rate}/>
                </Space>
            </div>
        </div>    
    )
}

export default UserComments;