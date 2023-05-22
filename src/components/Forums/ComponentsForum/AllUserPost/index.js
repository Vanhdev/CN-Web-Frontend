import React from 'react';
import {List} from "antd";
import SinglePost from '../SinglePost';

function AllUserPost() {
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
                    <SinglePost/>
                )}
            >
            </List>
        </div>
    )
}


export default AllUserPost;