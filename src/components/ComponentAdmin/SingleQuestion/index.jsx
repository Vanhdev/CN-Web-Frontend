import { Button, Collapse, Input } from "antd";
import './index.css';
import { useEffect, useState } from "react";
import { answerQuestionByAdmin } from "../../../API";
import { useDispatch, useSelector } from "react-redux";
const {Panel} = Collapse;

function SingleQuestion(props) {
    const [answer, setAnswer] = useState("");
    const {question, user_id, item} = props;

    const user = useSelector(state => state.auth.login?.currentUser);
    const dispatch = useDispatch();


    const handleSubmitAnswer = () => {
        const new_answer = {
            answer: answer,
        }

        answerQuestionByAdmin(user?.accessToken, dispatch, new_answer, item?.id);
    }

    return(
        <div className="single-question">
            <div className="single-question-id">USER ID: {user_id}</div>
            <Collapse expandIconPosition="start" className="collapse-tour">
                <Panel
                    header={question}
                    key={question}
                >
                    <Input.TextArea 
                        placeholder="Nhập câu trả lời ..."
                        bordered={false}
                        onChange={(e) => setAnswer(e.target.value)}
                    ></Input.TextArea>
                    <div style={{display: 'flex', justifyContent: 'flex-end', margin: '20px 0 5px'}}>
                        <Button 
                            type="primary" 
                            shape="round" 
                            style={{backgroundColor: 'green', width: '80px'}}
                            onClick={handleSubmitAnswer}
                        >Gửi</Button>
                    </div>
                </Panel>
            </Collapse>
        </div>
    )
}

export default SingleQuestion;