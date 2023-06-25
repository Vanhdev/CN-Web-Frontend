import { useSelector } from "react-redux";
import HeaderTitleSearch from "../../../components/ComponentAdmin/HeaderTitleSearch";
import ListQuestions from "../../../components/ComponentAdmin/ListQuestions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ManageQuestion() {

    const user = useSelector(state => state.auth.login?.currentUser);
    const navigate = useNavigate();

    useEffect(() => {

        if(!user?.accessToken) {
            navigate('/login');
        }

    }, [])

    return(
        <>
            {
                user &&
                <div className="admin-manage-question post-list">
                    <HeaderTitleSearch title='Danh sách câu hỏi' search={false}/>
                    <ListQuestions/>
                </div>
            }
        </>
    )
}

export default ManageQuestion;