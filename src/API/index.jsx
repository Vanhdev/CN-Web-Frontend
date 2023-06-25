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
            // console.log('Here is Base64 Url', dataUrl)
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

