import axios from "axios";
import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess, updateUserSuccess } from "../redux/authSlice";
import { acceptByAdmin, createPost, deletePost, getAllPostSuccess, getDetailPostSuccess, searchPosts, updateLikeSuccess } from "../redux/postSlice";
import { ConvertDate, ConvertLink } from "../functions";
import { createComment, deleteCommentPost, getAllCmtsByID, updateCommentPost } from "../redux/commentPostSlice";
import { answerByAdmin, createQuestion, getAllQuestions } from "../redux/qnaSlice";
import { bookingTour, createNewRate, detailTour, getBookedTour, getRates } from "../redux/tourSlice";

export const getAllPosts = () => {
    return fetch('https://dummyjson.com/posts')
    .then(res => res.json());
}

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post(`http://localhost:3005/auth/login`, user);
        dispatch(loginSuccess(res.data.user));
        if(res.data.user.email === "admin@gmail.com") {
            navigate('/admin');
        }
        else {
            navigate('/');
        }
    }
    catch(err) {
        dispatch(loginFailed());
    }
}

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        await axios.post(`http://localhost:3005/auth/register`, user);
        dispatch(registerSuccess());
        navigate('/login');
    } catch (error) {
        dispatch(registerFailed());
    }
};

export const updateUser = async (update_user, accessToken, dispatch) => {
    try{
        const res = await axios.put(`http://localhost:3005/users/update-user`, update_user, {
            headers: {
                token: `Bearer ${accessToken}`
            }
        });
        dispatch(updateUserSuccess(res.data.user));
        console.log(res);
    }
    catch (err) {}
}

export const createNewPost = async (new_post, dispatch, accessToken) => {
    try {
        const res = await axios.post(`http://localhost:3005/users/add-post`, new_post, {
            headers: {
                token: `Bearer ${accessToken}`,
            }
        });
        dispatch(createPost(res.data.newPost));
    }
    catch (err) {
        
    }
}

