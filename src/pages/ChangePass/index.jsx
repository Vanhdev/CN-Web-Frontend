import { useState } from "react";
import './index.css';
import { Button, Checkbox, Form, Input, message } from "antd";
import { changePassword } from "../../API";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ChangePass() {
    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector( state => state.auth.login?.currentUser);

    const handleUpdate = () => {
        if(!checkbox) {
            message.warning("Please click the checkbox!")
        }

        if(checkbox && user?.accessToken) {
            const new_content = {
                old_pass: oldPass,
                new_pass: newPass,
                confirm_pass: confirmPass
            }
            changePassword(user?.accessToken, dispatch, navigate, user?.id, new_content);
        }
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
                        <Input 
                            defaultValue={oldPass} 
                            type="password" 
                            bordered={false} 
                            style={{textAlign: 'end'}}
                            onChange={(e) => setOldPass(e.target.value)}
                        ></Input>
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
                        <Input defaultValue={newPass} type="password" bordered={false} style={{textAlign: 'end'}} onChange={(e) => setNewPass(e.target.value)}></Input>
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
                        <Input defaultValue={confirmPass} type="password" bordered={false} style={{textAlign: 'end'}} onChange={(e) => setConfirmPass(e.target.value)}></Input>
                    </Form.Item>
                    <div className="checkbox">
                        <Checkbox onChange={(e) => setCheckbox(e.target.checked)}>Xác nhận thay đổi mật khẩu</Checkbox>
                    </div>
                    <Button shape="round" size="large" style={{width: 150, margin: '30px auto'}} onClick={ handleUpdate}>Đổi mật khẩu</Button>
                </Form>
            </div>
        </div>   
    )
}

export default ChangePass;