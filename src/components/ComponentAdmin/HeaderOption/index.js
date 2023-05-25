import './index.css';
import DropdownTourOption from '../DropdownTourOption';
import DropdownForumOption from '../DropdownForumOption';
import { useNavigate } from 'react-router-dom';

function HeaderOption() {
    const navigate = useNavigate();

    const handleStatistic = () => {
        navigate('/admin/manage-statistic');
    }

    const handleClient = () => {
        navigate('/admin/manage-client');
    }
    const handleQuestion = () => {
        navigate('/admin/manage-question');
    }

    return(
        <div className="header-option">
            <div>
                <DropdownTourOption/>
            </div>
            <div className='admin-title-option' onClick={handleStatistic}>Thống Kê</div>
            <div className='admin-title-option' onClick={handleClient}>Khách Hàng</div>
            <div>
                <DropdownForumOption/>
            </div>
            <div className='admin-title-option' onClick={handleQuestion}>Hỏi Đáp</div>
        </div>    
    )
}

export default HeaderOption;