export const getListPosts = async (accessToken, dispatch) => {
    try {
        const res = await axios.get(`http://localhost:3005/users/get-post?id=all`, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(getAllPostSuccess(res.data));
    } catch (error) {
      
    }
};

export const getDetailPost = async (accessToken, dispatch, idPost) => {
    try {
        const detail_post = await axios.get(`http://localhost:3005/users/get-post?id=${idPost}`, {
            headers: { token: `Bearer ${accessToken}` },
        });
        let detailPost = detail_post.data;
        const image_url = ConvertLink(detailPost.link.image_url);
        const createdAt = ConvertDate(detailPost.post.createdAt);
        let link = {...detailPost.link, image_url};
        let post = {...detailPost.post, createdAt};
        const newDetailPost = {...detailPost, link, post};
        dispatch(getDetailPostSuccess(newDetailPost));
    }
    catch (error) {
    
    }
}

export const upLike = async (accessToken, dispatch, acitonInfo) => {
    try {
        const new_post = await axios.put('http://localhost:3005/users/react-post', acitonInfo, {
            headers: { token: `Bearer ${accessToken}` },
        });

        let detailPost = new_post.data;
        const createdAt = ConvertDate(detailPost.post.createdAt);
        let post = {...detailPost.post, createdAt};
        const newDetailPost = {...detailPost, post};
        
        dispatch(updateLikeSuccess(newDetailPost));
    }
    catch (error) {
    
    }
}

export const upDislike = async (accessToken, dispatch, acitonInfo) => {
    try {
        const new_post = await axios.put('http://localhost:3005/users/react-post', acitonInfo, {
            headers: { token: `Bearer ${accessToken}` },
        });

        let detailPost = new_post.data;
        const createdAt = ConvertDate(detailPost.post.createdAt);
        let post = {...detailPost.post, createdAt};
        const newDetailPost = {...detailPost, post};

        dispatch(updateLikeSuccess(newDetailPost));
    }
    catch (error) {
    
    }
}

export const addCommentPost = async (accessToken, dispatch, new_cmt, user) => {
    try {
        const new_cmt_post = await axios.post('http://localhost:3005/users/add-comment', new_cmt, {
            headers: { token: `Bearer ${accessToken}` },
        });
        const newData = {...new_cmt_post.data.newCmt, user};
        dispatch(createComment(new_cmt_post.data.newCmt));
    }
    catch(error) {
        
    }
}

export const getListCommentsById = async(accessToken, dispatch, idPost) => {
    try {
        const res = await axios.get(`http://localhost:3005/users/get-comment?id=${idPost}`, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(getAllCmtsByID(res.data.listCmt));
    }
    catch(error) {
    
    }
}

export const updateCommentOfPost = async (accessToken, dispatch, newComment) => {
    try {
        const res = await axios.put(`http://localhost:3005/users/edit-comment?id=${newComment.id}`, newComment, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(updateCommentPost(res.data.comment));
    }
    catch(error) {
    
    }
}

export const deleteCmtOfPost = async (accessToken, dispatch, idPost, cmtDelete) => {
    try{
        await axios.delete(`http://localhost:3005/users/delete-comment?id=${idPost}`, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(deleteCommentPost(cmtDelete));
    }
    catch (error) {
    
    }
}

export const sendQuestion = async (accessToken, dispatch, new_question) => {
    try{
        const res = await axios.post(`http://localhost:3005/users/add-qas`, new_question,{
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(createQuestion(res.data.newQuestion));
    }
    catch (error) {
    
    }
}

export const listQuestions = async (accessToken, dispatch, idQuestion) => {
    try{
        const res = await axios.get(`http://localhost:3005/users/get-question?id=${idQuestion}`, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(getAllQuestions(res.data));
    }
    catch (error) {
    
    }
}

export const answerQuestionByAdmin = async (accessToken, dispatch, answer, idQuestion) => {
    try{
        const res = await axios.put(`http://localhost:3005/admin/ans-qas?id=${idQuestion}`, answer , {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(answerByAdmin(res.data.question));
    }
    catch (error) {
    
    }
}

export const acceptPostByAdmin = async (accessToken, dispatch, status, idPost) => {
    try{
        const res = await axios.put(`http://localhost:3005/admin/handle-post?id=${idPost}`, status , {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(acceptByAdmin(res.data.post));
    }
    catch (error) {
    
    }
}

export const deletePostByUser = async (accessToken, dispatch, idPost) => {
    try{
        await axios.delete(`http://localhost:3005/users/delete-post?id=${idPost}`, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(deletePost(idPost));
    }
    catch (error) {
    
    }
}

export const getDetailTour = async (accessToken, dispatch, idTour) => {
    try{
        const res = await axios.get(`http://localhost:3005/admin/get-tour?id=${idTour}`, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(detailTour(res.data));
    }
    catch (error) {
        
    }
}

export const makeNewRate = async (accessToken, dispatch, newRate) => {
    try{
        const res = await axios.post(`http://localhost:3005/users/add-rate`, newRate, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(createNewRate(res.data.newRate));
    }
    catch (error) {
        
    }
}

export const getAllRates = async (accessToken, dispatch, idTour) => {
    try{
        const res = await axios.get(`http://localhost:3005/users/get-rate?idTour=${idTour}`, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(getRates(res.data));
    }
    catch (error) {
        
    }
}

export const userBookTour = async (accessToken, dispatch, new_tour_booking) => {
    try{
        const res = await axios.post(`http://localhost:3005/users/book-tour`, new_tour_booking, {
            headers: { token: `Bearer ${accessToken}` },
        });
        console.log("tour booking", res.data.tourBooking);
        dispatch(bookingTour(res.data.tourBooking));
    }
    catch (error) {
        
    }
}


export const getAllBookedTour = async (accessToken, dispatch, idUser) => {
    try{
        const res = await axios.get(`http://localhost:3005/users/get-book-tour?id=${idUser}`, {
            headers: { token: `Bearer ${accessToken}` },
        });
        console.log("all tours booking", res.data);
        dispatch(getBookedTour(res.data));
    }
    catch (error) {
        
    }
}


  

