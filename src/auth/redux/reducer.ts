import IAction from 'shared/interfaces/IAction';

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

const authReducer = function (state: AuthState = initialAuthState, action: IAction) {
    switch(action.type) {
    case 'LOGIN_REQUEST':
        return { ...state, isLoggingIn: true }
    case 'LOGIN_SUCCESS':
        return { ...state, isLoggingIn: false, id: action.payload.id, userName: action.payload.userName }
    case 'LOGIN_FAIL':
        return { ...state, isLoggingIn: false, errorMessage: action.payload.errorMessage }
    default:
        return state;
    }
}

export default authReducer;