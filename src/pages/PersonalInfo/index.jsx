import { useState } from "react";
import {Button, DatePicker, Space, Typography, message} from 'antd';
import dayjs from 'dayjs';
import './index.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {updateUser} from "../../API";

function PersonalInfo() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector( state => state.auth.login?.currentUser);

    const dateFormat = 'YYYY/MM/DD';

    const[name, setName] = useState(user.name);
    const[date, setDate] = useState(user.date_of_birth);
    const [phoneNumber, setPhoneNumber] = useState(user.phone_number);
    const[email, setEmail] = useState(user.email);
    // const [address, setAddress] = useState('Thanh Hóa');

    const handleUpdate = () => {
        const update_user = {
            name: name,
            date_of_birth: date,
            phone_number: phoneNumber,
            email: email,
        }
        updateUser(update_user, user?.accessToken, dispatch);
        message.success('Cập nhật thông tin thành công!');
        navigate("/personal-info");
    }

    return(
        <div className="personalInfo">
            <h3>Thông tin cá nhân</h3>
            <div>
                <UpdateInfo label={'Tên'} curValue={name} setUpdate={setName}></UpdateInfo>
                <div className="info" style={{marginTop: '-5px'}}>
                    <div>Ngày sinh</div>
                    <DatePicker defaultValue={dayjs(date, dateFormat)} format={dateFormat} bordered={false} onChange={(date, dateString) => setDate(dateString)}/>
                </div>
                <UpdateInfo label="Số điện thoại" curValue={phoneNumber} setUpdate={setPhoneNumber}/>
                <UpdateInfo label="Email" curValue={email} setUpdate={setEmail}/>
                {/* <UpdateInfo label="Địa chỉ" curValue={address} setUpdate={setAddress}/> */}
            </div>
            <Button size="large" style={{width: 150, margin: '30px auto'}} shape="round" onClick={handleUpdate}>Cập nhật</Button>
        </div>    
    )
}

function UpdateInfo({label, curValue, setUpdate}) {
    return(
        <div className="info" style={{paddingRight: '15px'}}>
            <div>{label}</div>
            {
                label === "Email"
                ? <Typography.Paragraph className="input" editable={false}>{curValue}</Typography.Paragraph>
                : <Typography.Paragraph className="input" editable={{ onChange: (value) => setUpdate(value) }}>{curValue}</Typography.Paragraph>
            }
        </div>
    )
}

export default PersonalInfo;