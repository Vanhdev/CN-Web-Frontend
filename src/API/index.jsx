import axios from "axios";
import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess, updateUserSuccess } from "../redux/authSlice";
import { acceptByAdmin, createPost, deletePost, getAllPostSuccess, getDetailPostSuccess, searchPosts, updateLikeSuccess } from "../redux/postSlice";
import { ConvertDate, ConvertLink } from "../functions";
import { createComment, deleteCommentPost, getAllCmtsByID, updateCommentPost } from "../redux/commentPostSlice";
import { answerByAdmin, createQuestion, getAllQuestions } from "../redux/qnaSlice";
import { bookingTour, createNewRate, deleteTourBooked, deleteTourLoved, detailTour, getBookedTour, getLovedTour, getRates, updateRate } from "../redux/tourSlice";
import { ActionBox, typeArray } from "../pages/SinglePageAdminManager/ManageTour/TourStock";

export const getAllPosts = () => {
    return fetch('https://dummyjson.com/posts')
    .then(res => res.json());
}

export const getAllService = (token) => {
    return axios.get('http://localhost:8086/admin/get-service?id=all', {
        headers: { token: `Bearer ${token}` },
    }).then(res => res.data);
}

export const getAllVoucher = (token) => {
    return axios.get('http://localhost:8086/admin/get-voucher?id=all', {
        headers: { token: `Bearer ${token}` },
    }).then(res => res.data);
}

export const getAllPlace = () => {
    return axios.get('http://localhost:8086/admin/get-place?id=all')
        .then(res => res.data);
}

export const getAllTour = () => {
    return axios.get("http://localhost:8086/admin/get-tour?id=all");
}

export const getTourById = (id) => {
    return axios.get("http://localhost:8086/admin/get-tour?id="+id);
}

export const getAllTourTableData = (setData, setOpen, setTour) => {
    getAllTour().then(res => res.data.map((item, index) => {
        return {
            key: item.id,
            name: item.name,
            type: typeArray[item.type_id],
            price: "$" + item.price,
            duration: item.duration + " ngày",
            slots: item.slots + " người",
            place: item.place?.name,
            action: <ActionBox id={item.id} setDataSource={setData} setOpen={setOpen} setTour={setTour} />
        };
    })).then(data => setData(data));
}

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post(`http://localhost:8086/auth/login`, user);
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
        await axios.post(`http://localhost:8086/auth/register`, user);
        dispatch(registerSuccess());
        navigate('/login');
    } catch (error) {
        dispatch(registerFailed());
    }
};

export const updateUser = async (update_user, accessToken, dispatch) => {
    try{
        const res = await axios.put(`http://localhost:8086/users/update-user`, update_user, {
            headers: {
                token: `Bearer ${accessToken}`
            }
        });
        dispatch(updateUserSuccess(res.data.user));
        // console.log(res);
    }
    catch (err) {}
}

