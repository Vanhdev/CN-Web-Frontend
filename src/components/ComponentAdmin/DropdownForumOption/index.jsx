import { Dropdown, Menu } from "antd";
import { useNavigate } from "react-router-dom";

function DropdownForumOption() {

    const navigate = useNavigate();
    
    const items = [
        {
            label: <span>Danh sách bài viết</span>,
            key: 'post-list'
        },
        {
            label: <span>Kiểm duyệt bài viết</span>,
            key: 'post-check'
        },
    ]

    const handleClickForum = (item) => {
        navigate(`/admin/manage-forum/${item.key}`);
    }

    const menuProps = {
        items,
        onClick: handleClickForum
    }

    return(
        <Dropdown
            menu={menuProps}
            trigger={['click']}
            placement="bottom"
        >
            <div className='admin-title-option'>Diễn Đàn</div>
        </Dropdown>
    )
}

export default DropdownForumOption;