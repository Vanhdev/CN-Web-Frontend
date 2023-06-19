import axios from "axios";
import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess } from "../redux/authSlice";
import { createPost, getAllPostFailed, getAllPostStart, getAllPostSuccess } from "../redux/postSlice";

export const getAllPosts = () => {
    return fetch('https://dummyjson.com/posts')
    .then(res => res.json());
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

// export const createNewPost = async (new_post, dispatch, navigate) => {
//     try {
//         const res = await axios.post(`http://localhost:8086/users/add-post`, new_post);
//         console.log(res);
//         // dispatch(createPost(res.data.newPost));
//         navigate('/forum');
//     }
//     catch (err) {
        
//     }
// }

// export const takeAllPosts = async (accessToken, dispatch, navigate) => {
//     dispatch(getAllPostStart());
//     try {
//       const res = await axios.get(`http://localhost:8086/users/get-post?id=all`, {
//         headers: { token: `Bearer ${accessToken}` },
//       });
//       dispatch(getAllPostSuccess(res.data));
//     } catch (error) {
//       dispatch(getAllPostFailed());
//     }
// };
  

