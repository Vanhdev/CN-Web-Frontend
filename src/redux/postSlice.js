import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: 'post',
    initialState: {
        create: {
            user_id: null,
            title: "",
            content: "",
            status: false,
        },

        allPosts: {
            listPosts: [],
            loading: false,
            error: false
        },

    },
    reducers: {
        createPost: (state, action) => {
            state.create.user_id = action.payload.user_id;
            state.create.title = action.payload.title;
            state.create.content = action.payload.content;
            state.create.status = false;
        },

        getAllPostStart: (state) => {
            state.allPosts.loading = true;
        },

        getAllPostSuccess: (state, action) => {
            state.allPosts.loading = false;
            state.allPosts.error = false;
            state.allPosts.listCards = action.payload;
        },

        getAllPostFailed: (state, action) => {
            state.allPosts.error = true;
            state.allPosts.loading = false;
            // state.message = action.payload;
        },
    }
})

export const {createPost, getAllPostStart, getAllPostSuccess, getAllPostFailed} = postSlice.actions;
export default postSlice.reducer;

