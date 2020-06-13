import IAction from 'shared/interfaces/IAction';

export function loginRequest(userName: string): IAction {
    return {
        type: 'LOGIN_REQUEST',
        payload: {
            userName,
        },
    }
}

export function loginSuccess(id: string, userName: string): IAction {
    return {
        type: 'LOGIN_SUCCESS',
        payload: {
            id,
            userName,
        },
    }
}

export function loginFail(errorMessage: string): IAction {
    return {
        type: 'LOGIN_FAIL',
        payload: {
            errorMessage,
        },
    }
}