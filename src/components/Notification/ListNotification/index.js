import { Badge, Dropdown, Image, Menu, Space } from "antd";
import SingleNotification from "../SingleNotification";
import bellIcon from '../../../assets/images/bell.svg';
import './index.css';

function ListNotification() {

    const items = [
        {
            label: <SingleNotification/>,
            key: 0,
        },
        {
            label: <SingleNotification/>,
            key: 1,
        },
        {
            label: <SingleNotification/>,
            key: 2,
        },
    ]

    return(
        <div className="list-notification">
            <Dropdown
                menu={{items}}
                trigger={['click']}
                placement="bottomRight"
            >
                <Space>
                    <Badge count={10} offset={[0,5]} overflowCount={99}>
                        <Image src={bellIcon} preview={false} width={40} height={40}/>
                    </Badge>
                </Space>
            </Dropdown>
        </div>    
    )
}

export default ListNotification;