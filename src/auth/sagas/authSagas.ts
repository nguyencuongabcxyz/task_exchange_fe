import { call } from 'redux-saga/effects';
import SagaOrchestrator from 'shared/saga/sagaOrchestrator';
import { loginRequest, LoginRequestAction } from 'auth/redux/authSlice';
import loginSaga from './login';

export function install(sagaOrchestrator: SagaOrchestrator) {
    sagaOrchestrator
        .takeEvery(loginRequest.type, function* (action: LoginRequestAction){
            yield call(loginSaga, action.payload.userName, action.payload.password)
        })
}