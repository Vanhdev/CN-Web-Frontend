import {createSlice} from '@reduxjs/toolkit';

const newPostSlice = createSlice({
    name: 'newPost',
    initialState: {
        namePost: '',
        topicPost: '',
        shortDesc: '',
        fullDesc: '',
        // imageList: [],
    },
    reducers: {
        updatePost: (state, action) => {
            state.namePost = action.payload.namePost;
            state.topicPost = action.payload.topicPost;
            state.shortDesc = action.payload.shortDesc;
            state.fullDesc = action.payload.fullDesc;
            // state.imageList = action.payload.imageList;
        }
    }
})

export const {updatePost} = newPostSlice.actions;
export default newPostSlice.reducer;