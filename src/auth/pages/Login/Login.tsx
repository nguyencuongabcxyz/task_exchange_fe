import React from 'react';
import { Dispatch } from 'redux'
import { connect } from 'react-redux';
import { RootState } from 'shared/redux/reducer';
import { loginRequest } from 'auth/redux/authSlice';

interface LoginProps {
    isLoggingIn: boolean,
    id: string,
    userName: string,
    loginRequest: (userName: string, password: string) => void;
}

class Login extends React.Component<LoginProps> {
    render() {
        const { id, userName, loginRequest } = this.props;
        return (
            <div>
                <h1>Login</h1>
                <button onClick={() => {loginRequest('Cuong Nguyen', 'Abcxyz')}}>Login</button>
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
    loginRequest: (userName: string, password: string) => {dispatch(loginRequest({ userName, password }))},
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
