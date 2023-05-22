import {createSlice} from '@reduxjs/toolkit';

const numberClickSlice = createSlice({
    name: 'numberClick',
    initialState: {
        count: 1560,
    },
    reducers: {
        updateNumberClick: (state, action) => {
            state.count = action.payload.count;
        }
    }
})

export const {updateNumberClick} = numberClickSlice.actions;
export default numberClickSlice.reducer;