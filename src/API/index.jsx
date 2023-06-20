import axios from "axios";
import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess } from "../redux/authSlice";
import { createPost, getAllPostFailed, getAllPostStart, getAllPostSuccess } from "../redux/postSlice";
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

export const getAllTourTableData = (setData) => {
    getAllTour().then(res => res.data.map((item, index) => {
        return {
            key: item.id,
            name: item.name,
            type: typeArray[item.type_id],
            price: "$" + item.price,
            duration: item.duration + " ngày",
            slots: item.slots + " người",
            place: item.place?.name,
            action: <ActionBox id={item.id} setDataSource={setData} />
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

// export const createNewPost = async (new_post, dispatch, navigate) => {
//     try {
//         const res = await axios.post(`http://localhost:8086/users/add-post`, new_post);
//         // console.log(res);
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
  

