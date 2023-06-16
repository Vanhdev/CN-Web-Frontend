import React from 'react';
import {List} from "antd";
import SinglePost from '../SinglePost';

function AllUserPost(props) {
    const {userPosts} = props;

    return(
        <div className="clientPost">
            <List
                itemLayout="vertical"
                className='listClientPost'
                dataSource={userPosts}
                pagination={{
                    pageSize: 5,
                }}
                renderItem={(item) => (
                    <SinglePost post={item}/>
                )}
            >
            </List>
        </div>
    )
}


export default AllUserPost;