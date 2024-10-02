import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';


// export const setHeaderToken = (token) => {
//     if (token) {
//         axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//     } else {
//         delete axios.defaults.headers.common['Authorization'];
//     };
// };
export const setHeaderToken = (token) => {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearHeaderToken = () => {
    delete axios.defaults.headers.common['Authorization'];
};

export const registerOperation = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
    try {
        const response = await axios.post('/users/signup', userData);
        setHeaderToken(response.data.token);
        console.log(response.data);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const loginOperation = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
    try {
        const response = await axios.post('/users/login', userData);
        setHeaderToken(response.data.token);
        console.log(response.data.token)
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logOutOperation = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        console.log('logout');
        clearHeaderToken();
        // return;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (!persistedToken) {
        return thunkAPI.rejectWithValue('No token available');
        }

        setHeaderToken(persistedToken);

        try {
            const response = await axios.get('/users/current');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
