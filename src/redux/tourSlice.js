import {createSlice} from '@reduxjs/toolkit';

const tourSlice = createSlice({
    name: 'tour',
    initialState: {
        tour: {},
        newRate: {},
        allRates: [],
        newBooking: {},
        allBookedTours: [],
    },
    reducers: {
        detailTour: (state, action) => {
            state.tour = action.payload;
        },

        createNewRate: (state, action) => {
            state.newRate = action.payload;
            state.allRates.rates = [...state.allRates.rates, action.payload];
        },

        getRates: (state, action) => {
            state.allRates = action.payload;
        },

        bookingTour: (state, action) => {
            state.allBookedTours = [...state.allBookedTours, action.payload];
        },

        getBookedTour: (state, action) => {
            state.allBookedTours = action.payload;
        }
    }
})

export const {detailTour, createNewRate, getRates, bookingTour, getBookedTour} = tourSlice.actions;
export default tourSlice.reducer;