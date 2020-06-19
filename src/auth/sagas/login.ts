import { call, put } from 'redux-saga/effects';
import loginAPI from 'fake_api/login';
import { loginSuccess } from 'auth/redux/authSlice';

export default function* loginSaga(userName: string, password: string) {
    const result = yield call(loginAPI, userName, password);
    console.log(result);
    yield put(loginSuccess({ id: result.id, userName: result.userName }));
}