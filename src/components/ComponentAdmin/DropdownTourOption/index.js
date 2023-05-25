import { Dropdown } from "antd";
import { useNavigate } from "react-router-dom";

function DropdownTourOption() {

    const navigate = useNavigate();

    const items = [
        {
            label: <span>Thêm tour</span>,
            key: 'add-tour'
        },
        {
            label: <span>Thêm điểm đến</span>,
            key: 'add-destination'
        },
        {
            label: <span>Thêm voucher</span>,
            key: 'add-voucher'
        },
        {
            label: <span>Dịch vụ bao gồm</span>,
            key: 'add-service'
        },
        {
            label: <span>Kho tour</span>,
            key: 'tour-stock'
        },
        {
            label: <span>Danh sách đặt tour</span>,
            key: 'tour-list'
        },
    ]

    const handleClickTour = (item) => {
        navigate(`/admin/manage-tour/${item.key}`);
    }

    const menuProps = {
        items,
        onClick: handleClickTour
    }

    return(
        <Dropdown
            menu={menuProps}
            trigger={['click']}
        >
            <div className='admin-title-option'>Quản Lý</div>
        </Dropdown>
    )
}

export default DropdownTourOption;