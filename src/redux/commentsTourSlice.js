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
        updateCommentTour: (state, action) => {
            // console.log(state.comments);
            state.comments.map((item, id) => {
                if(id === action.payload.index) {
                    item.positionValue = action.payload.positionValue;
                    item.roomValue = action.payload.roomValue;
                    item.priceValue = action.payload.priceValue;
                    item.serviceValue = action.payload.serviceValue;
                    item.comment = action.payload.comment;
                }
            })
        }
    }
})

export const {addComments, removeComment, updateCommentTour} = commentsTourSlice.actions;
export default commentsTourSlice.reducer;