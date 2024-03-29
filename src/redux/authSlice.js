import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: "auth",
    initialState: {
        login: {
            currentUser: null,
            loading: false,
            error: false,
        },
        register: {
            loading: false,
            error: false,
            success: false,
        },
    },
    reducers: {
        loginStart: (state) => {
            state.login.loading = true;
        },

        loginSuccess: (state, action) => {
            state.login.loading = false;
            state.login.currentUser = action.payload;
            state.login.error = false;
        },

        loginFailed: (state) => {
            state.login.loading = false;
            state.login.error = true;
        },

        registerStart: (state) => {
            state.register.loading = true;
        },
        
        registerSuccess: (state) => {
            state.register.loading = false;
            state.register.success = true;
            state.register.error = false;
        },

        registerFailed: (state) => {
            state.register.loading = false;
            state.register.error = true;
            state.register.success = false;
        },
        
        logout: (state) => {
            state.login.loading = false;
            state.login.currentUser = null;
            state.login.error = false;
        },
        
        updateUserSuccess: (state, action) => {
            state.login.currentUser = {...state.login.currentUser, ...action.payload};
            // console.log("current user: ", state.login.currentUser);
        }
    }
})

export const {
    loginStart, 
    loginSuccess, 
    loginFailed, 
    registerStart, 
    registerSuccess, 
    registerFailed,
    logout,
    updateUserSuccess
} = authSlice.actions;

export default authSlice.reducer;