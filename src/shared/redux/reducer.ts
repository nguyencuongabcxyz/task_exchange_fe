import { combineReducers } from 'redux';
import { AuthState } from 'auth/redux/reducer';
import authReducer from 'auth/redux/reducer';

interface RootState {
    auth: AuthState,
}

const rootReducer = combineReducers<RootState>({
    auth: authReducer,
})

export default rootReducer;