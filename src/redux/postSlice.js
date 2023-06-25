import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: 'post',
    initialState: {
        createPost: null,
        allPosts: [],
        detailPost: {}
    },
    reducers: {
        createPost: (state, action) => {
            state.createPost = action.payload;
            state.allPosts = [...state.allPosts, action.payload];
        },

        getAllPostSuccess: (state, action) => {
            state.allPosts = action.payload;
        },

        getDetailPostSuccess: (state, action) => {
            state.detailPost = action.payload;
        },

        updateLikeSuccess: (state, action) => {
            const new_state = action.payload;
            state.detailPost = {...state.detailPost, ...new_state};
        },

        updateDislikeSuccess: (state, action) => {
            const new_state = action.payload;
            state.detailPost = {...state.detailPost, ...new_state};
        },

        acceptByAdmin: (state, action) => {
            const new_data = action.payload;
            const new_all_posts = state.allPosts.map(post => {
                if(post.id == new_data.id) {
                    return {...post, ...new_data};
                }
                else return post;
            })
            state.allPosts = new_all_posts;
        },

        deletePost: (state, action) => {
            const id_post = action.payload;
            const new_all_posts = state.allPosts.filter( post => {
                return post.id != id_post;
            })
            state.allPosts = new_all_posts;
        },

    }
})

export const {
    createPost, 
    getAllPostSuccess, 
    getDetailPostSuccess, 
    updateLikeSuccess, 
    updateDislikeSuccess, 
    acceptByAdmin,
    deletePost,
 } = postSlice.actions;
export default postSlice.reducer;

