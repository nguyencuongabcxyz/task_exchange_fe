import React from 'react';
import { connect } from 'react-redux';
import { RootState } from 'shared/redux/reducer';
import { loginSuccess, loginRequest } from 'auth/redux/authSlice';

interface LoginProps {
    isLoggingIn: boolean,
    id: string,
    userName: string,
    loginRequest: (userName: string) => void;
    loginSuccess: ({}) => void;
}

class Login extends React.Component<LoginProps> {
    render() {
        const { id, userName, loginSuccess } = this.props;
        return (
            <div>
                <h1>Login</h1>
                <button onClick={() => {loginSuccess({ id: '01', userName: 'Cuong Nguyen' })}}>Login</button>
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

const mapDispatchToProps = { loginSuccess, loginRequest }

export default connect(mapStateToProps, mapDispatchToProps)(Login);
