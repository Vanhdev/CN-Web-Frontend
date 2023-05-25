import { createSlice } from "@reduxjs/toolkit";

const personalSlice = createSlice({
    name: 'personal',
    initialState: {
        loading: false
    },
    reducers: {
        updateLoading: (state, action) => {
            state.loading = action.payload.loading;
        }
    }
})

export const {updateLoading} = personalSlice.actions;
export default personalSlice.reducer;