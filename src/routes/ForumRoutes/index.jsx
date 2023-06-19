import { Route, Routes } from "react-router-dom";
import ForumHome from "../../pages/ForumPages/ForumHome";
import NewPost from "../../pages/ForumPages/NewPost";
import MyPost from "../../pages/ForumPages/MyPost";
import DetailPost from "../../pages/ForumPages/DetailPost";

function ForumRoutes() {
    return(
        <>
            <Routes>
                <Route path='/' element={<ForumHome/>}></Route>
                <Route path='/new-post' element={<NewPost/>}></Route>
                <Route path='/my-posts' element={<MyPost/>}></Route>
                <Route path='/detail-post/:id' element={<DetailPost/>}></Route>
            </Routes>
        </>
    )
}

export default ForumRoutes;