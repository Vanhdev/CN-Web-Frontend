import {createSlice} from '@reduxjs/toolkit';

const searchTextSlice = createSlice({
    name:'searchText',
    initialState: {
        text: '',
    },
    reducers: {
        updateTextSearch: (state, action) => {
            state.text = action.payload.text;
        }
    }
})

export const {updateTextSearch} = searchTextSlice.actions;
export default searchTextSlice.reducer;