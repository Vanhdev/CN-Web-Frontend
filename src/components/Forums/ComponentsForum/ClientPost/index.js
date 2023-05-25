import React from 'react';
import {List} from "antd";
import './index.css';
import ClientSinglePost from '../ClientSinglePost';

function ClientPost(props) {

    const {clientPosts} = props;

    return(
        <div className="clientPost">
            <List
                itemLayout="vertical"
                className='listClientPost'
                dataSource={clientPosts}
                pagination={{
                    pageSize: 5,
                }}
                renderItem={(item) => (
                    <ClientSinglePost post={item}/>
                )}
            >
            </List>
        </div>
    )
}


export default ClientPost;