import { Button, Input, Space, message } from "antd";
import './index.css';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { sendQuestion } from "../../../../API";

function AskBox() {
    const [question, setQuestion] = useState("");

    const user = useSelector(state => state.auth.login?.currentUser);
    // console.log("user in ask box: ", user);

    const dispatch = useDispatch();

    const handleSendQuestion = () => {
        const new_question = {
            user_id: user?.id,
            question: question
        }
        sendQuestion(user?.accessToken, dispatch, new_question);
        message.success("Gửi câu hỏi thành công!");
        setQuestion("");
    }

    return(
        <div className="ask-box">  
            <div className="margin20">Gửi câu hỏi về cho admin</div>
            <div className="margin20">
                <Input.TextArea 
                    placeholder="Bạn đang thắc mắc điều gì?"
                    style={{height: '250px'}}
                    className="ask-box-input"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                >
                    
                </Input.TextArea>
            </div>
            <div className="margin20">
                <Button 
                    type="primary" 
                    shape="round" 
                    style={{backgroundColor: 'green', width: '80px', float: 'right'}}
                    onClick={handleSendQuestion}
                >Gửi</Button>
            </div>
        </div>
    )
}

export default AskBox;