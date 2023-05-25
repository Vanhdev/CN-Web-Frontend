import { Button, Divider, Form, Input, Space, message } from "antd";
import AvatarPost from "../../AvatarPost";
import RateItemResult from "../RateItemResult";
import avatar from '../../../assets/images/main-avatar.svg';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComments } from "../../../redux/commentsTourSlice";

function CurrentUserComment() {
    const [positionValue, setPositionValue] = useState(0);
    const [roomValue, setRoomValue] = useState(0);
    const [priceValue, setPriceValue] = useState(0);
    const [serviceValue, setServiceValue] = useState(0);
    const [comment, setComment] = useState('');
    
    const dispatch = useDispatch();

    const hanlePostComment = () => {
        const newComment = {
            positionValue: positionValue,
            roomValue: roomValue,
            priceValue: priceValue,
            serviceValue: serviceValue,
            comment: comment,
        }
        dispatch(addComments(newComment));
    }

    return(
        <>
            <AvatarPost avatar={avatar} name='Anh Leonard' date='12/04/2023'/>
            <Space className="evaluate-rate">
                <Space size={50}>
                    <RateItemResult label={'Vị trí địa lý'} setValue={setPositionValue}/>
                    <RateItemResult label={'Dịch vụ'} setValue={setServiceValue}/>
                </Space>
                <Space size={50}>
                    <RateItemResult label={'Phòng ốc'} setValue={setRoomValue}/>
                    <RateItemResult label={'Giá cả'} setValue={setPriceValue}/>
                </Space>
            </Space>
            <Form style={{width: '100%'}}>
                <Input 
                    placeholder="Nhập bình luận của bạn" 
                    bordered={false} 
                    className="user-input"
                    onChange={(e) => setComment(e.target.value)}
                ></Input>
                <Divider style={{borderColor: '#000', marginTop: '5px'}}/>
                <Button htmlType="button" type="primary" className="post-comment-button" onClick={hanlePostComment}>Đăng</Button>
            </Form>
        </>    
    )
}

export default CurrentUserComment;