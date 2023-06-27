import { Badge, Image, Space } from "antd";
import askingIcon from '../../../../assets/images/asking.svg';
import bellIcon from '../../../../assets/images/bell.svg';
import { useNavigate } from "react-router-dom";
import './index.css';
import ListNotification from "../../../Notification/ListNotification";
import DetailAnswer from "../../../Notification/DetailAnswer";

function AskHeader() {
    const navigate = useNavigate();
    const handleAskingHome = () => {
        navigate('/ask-something');
    }
    return(
        <div className="ask-header">  
            <Space className="wrap-logo" size={15}>
                <div>
                    <Image preview={false} src={askingIcon} className="logo-forum" onClick={handleAskingHome}/>
                </div>
                <div className="all-titles">
                    <div className="main-title">Hỏi & Đáp</div>
                    <div className="adding-title">Welcome to ask us!</div>
                </div>
            </Space>
            {/* <div style={{cursor: 'pointer'}}>
                <ListNotification/>
            </div> */}
        </div>
    )
}

export default AskHeader;