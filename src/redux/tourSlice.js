import {createSlice} from '@reduxjs/toolkit';

const tourSlice = createSlice({
    name: 'tour',
    initialState: {
        tour: {},
        newRate: {},
        allRates: [],
        newBooking: {},
        allBookedTours: [],
        allLovedTours: [],
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
        },

        deleteTourBooked: (state, action) => {
            state.allBookedTours?.filter( tour => tour?.booking?.id != action.payload);
        },

        getLovedTour: (state, action) => {
            state.allLovedTours = action.payload;
        },

        deleteTourLoved: (state, action) => {
            state.allLovedTours?.filter( tour => tour?.tour?.id != action.payload);
        },

        updateRate: (state, action) => {
            console.log("payload updated: ", JSON.stringify(action.payload));
            console.log("all rates: ", JSON.stringify(state.allRates));
        }
    }
})

export const {
    detailTour, 
    createNewRate, 
    getRates, 
    bookingTour, 
    getBookedTour, 
    deleteTourBooked, 
    getLovedTour, 
    deleteTourLoved,
    updateRate
} = tourSlice.actions;
export default tourSlice.reducer;