import { createSlice } from '@reduxjs/toolkit';
import Action from 'shared/interfaces/Action';

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

/**
 * Export interfaces for payload of actions.
 */
export type LoginRequestAction = Action<{ userName: string, password: string }>;
export type LoginSuccessAction = Action<{ id: string, userName: string }>;
export type LoginFailAction = Action<{ errorMessage: string }>;

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        loginRequest(state: AuthState, action: LoginRequestAction) {
            state.isLoggingIn = true;
        },
        loginSuccess(state: AuthState, action: LoginSuccessAction) {
            const { id, userName } = action.payload;
            state.isLoggingIn = false;
            state.id = id;
            state.userName = userName;
        },
        loginFail(state: AuthState, action: LoginFailAction) {
            const { errorMessage } = action.payload;
            state.isLoggingIn = false;
            state.errorMessage = errorMessage;
        },
    },
})

export const { loginRequest, loginSuccess, loginFail } = authSlice.actions;

export const authReducer = authSlice.reducer;