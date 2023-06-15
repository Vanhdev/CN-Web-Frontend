import { Button, Collapse, Input } from "antd";
import './index.css';
const {Panel} = Collapse;

function SingleQuestion(props) {

    const {question} = props;

    return(
        <div className="single-question">
            <div className="single-question-id">ID: 20204512</div>
            <Collapse expandIconPosition="start" className="collapse-tour">
                <Panel
                    header={question}
                    key={question}
                >
                    <Input.TextArea 
                        placeholder="Nhập câu trả lời ..."
                        bordered={false}
                    ></Input.TextArea>
                    <div style={{display: 'flex', justifyContent: 'flex-end', margin: '20px 0 5px'}}>
                        <Button type="primary" shape="round" style={{backgroundColor: 'green', width: '80px'}}>Gửi</Button>
                    </div>
                </Panel>
            </Collapse>
        </div>
    )
}

export default SingleQuestion;