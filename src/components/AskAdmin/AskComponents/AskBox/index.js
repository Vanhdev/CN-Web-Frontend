import { Button, Input, Space } from "antd";
import './index.css';

function AskBox() {
    return(
        <div className="ask-box">  
            <div className="margin20">Gửi câu hỏi về cho admin</div>
            <div className="margin20">
                <Input.TextArea 
                    placeholder="Bạn đang thắc mắc điều gì?"
                    style={{height: '250px'}}
                    className="ask-box-input"
                >
                    
                </Input.TextArea>
            </div>
            <div className="margin20">
                <Button type="primary" shape="round" style={{backgroundColor: 'green', width: '80px', float: 'right'}}>Gửi</Button>
            </div>
        </div>
    )
}

export default AskBox;