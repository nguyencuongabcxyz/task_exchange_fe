import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'shared/redux/reducer';
import { loginRequest, loginSuccess } from 'auth/redux/actions/login';

interface LoginProps {
    isLoggingIn: boolean,
    id: string,
    userName: string,
    loginRequest: (userName: string) => void;
    loginSuccess: (id: string, userName: string) => void;
}

class Login extends React.Component<LoginProps> {
    render() {
        const { isLoggingIn, id, userName, loginRequest, loginSuccess } = this.props;
        return (
            <div>
                <h1>Login</h1>
                <button onClick={() => {loginSuccess('01', 'CuongNguyen')}}>Login</button>
                <h2>{id}</h2>
                <h3>{userName}</h3>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    isLoggingIn: state.auth.isLoggingIn,
    id: state.auth.id,
    userName: state.auth.userName,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    loginRequest: (userName: string) => dispatch(loginRequest(userName)),
    loginSuccess: (id: string, userName: string) => dispatch(loginSuccess(id, userName)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
