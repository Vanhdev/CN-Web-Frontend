import { configureStore } from "@reduxjs/toolkit";
import personalReducer from './personalSlice';
import commentUserReducer from "./commentSlice";
import tourReducer from "./tourSlice";
import newPostReducer from './newPostSlice';
import commentPostReducer from './commentPostSlice';
import numberClickReducer from './numberClickSlice';

export default configureStore({
    reducer: {
        personal: personalReducer,
        commentUser: commentUserReducer,
        tour: tourReducer,
        newPost: newPostReducer,
        commentPost: commentPostReducer,
        numberClick: numberClickReducer,
    }
})