export const createNewPost = async (new_post, dispatch, accessToken) => {
    try {
        const res = await axios.post(`http://localhost:8086/users/add-post`, new_post, {
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
        const res = await axios.get(`http://localhost:8086/users/get-post?id=all`, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(getAllPostSuccess(res.data));
    } catch (error) {
      
    }
};

export const getDetailPost = async (accessToken, dispatch, idPost) => {
    try {
        const detail_post = await axios.get(`http://localhost:8086/users/get-post?id=${idPost}`, {
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
        const new_post = await axios.put('http://localhost:8086/users/react-post', acitonInfo, {
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
        const new_post = await axios.put('http://localhost:8086/users/react-post', acitonInfo, {
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
        const new_cmt_post = await axios.post('http://localhost:8086/users/add-comment', new_cmt, {
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
        const res = await axios.get(`http://localhost:8086/users/get-comment?id=${idPost}`, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(getAllCmtsByID(res.data.listCmt));
    }
    catch(error) {
    
    }
}

export const updateCommentOfPost = async (accessToken, dispatch, newComment) => {
    try {
        const res = await axios.put(`http://localhost:8086/users/edit-comment?id=${newComment.id}`, newComment, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(updateCommentPost(res.data.comment));
    }
    catch(error) {
    
    }
}

export const deleteCmtOfPost = async (accessToken, dispatch, idPost, cmtDelete) => {
    try{
        await axios.delete(`http://localhost:8086/users/delete-comment?id=${idPost}`, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(deleteCommentPost(cmtDelete));
    }
    catch (error) {
    
    }
}

export const sendQuestion = async (accessToken, dispatch, new_question) => {
    try{
        const res = await axios.post(`http://localhost:8086/users/add-qas`, new_question,{
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(createQuestion(res.data.newQuestion));
    }
    catch (error) {
    
    }
}

export const listQuestions = async (accessToken, dispatch, idQuestion) => {
    try{
        const res = await axios.get(`http://localhost:8086/users/get-question?id=${idQuestion}`, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(getAllQuestions(res.data));
    }
    catch (error) {
    
    }
}

export const answerQuestionByAdmin = async (accessToken, dispatch, answer, idQuestion) => {
    try{
        const res = await axios.put(`http://localhost:8086/admin/ans-qas?id=${idQuestion}`, answer , {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(answerByAdmin(res.data.question));
    }
    catch (error) {
    
    }
}

export const acceptPostByAdmin = async (accessToken, dispatch, status, idPost) => {
    try{
        const res = await axios.put(`http://localhost:8086/admin/handle-post?id=${idPost}`, status , {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(acceptByAdmin(res.data.post));
    }
    catch (error) {
    
    }
}

export const deletePostByUser = async (accessToken, dispatch, idPost) => {
    try{
        await axios.delete(`http://localhost:8086/users/delete-post?id=${idPost}`, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(deletePost(idPost));
    }
    catch (error) {
    
    }
}

export const getDetailTour = async (accessToken, dispatch, idTour) => {
    try{
        const res = await axios.get(`http://localhost:8086/admin/get-tour?id=${idTour}`, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(detailTour(res.data));
    }
    catch (error) {
        
    }
}

export const makeNewRate = async (accessToken, dispatch, newRate) => {
    try{
        const res = await axios.post(`http://localhost:8086/users/add-rate`, newRate, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(createNewRate(res.data.newRate));
    }
    catch (error) {
        
    }
}

export const getAllRates = async (accessToken, dispatch, idTour) => {
    try{
        const res = await axios.get(`http://localhost:8086/users/get-rate?idTour=${idTour}`, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(getRates(res.data));
    }
    catch (error) {
        
    }
}

export const userBookTour = async (accessToken, dispatch, new_tour_booking) => {
    try{
        const res = await axios.post(`http://localhost:8086/users/book-tour`, new_tour_booking, {
            headers: { token: `Bearer ${accessToken}` },
        });
        // console.log("tour booking", res.data.tourBooking);
        dispatch(bookingTour(res.data.tourBooking));
    }
    catch (error) {
        
    }
}


export const getAllBookedTour = async (accessToken, dispatch, idUser) => {
    try{
        const res = await axios.get(`http://localhost:8086/users/get-book-tour?id=${idUser}`, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(getBookedTour(res.data));
    }
    catch (error) {
        
    }
}


  
export const addTour = (data, token, navigate) => {
    axios.post('http://localhost:8086/admin/add-tour', data, {
        headers: { token: `Bearer ${token}` },
    }).then(() => navigate('/admin/manage-tour/tour-stock'));
}

export const deleteTour = (id, token) => {
    return axios.delete("http://localhost:8086/admin/delete-tour?id=" + id, {
        headers: { token: `Bearer ${token}` },
    });
}

export const addVoucher = (data, token) => {
    return axios.post('http://localhost:8086/admin/add-voucher', data, {
        headers: { token: `Bearer ${token}` },
    });
}

export const editVoucher = (id, data, token) => {
    return axios.put('http://localhost:8086/admin/edit-voucher?id=' + id, data, {
        headers: { token: `Bearer ${token}` },
    });
}

export const deleteVoucher = (id, data, token) => {
    return axios.put('http://localhost:8086/admin/disable-voucher?id=' + id, data, { 
        headers: { token: `Bearer ${token}` },
    });
}

export const addService = (data, token) => {
    return axios.post('http://localhost:8086/admin/add-service', data, {
        headers: { token: `Bearer ${token}` }, 
    });
}

export const saveService = (id, data, token) => {
    return axios.put('http://localhost:8086/admin/edit-service?id=' + id, data, {
        headers: { token: `Bearer ${token}` },
    });
}

export const addPlace = (data, token) => {
    return axios.post('http://localhost:8086/admin/add-place', data, {
        headers: { token: `Bearer ${token}` },
    });
}

export const savePlace = (id, data, token) => {
    return axios.put('http://localhost:8086/admin/edit-place?id=' + id, data, {
        headers: { token: `Bearer ${token}` },
    });
}

export const getNumberOfTours = (token) => {
    return axios.get('http://localhost:8086/admin/count-tours', {
        headers: { token: `Bearer ${token}` },
    });
}

export const getNumberOfBookingTours = (token) => {
    return axios.get('http://localhost:8086/admin/count-booking-tours', {
        headers: { token: `Bearer ${token}` },
    });
}

export const getProfits = (token) => {
    return axios.get('http://localhost:8086/admin/count-profits', {
        headers: { token: `Bearer ${token}` },
    });
}

export const imgSourceToFile = (url) => {
    const toDataURL = url => fetch(url)
        .then(response => response.blob())
        .then(blob => new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.onloadend = () => resolve(reader.result)
            reader.onerror = reject
            reader.readAsDataURL(blob)
        }));

    const dataURLtoFile = (dataurl, filename) => {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = window.atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    };


    return toDataURL(url)
        .then(dataUrl => {
            // // console.log('Here is Base64 Url', dataUrl)
            return dataURLtoFile(dataUrl, "imageName.jpg");
        });
}

export const getAllBooking = (token) => {
    return axios.get('http://localhost:8086/admin/get-all-booking', {
        headers: { token: `Bearer ${token}` },
    });
}

export const getBookTour = (id, token) => {
    return axios.get('http://localhost:8086/users/get-book-tour?id=' + id, {
        headers: { token: `Bearer ${token}` },
    });
}


export const deleteBookedTour = async (accessToken, dispatch, idBooking) => {
    try{
        await axios.delete(`http://localhost:8086/users/cancel-book-tour?idBooking=${idBooking}`, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(deleteTourBooked(idBooking));
    }
    catch (error) {
        
    }
}

export const getAllLovedTour = async (accessToken, dispatch, idUser) => {
    try{
        const res = await axios.get(`http://localhost:8086/users/get-fav-tour?idUser=${idUser}`, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(getLovedTour(res.data.listFavTour));
    }
    catch (error) {
        
    }
}

export const deleteLovedTour = async (accessToken, dispatch, idTour, idUser) => {
    try{
        await axios.delete(`http://localhost:8086/users/delete-fav-tour?idTour=${idTour}&idUser=${idUser}`, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(deleteTourLoved(idTour));
    }
    catch (error) {
        
    }
}

export const updateRateByUser = async (accessToken, dispatch, newComment, idTour, idUser) => {
    try{
        await axios.put(`http://localhost:8086/users/edit-rate?idTour=${idTour}&idUser=${idUser}`, newComment, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(updateRate(newComment));
    }
    catch (error) {
        
    }
}

export const changePassword = async (accessToken, dispatch, navigate, idUser, new_content) => {
    try{
        const res = await axios.put(`http://localhost:8086/auth/change-pass?id=${idUser}`, new_content, {
            headers: { token: `Bearer ${accessToken}` },
        });
        if(res.data.message === "Wrong password") {
            alert("Your old password is incorrect!")
        }
        else if(res.data.message === "Wrong confirm password") {
            alert("Your confirm password is incorrect!")
        }
        else if(res.data.message === "Update password successfully") {
            navigate("/login")
        }
    }
    catch (error) {
        alert(error.message);
    }
}

export const getPlaceById = (id) => {
    return axios.get('http://localhost:8086/admin/get-place?id=' + id)
      .then(res => res.data);
}

export const addFavouriteTour = (token, userId, tourId) => {
    return axios.post('http://localhost:8086/users/add-fav-tour', {user_id: userId, tour_id: tourId},{
        headers: { token: `Bearer ${token}` },  
    });
}

export const saveTour = (token, tourId, data) => {
    return axios.put('http://localhost:8086/admin/edit-tour?id=' + tourId, data, {
        headers: { token: `Bearer ${token}` },
    });
}