import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
    isLoggingIn: boolean;
    id: string;
    userName: string;
    errorMessage: string;
}

export const initialAuthState: AuthState = {
    isLoggingIn: false,
    id: '',
    userName: '',
    errorMessage: '',
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        loginRequest(state, action) {
            state.isLoggingIn = true;
        },
        loginSuccess(state, action) {
            const { id, userName } = action.payload;
            state.id = id;
            state.userName = userName;
        },
        loginFail(state, action) {
            const { errorMessage } = action.payload;
            state.errorMessage = errorMessage;
        },
    },
})

export const { loginRequest, loginSuccess, loginFail } = authSlice.actions;

export const authReducer = authSlice.reducer;