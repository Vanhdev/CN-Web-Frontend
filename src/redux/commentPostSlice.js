import {createSlice} from '@reduxjs/toolkit';

const commentPostSlice = createSlice({
    name: 'commentPost',
    initialState: {
        allComments: [],
        newComment: {},
    },
    reducers: {
        updateCommentPost: (state, action) => {
            const newComment = action.payload;


            const newArr = state.allComments.map( comment => {
                if(comment.id == newComment.id) {
                    const newCmt = {...comment, ...newComment}
                    return newCmt;
                }
                else return comment;
            });
            state.allComments = newArr;
        },

        createComment: (state, action) => {
            state.newComment = action.payload;
            state.allComments = [...state.allComments, action.payload];
        },

        getAllCmtsByID: (state, action) => {
            state.allComments = action.payload;
        },

        deleteCommentPost: (state, action) => {
            const newArr = [];
            state.allComments.forEach(comment => {
                if(comment.id != action.payload.id) {
                    newArr.push(comment);
                }
            })
            state.allComments = newArr;
        }
    }
})

export const {updateCommentPost, createComment, getAllCmtsByID, deleteCommentPost} = commentPostSlice.actions;
export default commentPostSlice.reducer;