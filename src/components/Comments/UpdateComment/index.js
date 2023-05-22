import { Avatar, Button, Input, Space, Rate, Spin } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import avatar from '../../../assets/images/main-avatar.svg';
import { updateComment } from "../../../redux/commentSlice";


function UpdateComment(props) {
    const {setShowUpdate} = props;
    const userValue = useSelector(state => state.commentUser);
    const dispatch = useDispatch();

    const [positionValue, setPositionValue] = useState(userValue.positionValue);
    const [roomValue, setRoomValue] = useState(userValue.roomValue);
    const [priceValue, setPriceValue] = useState(userValue.priceValue);
    const [serviceValue, setServiceValue] = useState(userValue.serviceValue);
    const [comment, setComment] = useState(userValue.comment);

    const handleSaveComment = () => {
        const newComment = {
            positionValue: positionValue,
            roomValue: roomValue,
            priceValue: priceValue,
            serviceValue: serviceValue,
            comment: comment,
        }
        dispatch(updateComment(newComment));
        setShowUpdate(false);
    }

    return(
        <div className="wrap-client-comments">
            <div>
                <div className="user-header-cmt margin25">
                    <AvatarPost avatar={avatar} name='Anh Leonard' date='12/04/2023'/>
                    <Button type="primary" onClick={handleSaveComment}>Lưu lại</Button>
                </div>
                <Space className="client-evaluate">
                    <RateItemColumn label='Vị trí địa lý' value={positionValue} setValue={setPositionValue}/>
                    <RateItemColumn label='Phòng ốc' value={roomValue} setValue={setRoomValue}/>
                    <RateItemColumn label='Dịch vụ' value={priceValue} setValue={setPriceValue}/>
                    <RateItemColumn label='Giá cả' value={serviceValue} setValue={setServiceValue}/>
                </Space>
                <div className="margin25">
                    {!comment ? <Spin></Spin> : <Input.TextArea style={{height: '100px'}} defaultValue={comment} onChange={(e) => setComment(e.target.value)}/>}
                </div>
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