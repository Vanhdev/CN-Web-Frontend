import { Typography } from "antd";
import AvatarPost from "../../../AvatarPost";
import avatar from '../../../../assets/images/main-avatar.png';

function ClientCmtPost() {
    return(
        <div className="clientCmtPost">
            <div>
                <AvatarPost avatar={avatar} name='Anh Leonard' date='17/05/2023'/>
            </div>
            <div>
                <Typography.Paragraph className="user-cmt-post__content">
                    Some treats include offline packages, appointment on call, RTL support, patient history, powerful search and one-to-one real-time chat system. Listing down all the features of Doctreat would take a lot of time.
                </Typography.Paragraph>
            </div>
        </div>
    )
}
export default ClientCmtPost;