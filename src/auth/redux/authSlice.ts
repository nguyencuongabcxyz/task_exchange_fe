import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
        loginRequest(state: AuthState, action: PayloadAction<{userName: string}>) {
            state.isLoggingIn = true;
        },
        loginSuccess(state: AuthState, action: PayloadAction<{id: string, userName: string}>) {
            const { id, userName } = action.payload;
            state.id = id;
            state.userName = userName;
        },
        loginFail(state: AuthState, action: PayloadAction<{errorMessage: string}>) {
            const { errorMessage } = action.payload;
            state.errorMessage = errorMessage;
        },
    },
})

export const { loginRequest, loginSuccess, loginFail } = authSlice.actions;

export const authReducer = authSlice.reducer;