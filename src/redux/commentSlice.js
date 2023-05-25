import {createSlice} from '@reduxjs/toolkit';

const commentUserSlice = createSlice({
    name: 'commentUser',
    initialState: {
        positionValue: 1.5,
        roomValue: 3.5,
        priceValue: 3.5,
        serviceValue: 3.5,
        comment: "This is a comment!"
    },
    reducers: {
        updateComment: (state, action) => {
            state.positionValue = action.payload.positionValue;
            state.roomValue = action.payload.roomValue;
            state.priceValue = action.payload.priceValue;
            state.serviceValue = action.payload.serviceValue;
            state.comment = action.payload.comment;
        }
    }
})

export const {updateComment} = commentUserSlice.actions;
export default commentUserSlice.reducer;