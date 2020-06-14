import { combineReducers } from 'redux';
import { AuthState } from 'auth/redux/reducer';
import authReducer from 'auth/redux/reducer';

export interface RootState {
    auth: AuthState,
}

const rootReducer = combineReducers<RootState>({
    auth: authReducer,
})

export default rootReducer;