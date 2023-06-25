import { Space, Typography } from "antd";
import AvatarPost from "../../../AvatarPost";
import avatar from '../../../../assets/images/main-avatar.png';

function ClientCmtPost(props) {

    const {allComments, user} = props;

    return(
        <Space size={10} direction="vertical">
            {
                allComments.map( comment => {
                    if(user.id !== comment.user_id) {
                        return(
                            <div className="clientCmtPost" key={comment.id}>
                                <div>
                                    <AvatarPost avatar={avatar} name={comment.user.name} date='17/05/2023'/>
                                </div>
                                <div>
                                    <Typography.Paragraph className="user-cmt-post__content">
                                        {comment.content}
                                    </Typography.Paragraph>
                                </div>
                            </div>    
                        )
                    }
                })
            }
        </Space>
    )
}
export default ClientCmtPost;