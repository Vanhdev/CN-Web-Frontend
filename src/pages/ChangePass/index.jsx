import { useState } from "react";
import './index.css';
import { Button, Checkbox, Form, Input, message } from "antd";

function ChangePass() {
    const [oldPass, setOldPass] = useState('123456789');
    const [newPass, setNewPass] = useState('123456789');
    const [confirmPass, setConfirmPass] = useState('123456789');
    const [checkbox, setCheckbox] = useState(false);

    const handleUpdate = () => {
        message.success('Đổi mật khẩu thành công!');
    }

    return(
        <div className="changePass">
            <h3>Đổi mật khẩu</h3>
            <div>
                <Form className="change-pass-form">
                    <Form.Item
                        label='Mật khẩu cũ'
                        style={{borderBottom: '2px solid #ccc'}}
                        name='oldPass'
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập mật khẩu cũ',
                            },
                            {
                                type: "password",
                                message: 'Vui lòng đúng mật khẩu cũ',
                            },
                        ]}
                        className="change-pass-item"
                    >
                        <Input defaultValue={oldPass} type="password" bordered={false} style={{textAlign: 'end'}}></Input>
                    </Form.Item>
                    <Form.Item
                        label='Mật khẩu mới'
                        name='newPass'
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập mật khẩu mới',
                            },
                            {
                                type: "password",
                                message: 'Vui lòng nhập đúng mật khẩu mới',
                            },
                        ]}
                        style={{borderBottom: '2px solid #ccc'}}
                    >
                        <Input defaultValue={newPass} type="password" bordered={false} style={{textAlign: 'end'}}></Input>
                    </Form.Item>
                    <Form.Item
                        label='Xác nhận mật khẩu mới'
                        name='confirmPass'
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng xác nhận mật khẩu mới',
                            },
                            {
                                type: "password",
                                message: 'Vui lòng confirm đúng mật khẩu mới',
                            },
                        ]}
                        style={{borderBottom: '2px solid #ccc'}}
                    >
                        <Input defaultValue={confirmPass} type="password" bordered={false} style={{textAlign: 'end'}}></Input>
                    </Form.Item>
                    <div className="checkbox">
                        <Checkbox>Xác nhận thay đổi mật khẩu</Checkbox>
                    </div>
                    <Button shape="round" size="large" style={{width: 150, margin: '30px auto'}} onClick={ handleUpdate}>Đổi mật khẩu</Button>
                </Form>
            </div>
        </div>   
    )
}

export default ChangePass;