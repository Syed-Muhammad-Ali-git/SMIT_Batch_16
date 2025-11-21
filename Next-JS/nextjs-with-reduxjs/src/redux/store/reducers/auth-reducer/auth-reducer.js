// Auth reducer slices are defined here...!

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isAuthenticated: null,
    usersList: []
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        UPDATE_AUTH_STATE: (state, action) => {
            console.log('Auth reducer is hitting!');
            const obj = {
                email: 'admin@gmail.com',
                pass: 'admom123'
            }
            state.isAuthenticated = obj;
        }
    }
});

export const { UPDATE_AUTH_STATE } = authSlice.actions;
export default authSlice.reducer;