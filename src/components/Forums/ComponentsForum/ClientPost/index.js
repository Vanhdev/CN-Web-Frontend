import React from 'react';
import {List} from "antd";
import './index.css';
import ClientSinglePost from '../ClientSinglePost';

function ClientPost() {
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
                    <ClientSinglePost/>
                )}
            >
            </List>
        </div>
    )
}


export default ClientPost;