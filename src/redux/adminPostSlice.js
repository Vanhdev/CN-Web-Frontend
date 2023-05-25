import {createSlice} from '@reduxjs/toolkit';

const adminPostSlice = createSlice({
    name:'adminPost',
    initialState: {
        posts: [],
    },
    reducers: {
        updateAfterSearch: (state, action) => {
            state.posts = action.payload.posts;
        }
    }
})

export const {updateAfterSearch} = adminPostSlice.actions;
export default adminPostSlice.reducer;