import { useState } from "react";
import {Button, DatePicker, Space, Typography, message} from 'antd';
import dayjs from 'dayjs';
import './index.css';

function PersonalInfo() {
    const dateFormat = 'MM/DD/YYYY';

    const[name, setName] = useState('Anh Leonard');
    const[date, setDate] = useState('02/20/2002');
    const [phoneNumber, setPhoneNumber] = useState('0123456789');
    const[email, setEmail] = useState('abc@gmail.com');
    const [address, setAddress] = useState('Thanh Hóa');

    const handleUpdate = () => {
        message.success('Cập nhật thông tin thành công!');
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
                <UpdateInfo label="Địa chỉ" curValue={address} setUpdate={setAddress}/>
            </div>
            <Button size="large" style={{width: 150, margin: '30px auto'}} shape="round" onClick={handleUpdate}>Cập nhật</Button>
        </div>    
    )
}

function UpdateInfo({label, curValue, setUpdate}) {
    return(
        <div className="info" style={{paddingRight: '15px'}}>
            <div>{label}</div>
            <Typography.Paragraph className="input" editable={{ onChange: (value) => setUpdate(value) }}>{curValue}</Typography.Paragraph>
        </div>
    )
}

export default PersonalInfo;