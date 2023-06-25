import React, { useEffect, useState } from 'react';
import {List} from "antd";
import AdminSinglePost from '../AdminSinglePost';

function AdminPostCheck(props) {
    const {list, check, adminPosts} = props;

    const newAdminPosts = adminPosts.filter(post => post.status == "false");

    return(
        <div className="clientPost">
            <List
                itemLayout="vertical"
                className='listClientPost'
                dataSource={newAdminPosts}
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


export default AdminPostCheck;