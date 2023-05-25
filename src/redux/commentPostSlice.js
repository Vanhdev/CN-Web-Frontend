import {createSlice} from '@reduxjs/toolkit';

const commentPostSlice = createSlice({
    name: 'commentPost',
    initialState: {
        text: 'This is a comment nha!',
    },
    reducers: {
        updateCommentPost: (state, action) => {
            state.text = action.payload.text;
        }
    }
})

export const {updateCommentPost} = commentPostSlice.actions;
export default commentPostSlice.reducer;