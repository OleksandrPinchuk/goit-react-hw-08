import { createSlice } from '@reduxjs/toolkit';
import { registerOperation, loginOperation, logOutOperation, refreshUser } from './operations';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
    builder
        .addCase(registerOperation.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        })
        .addCase(loginOperation.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        })
        .addCase(logOutOperation.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        })
        .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
        })
        .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        })
        .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
        });
    },
});

export default authSlice.reducer;