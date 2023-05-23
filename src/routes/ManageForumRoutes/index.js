import { Route, Routes } from "react-router-dom";
import PostCheck from '../../pages/SinglePageAdminManager/ManageForum/PostCheck';
import PostList from '../../pages/SinglePageAdminManager/ManageForum/PostList';

function ManageForumRoutes() {
    return(
        <Routes>
            <Route path="/post-check" element={<PostCheck/>}></Route>
            <Route path="/post-list" element={<PostList/>}></Route>
        </Routes>
    )
}

export default ManageForumRoutes;