import {createSlice} from '@reduxjs/toolkit';

const tourSlice = createSlice({
    name: 'tour',
    initialState: {
        dateStart: null,
        time: '',
        countAdult: 0,
        countTeenager: 0,
        countBaby: 0,
        total: null
    },
    reducers: {
        updateTour: (state, action) => {
            state.dateStart = action.payload.dateStart;
            state.time = action.payload.time;
            state.countAdult = action.payload.countAdult;
            state.countTeenager = action.payload.countTeenager;
            state.countBaby = action.payload.countBaby;
            state.total = action.payload.total;
        }
    }
})

export const {updateTour} = tourSlice.actions;
export default tourSlice.reducer;