import { configureStore } from "@reduxjs/toolkit";
import personalReducer from './personalSlice';
import commentUserReducer from "./commentSlice";
import tourReducer from "./tourSlice";
import newPostReducer from './newPostSlice';
import commentPostReducer from './commentPostSlice';
import numberClickReducer from './numberClickSlice';
import adminPostReducer from './adminPostSlice';
import searchTextReducer from "./searchTextSlice";
import commentsTourReducer from './commentsTourSlice';
import authReducer from './authSlice';
import postReducer from './postSlice';

export default configureStore({
    reducer: {
        personal: personalReducer,
        commentUser: commentUserReducer,
        tour: tourReducer,
        newPost: newPostReducer,
        commentPost: commentPostReducer,
        numberClick: numberClickReducer,
        adminPost: adminPostReducer,
        searchText: searchTextReducer,
        commentsTour: commentsTourReducer,
        auth: authReducer,
        post: postReducer,
    }
})