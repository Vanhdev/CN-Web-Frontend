import React from 'react';
import {List} from "antd";
import SingleQuestion from '../SingleQuestion';

function AllQuestions() {
    const data = [1,2,3,4,5,6,7,8,9,10];

    return(
        <div className="clientPost">
            <List
                itemLayout="vertical"
                className='listClientPost'
                dataSource={data}
                pagination={{
                    pageSize: 3,
                }}
                renderItem={(item) => (
                    <SingleQuestion
                        name="I can't find the meeting point. What do I do?"
                        desc="First, please check the meeting point information from your voucher. If you still can't find the meeting point, please call the activity provider. You can find their phone number on your voucher.
                        If the activity provider doesn't respond, contact us via phone or chat. Our contact details are on your voucher and at the bottom of this page."
                    />
                )}
            >
            </List>
        </div>
    )
}


export default AllQuestions;