import {createSlice} from '@reduxjs/toolkit';

const commentsTourSlice = createSlice({
    name: 'commentsTour',
    initialState: {
        comments: [],
    },
    reducers: {
        addComments: (state, action) => {
            state.comments = [...state.comments, action.payload]
        }, 
        removeComment: (state, action) => {
            const index = action.payload;
            if (index !== -1) {
              state.comments = state.comments.slice(0, index).concat(state.comments.slice(index + 1));
            }
        },
    }
})

export const {addComments, removeComment} = commentsTourSlice.actions;
export default commentsTourSlice.reducer;