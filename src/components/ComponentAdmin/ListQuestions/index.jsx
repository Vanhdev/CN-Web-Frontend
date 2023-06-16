import {List} from "antd";
import SingleQuestion from "../SingleQuestion";

function ListQuestions() {
    const data = [1,2,3,4,5,6,7,8,9,10]
    return(
        <div className="clientPost">
            <List
                itemLayout="vertical"
                className='listClientPost'
                dataSource={data}
                pagination={{
                    pageSize: 5,
                }}
                renderItem={(item) => (
                    <SingleQuestion question='What is the capital of France?'/>
                )}
            >
            </List>
        </div>
    )
}


export default ListQuestions;