import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {LOGIN_API, REGISTER_API} from '../../../assets/fetchAPIS';
const initialState = {
    token: localStorage.getItem('token') || null,
    isAuthenticated: !!localStorage.getItem('token'),
    username: localStorage.getItem('username') || null,
};
export const loginUser = createAsyncThunk('auth/login', async (formData) => {
    try {
              const response = await fetch(LOGIN_API, {
                method: 'POST', // or 'POST', 'PUT', 'DELETE', etc.
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData) // data can be `string` or {object}!
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const new_data = await response.json();
            return {username: formData.username, token: new_data.token};
        } catch (error) {
            alert('Invalid username or password');
        }
});
export const registerUser = createAsyncThunk('auth/register', async (form_data) => {
    try {
        const response = await fetch(REGISTER_API, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form_data),
        });
  
        if (!response.ok) {
          const errorData = await response.json().message;
          throw new Error(errorData || 'Registration failed');
        }
        const new_data = await response.json();
        return {username: form_data.username, token: new_data.token};
    } catch (e) {
        alert(e);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.token = null;
            state.isAuthenticated = false;
            state.username = null;
            localStorage.removeItem('token');
            localStorage.removeItem('username');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.isAuthenticated = true;
                state.username = action.payload.username;
                localStorage.setItem('token', action.payload.token);
                localStorage.setItem('username', action.payload.username);
            })
            .addCase(loginUser.rejected, (state) => {
                state.token = null;
                state.isAuthenticated = false;
                state.username = null;
                localStorage.removeItem('token');
                localStorage.removeItem('username');
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                console.log(action.payload);
                state.token = action.payload.token;
                state.isAuthenticated = true;
                state.username = action.payload.username;
                localStorage.setItem('token', action.payload.token);
                localStorage.setItem('username', action.payload.username);
            })
            .addCase(registerUser.rejected, (state) => {
                state.token = null;
                state.isAuthenticated = false;
                state.username = null;
                localStorage.removeItem('token');
                localStorage.removeItem('username');
            });

    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
