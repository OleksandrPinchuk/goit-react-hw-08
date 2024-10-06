import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.goit.global';

export const setHeaderToken = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearHeaderToken = () => {
    axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
        try {
            const response = await axios.post('/users/signup', credentials);
            setHeaderToken(response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
        try {
            const response = await axios.post('/users/login', credentials);
            setHeaderToken(response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
        try {
            await axios.post('/users/logout');
            clearHeaderToken();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
        const reduxState = thunkAPI.getState();
        setHeaderToken(reduxState.auth.token);
        const response = await axios.get("/users/current");
        return response.data;
    },
    {
        condition: (_, thunkAPI) => {
            const reduxState = thunkAPI.getState();
            return reduxState.auth.token !== null;
        }
    },
);