import { Collapse } from "antd";
import './index.css';
const { Panel } = Collapse;

function SingleQuestion(props) {
    const {name, desc} = props;
    return(
        <div className="all-questions">
            <Collapse expandIconPosition="start" className="collapse-tour">
                <Panel
                    header={name}
                    key={name}
                >
                    <div style={{textAlign: 'justify', fontWeight: '300'}}>{desc}</div>
                </Panel>
            </Collapse>
        </div>
    )
}

export default SingleQuestion;