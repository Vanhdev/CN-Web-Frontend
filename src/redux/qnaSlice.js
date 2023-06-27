import {createSlice} from '@reduxjs/toolkit';

const qnaSlice = createSlice({
    name:'ans',
    initialState: {
        newQuestion: {},
        allQuestions: []
    },
    reducers: {
        createQuestion: (state, action) => {
            // console.log("action.payload: ", action.payload);
            state.newQuestion = action.payload;
            state.allQuestions = [...state.allQuestions, state.newQuestion];
        },

        getAllQuestions: (state, action) => {
            state.allQuestions = action.payload;
        },

        answerByAdmin: (state, action) => {
            const new_answer = action.payload;
            const newArr = state.allQuestions.forEach( question => {
                if(question.id == new_answer.id) {
                    const new_ans = {...question, ...new_answer};
                    return new_ans;
                }
                else return question;
            });
            state.allQuestions = newArr;
        }
    }
})

export const {createQuestion, getAllQuestions, answerByAdmin} = qnaSlice.actions;
export default qnaSlice.reducer;