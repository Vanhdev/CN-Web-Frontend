import React, { useEffect, useState } from 'react';
import {List} from "antd";
import AdminSinglePost from '../AdminSinglePost';

function AdminListPost(props) {
    const {list, check, adminPosts} = props;

    return(
        <div className="clientPost">
            <List
                itemLayout="vertical"
                className='listClientPost'
                dataSource={adminPosts}
                pagination={{
                    pageSize: 5,
                }}
                renderItem={(item) => (
                    <AdminSinglePost list={list} check={check} post={item}/>
                )}
            >
            </List>
        </div>
    )
}


export default AdminListPost;