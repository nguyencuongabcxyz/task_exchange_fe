import { combineReducers } from 'redux';
import { authReducer, AuthState } from 'auth/redux/authSlice';

export interface RootState {
    auth: AuthState,
}

const rootReducer = combineReducers<RootState>({
    auth: authReducer,
})

export default rootReducer;