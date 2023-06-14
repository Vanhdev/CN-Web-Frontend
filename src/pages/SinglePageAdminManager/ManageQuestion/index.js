import HeaderTitleSearch from "../../../components/ComponentAdmin/HeaderTitleSearch";
import ListQuestions from "../../../components/ComponentAdmin/ListQuestions";

function ManageQuestion() {
    return(
        <div className="admin-manage-question post-list">
            <HeaderTitleSearch title='Danh sách câu hỏi' search={false}/>
            <ListQuestions/>
        </div>
    )
}

export default ManageQuestion;