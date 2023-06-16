import { Dropdown, Space } from "antd";

import option from '../../assets/images/option.svg';


function DropdownUserOption(props) {
    const {setShowAlert, setShowUpdate} = props;

    const items =[
        {
            label: 'Chỉnh sửa',
            key: 'change'
        },
        {
            label: 'Xóa',
            key: 'delete'
        },
    ];
    
    const onClick = ({ key }) => {
        key === 'delete' ? setShowAlert(true) : setShowUpdate(true);
    };

    return(
        <Dropdown
            menu={{items, onClick}}
            trigger={'click'}
        >
            <Space>
                <Option />
            </Space>
        </Dropdown>    
    )
}

function Option() {
    return(
        <div>
            <img className="user-option" src={option}></img>
        </div>
    )
}

export default DropdownUserOption;