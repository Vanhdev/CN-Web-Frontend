import { Avatar, Button, Input, Space, Rate, Spin } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import avatar from '../../../assets/images/main-avatar.png';
import { updateCommentTour } from "../../../redux/commentsTourSlice";
import { updateRateByUser } from "../../../API";


function UpdateComment(props) {
    const {setShowUpdate, item, index} = props;
    const user = useSelector( state => state.auth.login?.currentUser);

    const [positionValue, setPositionValue] = useState(item.location_rate);
    const [roomValue, setRoomValue] = useState(item.infrastructure_rate);
    const [priceValue, setPriceValue] = useState(item.price_rate);
    const [serviceValue, setServiceValue] = useState(item.service_rate);

    const dispatch = useDispatch();

    const handleSaveComment = () => {
        const newComment = {
            user_id: item?.user_id,
            tour_id: item?.tour_id,
            location_rate: positionValue,
            infrastructure_rate: roomValue,
            price_rate: priceValue,
            service_rate: serviceValue,
        }
        // updateRateByUser(user?.accessToken, dispatch, newComment, item?.tour_id, item?.user_id)
        setShowUpdate(false);
    }

    return(
        <div className="wrap-client-comments">
            <div>
                <div className="user-header-cmt margin25">
                    <AvatarPost avatar={avatar} name={`USER ID: ${item.user_id}`} date='12/04/2023'/>
                    <Button type="primary" onClick={handleSaveComment} style={{backgroundColor: "green"}}>Lưu lại</Button>
                </div>
                <Space className="client-evaluate">
                    <RateItemColumn label='Vị trí địa lý' value={positionValue} setValue={setPositionValue}/>
                    <RateItemColumn label='Phòng ốc' value={roomValue} setValue={setRoomValue}/>
                    <RateItemColumn label='Dịch vụ' value={priceValue} setValue={setPriceValue}/>
                    <RateItemColumn label='Giá cả' value={serviceValue} setValue={setServiceValue}/>
                </Space>
            </div>
        </div>
    )
}

function RateItemColumn({label, value, setValue}) {
    return(
        <div className="rate-item">
            <div>{label}</div>
            <Rate 
                allowHalf 
                allowClear={false} 
                value={value} 
                style={{color: 'var(--green-color)'}} 
                onChange={value => setValue(value)}
            ></Rate>
        </div>    
    )
}

function AvatarPost({avatar, name, date}) {
    return(
        <Space className="avatar-cmt">
            <div>
                <Avatar src={avatar}></Avatar>
            </div>
            <div className="avatar-cmt-user">
                <div>{name}</div>
                <div style={{color: 'var(--gray-color)', fontSize: '12px'}}>{date}</div>
            </div>
        </Space>    
    )
} 

export default UpdateComment;